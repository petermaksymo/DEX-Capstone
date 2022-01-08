def getCoins(coin):

    if coin == "coin_a":
        return {"name": "Coin A", "short_name": "A", "color": "#FF8686", "price": 1.5,}
    elif coin == "coin_b":
        return {"name": "Coin B", "short_name": "B", "color": "#FBC4AB", "price": 3.5,}
    elif coin == "coin_c":
        return {"name": "Coin C", "short_name": "C", "color": "#EB83A0", "price": 5.5,}
    elif coin == "usd":
        return {"name": "USD", "short_name": "U", "color": "#6677DA", "price": 1.0,}
    else:
        return None
