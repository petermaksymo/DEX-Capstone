import numpy as np

def arb_trader(pool_info, start_coin):

    rate = np.zeros((4, 4))

    rate[0][1] = int(pool_info['pool_ab']['coin_b']) / int(pool_info['pool_ab']['coin_a'])
    rate[0][2] = int(pool_info['pool_ac']['coin_c']) / int(pool_info['pool_ac']['coin_a'])
    rate[0][3] = int(pool_info['pool_ad']['coin_d']) / int(pool_info['pool_ad']['coin_a'])
    rate[1][2] = int(pool_info['pool_bc']['coin_c']) / int(pool_info['pool_bc']['coin_b'])
    rate[1][3] = int(pool_info['pool_bd']['coin_d']) / int(pool_info['pool_bd']['coin_b'])
    rate[2][3] = int(pool_info['pool_cd']['coin_d']) / int(pool_info['pool_cd']['coin_c'])

    for i in range(4):
        rate[i][i] = 1

        for j in range(i):
            rate[i][j] = 1 / rate[j][i]

    max_weight = [0]
    path = [[]]

    def solver(start_coin, curr_coin, visited, curr_weight):
        local_visited = visited.copy()
        local_visited.append(curr_coin)
        # print("new level")
        # print(local_visited)

        if local_visited.__len__() <= 4:
            for i in range(4):
                if i not in local_visited: 
                    solver(start_coin, i, local_visited, curr_weight * rate[curr_coin][i])

        new_weight = curr_weight * rate[local_visited[-1]][start_coin]
        if new_weight > max_weight[0]:
            max_weight[0] = new_weight
            path[0] = local_visited + [start_coin]
        
        return

    # print(rate)
    solver(start_coin, start_coin, [], 1)
    return max_weight, rate, path
    

