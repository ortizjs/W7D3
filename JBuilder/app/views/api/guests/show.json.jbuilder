# json.extract! @guest, :name, :age, :favorite_color

json.partial! 'api/guests/guests', guest: @guest

json.gifts do
  json.title @guest.gifts
  json.description @guest.gifts
end