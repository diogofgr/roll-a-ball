#pragma strict

var rotationSpeed = 100;
var jumpHeight = 8;

private var isOnAir = false;

private var maxJumps = 2;
private var jumpCount = 0;

var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;

function Update () {

    //ROTATION:
    var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed; //A,D or arrows to controll, built into Unity
    rotation *= Time.deltaTime;
    GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation); //pushing the object to make it rotate

    //JUMPING:
	  if (Input.GetKeyDown(KeyCode.W) && jumpCount < maxJumps){
	      GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	      jumpCount++;
	  }

}

function OnCollisionEnter() {
	jumpCount = 0;

	var theHit = Random.Range(0, 3); // PLAY SOUNDS WHEN COLLISIONS START
	switch (theHit){
		case 0: GetComponent.<AudioSource>().clip = Hit01;
		break;
		case 1: GetComponent.<AudioSource>().clip = Hit02;
		break;
		case 2: GetComponent.<AudioSource>().clip = Hit03;
		break;
    }
    GetComponent.<AudioSource>().Play();
}

function OnCollisionExit() {
	//isOnAir = true;

}