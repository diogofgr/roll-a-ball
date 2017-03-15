#pragma strict

var maxFallDistance = -10;
private var isPlaying = true;

var GameOverSound : AudioClip;

function Update () {
	if (transform.position.y <= maxFallDistance && isPlaying == true){
		RestartLevel();
		isPlaying = false;
	}
}

function RestartLevel(){
	GetComponent.<AudioSource>().clip = GameOverSound;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(GetComponent.<AudioSource>().clip.length);
	Application.LoadLevel("Level01");
	GameMaster.currentScore = 0;
}