module Generator where

compileA :: String -> String -> String
compileA href cont = "<a " ++ href ++ " target=\"_blank\">" ++ cont ++ "</a>"

compileImg :: String -> String -> String -> String
compileImg src alt height = "<img " ++ src ++ " " ++ alt ++ " " ++ height ++ "/>"

compileToTag :: [String] -> String
compileToTag l = compileA (head l) $ compileImg (l !! 1) (l !! 2) (l !! 3)

compileAll :: ([String], [[String]]) -> String
compileAll (h, b) = unlines $ [compileToTag h, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"] ++ map compileToTag b

split :: Eq a => a -> [a] -> [[a]]
split _ [] = []
split e l = f : split e (drop 1 ls)
  where
    (f, ls) = span (/= e) l

sections :: String -> [[String]]
sections = filter (not . null) . split "" . lines

headAndBody :: [String] -> ([String], [[String]])
headAndBody all = (heading, body)
  where
    s = split "--------------------------------" all
    heading = head s
    body = filter (not . null) $ tail s

main = do
  intro <- readFile "./template-intro.md"
  frameworks <- readFile "./frameworks"
  outro <- readFile "./template-outro.md"
  writeFile "README.md" $ unlines $ [intro] ++ map (compileAll . headAndBody) (sections frameworks) ++ [outro]
