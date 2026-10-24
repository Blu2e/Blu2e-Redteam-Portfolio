# OpenSSH 보안 업데이트

## 실습 목적
 - OpenSSH 패키지의 업데이트 가능 여부 확인
 - 업데이트 전 상태 보존
 - 패키지를 업데이트하고 변경된 버전 확인

## 업데이트 전 상태 확인
 - 업데이트 전 패키지 정보
  - Installed: 1:9.6p1-3ubuntu13.19
  - Candidate: 1:9.6p1-3ubuntu13.20

 - 업데이트 후보 버전이 현재 설치 버전보다 높은 것 확인

## 업데이트 전 스냅샷 생성
 - VirtualBox에서 Ubuntu Target을 정상 종료 후 스냅샷 생성
 - 스냅샷 이름 : Ubuntu-Before-OpenSSH-Update
 - 목적 : 패키지 업데이트 전 가상 머신 상태 보존

## OpenSSH 패키지 업데이트
 - 실행 명령어
  - sudo apt install --only-upgrade openssh-server

 - 작업 결과
  - 패키지 관리자 다음 3개 패키지를 업그레이드할 예정 표시
  - openssh-client
  - openssh-server
  - openssh-sftp-server

 - 작업 요약
  - 업그레이드: 3개
  - 새로 설치: 0개
  - 제거: 0개
  - 이번 작업에서 업그레이드하지 않은 패키지: 46개

 - 확인 후 업데이트를 진행했다.

## 업데이트 후 버전 확인
 - 실행 명령어
  - apt policy openssh-server

 - 확인 결과
  - Installed: 1:9.6p1-3ubuntu13.20
  - Candidate: 1:9.6p1-3ubuntu13.20

 - 설치된 OpenSSH 서버 패키지 버전 1:9.6p1-3ubuntu13.20으로 변경된 것 확인

## 결과 요약
 - 업데이트 전 스냅샷 생성
 - OpenSSH 서버 패키지와 관련 패키지 총 3개 업그레이드
 - 업그레이드 후 설치 버전이 후보 버전과 일치하는 것 확인

## 참고 사항
 - 패키지 업데이트가 완료됐다는 사실만으로 모든 보안 문제가 해결됐다고 단정하지 않음, 보안 수정 사항의 적용 여부는 공식 보안 정보 및 검증 결과를 바탕으로 판단

## OpenSSH 패키지 업데이트
 - 업데이트 전 설치 버전 : '1:9.6p1-3ubuntu13.19'
 - 업데이트 가능한 후보 버전 : '1:9.6p1-3ubuntu13.20'
 - 패키지 변경 기록에서 보안 수정 항목을 확인
 - OpenSSH 패키지를 업데이트한 후 설치 버전이 '1:9.6p1-3ubuntu13.20'으로 변경