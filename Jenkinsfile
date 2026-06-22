pipeline {
agent any


stages {

    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('SonarQube Analysis') {
        steps {
            bat 'sonar-scanner'
        }
    }

}


}
