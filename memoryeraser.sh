#! /bin/bash

read -p "This will delete the .git dir! " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then 
	rm -rf .git/
	git init
	git add .
	git commit -m "all clear!"
	git push --set-upstream https://github.com/moonlitautumn/webbb.git master --force
	echo "done!"
fi

