-- Resource Metadata
fx_version 'cerulean'
games { 'gta5' }

author 'VikingTheDev <support@vikingthe.dev>'
description 'Example resource'
version '1.0.0'


client_scripts {
   "modules/**/client/*.js"
}

server_script {
    'index.js'
}