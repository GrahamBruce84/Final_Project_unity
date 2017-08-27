function OnTriggerEnter (info : Collider){
	Destroy(gameObject);
	CoinSystem001.coinscollected +=1;
}
