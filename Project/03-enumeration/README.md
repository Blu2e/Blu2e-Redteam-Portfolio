# 서비스 식별 및 서버 설정 확인

## 1. 실습 목적
 - 가상 환경에서 대상 서버의 네트워크 연결과 실행 중인 서비스 확인
 - OpenSSH의 서비스 버전과 패키지 정보 조사
 - SSH 접속이 정상적으로 유지되는지 확인

## 2. 대상 환경
 - 공격자 환경 : Kali Linux
 - 대상 서버 : Ubuntu Server 24.04.5 LTS
 - 대상 IP : 10.10.10.4
 - Kali Linux IP : 10.10.10.3
 - 실습 네트워크 : RedTeam-Lab (10.10.10.0/24)
 - 대상 서비스 : OpenSSH

## 3. 실행한 명령어

### Kali Linux : 네트워크 연결 확인
 - ping -c 4 10.10.10.4
  - 대상 Ubuntu 서버와 네트워크 통신이 가능한지 확인
  - 전송한 패킷과 응답 받은 패킷 수를 비교해 통신 상태 확인
 
### Kali Linux : 열린 포트 확인
 - nmap 10.10.10.4
  - 대상 서버의 기본 TCP 포트 검사
  - 열린 포트와 포트 상태 확인

### Kali Linux : SSH 서비스 식별
 - nmap -sV -p 22 10.10.10.4
  - -sV : 서비스 및 버전 정보 탐지 시도
  - -p 22 : 22번 포트만 검사
  - 탐지 결과를 바탕으로 SSH 서비스와 버전 정보 확인

### Ubuntu Target : 실행 중인 서비스 확인
 - sudo ss -lntp
  - TCP 연결을 대기 중인 포트와 관련 프로세스를 확인
  - SSH 서비스 프로세스인 sshd가 연결을 대기하고 있는지 확인

### Ubuntu Target : SSH 보안 설정 확인
 - sudo sshd -T | grep -E '^(permitrootlogin|passwordauthentication|pubkeyauthentication|permitemptypasswords|maxauthtries|x11forwarding|allowtcpforwarding) '
  - sshd -T : SSH 서버의 유효 설정을 출력
  - grep -E : 지정한 보안 설정 항목만 골라 출력
  - root 로그인 정책, 인증 방식, 인증 시도 제한 등의 설정 확인
  - 본 명령어는 설정을 변경하지 않고 조회만 수행

## 4. 확인한 결과
 - ping 명령어에서 4개의 패킷을 전송하고 모두 응답, 네트워크 통신 정상 확인
 - Nmap 기본 스캔 22/tcp open ssh 확인
 - 서비스 버전 탐지 결과 OpenSSH 버전 정보 확인

## 5. 결과 해석
 - Kali Linux에서 Ubuntu Target으로 네트워크 통신 가능 확인
 - 대상 서버의 22번 포트에서 SSH 서비스가 실행 중이며, Ubuntu 내부에서도 sshd 프로세스가 연결 대기 확인

## 6. 추가 조사할 내용
 - Ubuntu 공식 보안 공지를 통해 업데이트에 포함된 보안 수정 사항과 영향받는 패키지 버전 비교
 - 각 취약점의 영향 조건과 대상 서버의 설정을 확인하여 실제 적용 가능성을 판단
 - 서비스 버전 탐지 결과와 서버 내부 패키지 정보를 비교할 때 발생할 수 있는 차이 조사
 - 업데이트 전후의 결과를 근거로 보안 개선 사항과 검증 범위 기록