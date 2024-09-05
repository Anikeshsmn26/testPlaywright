pipeline {
    agent {
        docker {
            image 'test-playwright' // The Docker image we built earlier
            args '-u root'          // Run as root to avoid permission issues
        }
    }

    environment {
        // If needed, you can add environment variables here
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'    // Install project dependencies
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps' // Install Playwright browsers
                sh 'npx playwright test'                // Run Playwright tests
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: 'test-results/**/*.png, test-results/**/*.json', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            junit 'test-results/**/*.xml'   // Publish test results in JUnit format
        }
        cleanup {
            cleanWs()  // Clean up workspace after the job
        }
    }
}
