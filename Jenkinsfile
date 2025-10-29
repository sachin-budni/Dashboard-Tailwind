pipeline {
    agent any
    tools {
        // Make sure 'node-20' is configured in Jenkins > Global Tool Configuration
        nodejs 'node' 
    }
    stages {
        stage('Checkout') {
            steps {
                checkout main
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Assuming you have 'test:ci' script for a headless run in package.json
                sh 'npm run test -- --no-watch --browsers=ChromeHeadless' 
            }
        }
        stage('Build') {
            steps {
                // Builds for production, generating files in dist/
                sh 'npm run build -- --configuration=production'
            }
        }
        stage('Deploy') {
            steps {
                // TODO: Replace with your actual deployment logic
                echo 'Deploying to staging server...'
                // Example: Deploy using a pre-configured Jenkins deployment plugin
            }
        }
    }
    post {
        always {
            // Clean up workspace after build
            deleteDir()
        }
        failure {
            echo 'Pipeline failed. Sending failure notification...'
            // Add notification steps here (e.g., sending an email)
        }
    }
}