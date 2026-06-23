pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build APK') {
            steps {
                bat 'cd android && gradlew assembleDebug'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                bat 'sonar-scanner'
            }
        }

        stage('Archive APK') {
            steps {
                archiveArtifacts artifacts: 'android/app/build/outputs/apk/debug/*.apk'
            }
        }
    }
}