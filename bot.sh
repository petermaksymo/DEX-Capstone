while true
do
	sleep 5
	echo "Running arbitrage bot: "
	curl localhost:5000/bot
	echo ""
done
