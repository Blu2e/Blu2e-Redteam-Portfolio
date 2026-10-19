# 서비스 식별

## 1. 실습 목적
 - 가상 환경에서 대상 서버의 네트워크 연결과 실행 중인 서비스 확인
 - OpenSSH의 서비스 버전과 패키지 정보 조사
 - 패키지 업데이트 전후의 차이를 비교하고 SSH 접속이 정상적으로 유지되는지 확인

## 2. 대상 환경
 - 공격자 환경 : Kali Linux
 - 대상 서버 : Ubuntu Server 24.04.5 LTS
 - 대상 IP : 10.10.10.4
 - Kali Linux IP : 10.10.10.3
 - 실습 네트워크 : RedTeam-Lab (10.10.10.0/24)
 - 대상 서비스 : OpenSSH

## 3. 실행한 명령어

### Kali Linux : 네트워크 및 서비스 확인
 - ping -c 4 10.10.10.4 : 대상 서버와 네트워크 통신이 가능한지 확인
 - nmap 10.10.10.4 : 대상 서버의 기본 TCP 포트 스캔
 - nmap -sV -p 22 10.10.10.4 : 22번 포트의 서비스 및 버전 정보 탐지
 - searchsploit openssh 9.6 : OpenSSH 9.6 관련 자료 검색
 - searchsploit openssh : OpenSSH 관련 자료를 넓은 범위에서 검색
 - ssh blue@10.10.10.4 : 대상 서버에 SSH로 접속하여 정상 접속 여부 확인

### Ubuntu : 패키지 및 서비스 확인
 - sudo ss -lntp : TCP 연결을 대기하는 포트와 관련 프로세스 확인
 - apt policy openssh-server : OpenSSH 서버 패키지의 설치 버전과 후보 버전 확인
 - sudo apt update : 패키지 저장소의 패키지 목록 갱신
 - apt list --upgradable openssh-server : OpenSSH 서버 패키지의 업데이트 가능 여부 확인
 - apt changelog openssh-server : OpenSSH 패키지의 변경 기록 및 보안 수정 내역 조사
 - sudo apt install --only-upgrade openssh-server : 설치된 OpenSSH 서버 패키지 업데이트

### Kali Linux : 업데이트 후 재검증
 - nmap -sV -p 22 10.10.10.4 : 업데이트 후 SSH 서비스 버전 정보 재확인
 - ssh blue@10.10.10.4 : 업데이트 후 SSH 접속 상태 재검증
 - whoami, hostname : 접속한 계정과 대상

## 4. 확인한 결과
 - ping 명령어에서 4개의 패킷을 전송하고 모두 응답, 네트워크 통신 정상 확인
 - Nmap 기본 스캔 22/tcp open ssh 확인
 - 서비스 버전 탐지 결과 OpenSSH 버전 정보 확인
 - searchsploit openssh 9.6에서는 검색 결과가 나오지 않았고, searchsploit openssh에서는 여러 관련 자료 검색
 - 업데이트 전 OpenSSH 패키지 설치 버전은 1:9.6p1-3ubuntu13.19였으며, 저장소의 후보 버전은 1:9.6p1-3ubuntu13.20
 - 패키지 변경 기록에서 여러 보안 수정 항목 확인
 - OpenSSH 관련 패키지 3개를 업데이트, 패키지 제거는 발생하지 않음
 - 업데이트 후 설치 버전은 1:9.6p1-3ubuntu13.20으로 변경
 - 업데이트 후 Nmap에서 탐지된 SSH 서비스 버전 정보가 변경, SSH 접속도 정상적으로 이루어졌다.

## 5. 결과 해석
 - Kali Linux에서 Ubuntu Target으로 네트워크 통신 가능 확인
 - 대상 서버의 22번 포트에서 SSH 서비스가 실행 중이며, Ubuntu 내부에서도 sshd 프로세스가 연결 대기 확인
 - 패키지 저장소 목록을 갱신한 뒤 기존 설치 버전보다 새로운 OpenSSH 패키지가 제공되는 것 확인
 - 패키지 변경 기록을 조사한 후 업데이트 수행, 업데이트 후에도 SSH 서비스 접속 정상적으로 유지 확인
 - SearchSploit에서 관련 자료를 검색했지만, 검색 결과만으로 대상 서버에 적용되는 취약점이 존재한다고 판단 불가

## 6. 추가 조사할 내용
 - Ubuntu 공식 보안 공지를 통해 업데이트에 포함된 보안 수정 사항과 영향받는 패키지 버전 비교
 - 각 취약점의 영향 조건과 대상 서버의 설정을 확인하여 실제 적용 가능성을 판단
 - 서비스 버전 탐지 결과와 서버 내부 패키지 정보를 비교할 때 발생할 수 있는 차이 조사
 - 업데이트 전후의 결과를 근거로 보안 개선 사항과 검증 범위 기록