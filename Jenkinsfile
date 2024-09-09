pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
        // Add other environment variables here if required
    }

    stages {
        stage('Install Node.js & Playwright Dependencies') {
            steps {
                // Ensure Node.js is installed and available in the PATH
                script {
                    // If Node.js is not installed, you can install it here
                    sh 'node --version || echo "Node.js is not installed!"'
                }

                // Install Node.js dependencies using npm or yarn
                sh 'npm install'  // Ensure that package.json exists in your repo
                
                // Install Playwright browsers
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }

        stage('Archive Test Results') {
            steps {
                // Archive any test result files (screenshots, videos, JSON files, etc.)
                archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            // Optionally publish JUnit-style test results if you are generating XML reports
            junit 'test-results/**/*.xml'
        }

        cleanup {
            // Clean up the workspace after the job finishes
            cleanWs()
        }
    }
}
