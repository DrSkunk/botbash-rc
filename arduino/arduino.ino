char rxChar= 0; 

void setup(){
  Serial.begin(9600);
  Serial.flush();
}

void loop(){
  if (Serial.available() > 0){
    rxChar = Serial.read();
    Serial.flush();

  switch (rxChar) {
    case 'l':
        Serial.print("Going left");
        break;
    case 'r':
        Serial.print("Going right");
        break;
    case 'f':
        Serial.print("Going front");
        break;
    case 'b':
        Serial.print("Going back");
        break;
    default:
      Serial.print("'");
      Serial.print((char)rxChar);
      Serial.println("' is not a command!");
    }
  }
}
