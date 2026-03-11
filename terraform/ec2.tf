data "aws_ami" "ubuntu" {
  most_recent = true

  owners = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

resource "aws_key_pair" "devops_key" {
  key_name   = "devops-lab-key"
  public_key = file("~/.ssh/id_rsa.pub")
}

##EC2 INSTANCE FOR JENKINS
resource "aws_instance" "jenkins" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.medium"

  subnet_id = aws_subnet.public1.id

  vpc_security_group_ids = [
    aws_security_group.devops_sg.id
  ]

  key_name = aws_key_pair.devops_key.key_name

  tags = {
    Name = "devops-lab-jenkins"
  }
}

##EC2 INSTANCE FOR SONARQUBE
resource "aws_instance" "sonarqube" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.medium"

  subnet_id = aws_subnet.public2.id

  vpc_security_group_ids = [
    aws_security_group.devops_sg.id
  ]

  key_name = aws_key_pair.devops_key.key_name

  tags = {
    Name = "devops-lab-sonarqube"
  }
}