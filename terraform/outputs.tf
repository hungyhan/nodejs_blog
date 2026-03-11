output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet1" {
  value = aws_subnet.public1.id
}

output "public_subnet2" {
  value = aws_subnet.public2.id
}

output "private_subnet1" {
  value = aws_subnet.private1.id
}

output "private_subnet2" {
  value = aws_subnet.private2.id
}

output "security_group_id" {
  value = aws_security_group.devops_sg.id
}

output "nat_eip" {
  value = aws_eip.nat_eip.public_ip
}

output "jenkins_ip" {
  value = aws_instance.jenkins.public_ip
}

output "sonarqube_ip" {
  value = aws_instance.sonarqube.public_ip
}