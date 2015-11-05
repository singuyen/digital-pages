eval `ssh-agent` -s
ssh-add ~/.ssh/id_rsa
cd /var/www/digital-pages
git pull origin master
