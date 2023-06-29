import math


maxspeed = input("max. speed (km/h):")
oberfläche = input("max. surface (cm²):")


maxq = 0.401 / 2 * int(maxspeed) * int(maxspeed) #Max-Q = 0,5 * ρ * V^2
luftdruck = int(maxq) / 100
luftwiederstand = 0.5 * 0.401 * int(maxspeed) * int(maxspeed) * int(oberfläche) * 0.50 #F = 0.5 * ρ * v^2 * A * Cd



print(str(luftdruck) + "hPa")
print(str(luftwiederstand) + "hPa")






def berechne_zeit(anfangsgeschwindigkeit, endgeschwindigkeit, beschleunigung):
    zeit = (endgeschwindigkeit - anfangsgeschwindigkeit) / beschleunigung
    return zeit

# Beispielwerte
anfangsgeschwindigkeit = 0  # m/s
endgeschwindigkeit = int(maxspeed)  # m/s
beschleunigung = 122  # m/s²

ergebnis = berechne_zeit(anfangsgeschwindigkeit, endgeschwindigkeit, beschleunigung)
print("The required time to maxQ is :", ergebnis, "seconds")