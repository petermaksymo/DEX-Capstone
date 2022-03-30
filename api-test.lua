-- lua script to be ran with wrk to benchmark the api

-- counter = 0

-- request = function()
--    path = "/account"
--
--    wrk.scheme = "http"
--    wrk.method = "POST"
--    wrk.body   = "username=api_test" .. counter
--    wrk.headers["Content-Type"] = "application/x-www-form-urlencoded"
--    counter = counter + 1
--
--    return wrk.format(nil, path)
-- end

request = function()
   path = "/wallet"

   wrk.scheme = "http"
   wrk.method = "GET"
   wrk.headers["Authorization"] = "Bearer <token>"

   return wrk.format(nil, path)
end