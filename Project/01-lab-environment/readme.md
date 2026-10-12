# Lab Environment

## Goal
 가상 환경에서 모의 침투 테스트를 수행하기 위한 실습 환경을 구축합니다.

## Planned Environment
 - VirtualBox
 - Kali Linux
 - Ubuntu

## 구축 목적
 - 모의 침투 테스트에 필요한 가상 실습 환경 구축
 - Kali Linux와 Ubuntu Server를 이용한 테스트 환경 구성
 - 가상 머신 간 네트워크 통신 및 SSH 원격 접속 확인
 - 구축 과정에서 발생한 문제와 해결 방법 기록

## 실습 환경 개요
 - 가상화 프로그램 : Oracle VirtualBox
 - Kali Linux : 보안 분석 및 테스트 수행용 가상 머신
 - Ubuntu-Target : 테스트 대상 서버
 - 가상 네트워크 : RedTeam-Lab (NAT Network)
 - IPv4 네트워크 대역 : 10.10.10.0/24
 - DHCP 서버 : 사용
 - RedTeam-Lab IPv6 지원 : 비활성화

## Ubuntu-Target 구축 기록

### 1. 구축 목적
 - 모의 침투 테스트를 실습하기 위해 대상 서버 역할의 Ubuntu Server를 가상 머신으로 구축하였다.

### 2. 사용 환경
 - 가상 머신 이름 : Ubuntu-Target
 - 운영체제 : Ubuntu Server 24.04.5 LTS
 - 가상 디스크 : VDI, 최대 30GB (동적 할당)
 - 메모리 : 4GB
 - CPU : 2개
 - 네트워크 인터페이스 : enp0s3
 - 최초 IPv4 : 10.0.2.15/24
 - 현재 실습 네트워크 IPv4 : 10.10.10.4/24

### 3. 설치 과정
 - VirtualBox에 Ubuntu-Target 가상 머신 생성
 - Ubuntu Server 설치 이미지 연결
 - 키보드 및 네트워크 설정
 - 가상 디스크 및 파일 시스템 구성
 - 사용자 계정 생성
 - OpenSSH Server 설치
 - 설치 완료 후 재부팅 및 로그인 확인
 - 초기 설치 완료 후 복구용 스냅샷 생성

### 4. 문제 발생 및 해결
 - 발생한 문제 : Ubuntu 설치 후 로그인 실패
 - 원인 : 설치 과정에서 사용자 계정명이 bule로 생성되었으나, 로그인할 때 blue를 입력하여 계정명이 일치하지 않음
 - 확인 과정 : 복구 모드에서 실제 계정명을 확인하고 계정명을 수정한 뒤 다시 로그인 함
 - 해결 방법 : 계정 이름을 확인하고 수정한 뒤 로그인 재시도
 - 결과 : Ubuntu Server 로그인 성공

### 5. 설치 완료 후 확인
 - 사용자 로그인 : 성공
 - 서버 이름 : ubuntu-target
 - 운영체제 : Ubuntu Server 24.04.5 LTS
 - SSH 서버 : 설치 완료
 - SSH 실행 상태 : inactive → active 변경 및 확인
 - SSH 자동 실행 : enable 설정 완료
 - 가상 머신 복구용 스냅샷 : 생성 완료

## Kali Linux 구축 기록

### 1. 구축 목적
 - 보안 분석 및 테스트를 수행할 가상 머신 구성
 - Ubuntu-Target과 연결하여 네트워크 및 SSH 접속 실습 준비

### 2. 사용 환경
 - 가상 머신 이름 : kali-linux-2026.2-virtualbox-amd64
 - 운영체제 : Kali Linux 2026.2
 - 가상화 프로그램 : Oracle VirtualBox
 - 네트워크 인터페이스 : eth0
 - 현재 실습 네트워크 IPv4 : 10.10.10.3/24

### 3. 설치 과정
 - 공식 VirtualBox 이미지 다운로드 및 등록
 - 압축 해제 후 VirtualBox에 가상 머신 등록
 - Kali Linux 최초 부팅 및 로그인
 - 기본 비밀번호 변경
 - 네트워크 설정 및 IP 주소 확인
 - 초기 설정 완료 후 복구용 스냅샷 생성

## 가상 네트워크 및 SSH 연결 확인

### 1. 네트워크 구성
 - 네트워크 이름 : RedTeam-Lab
 - 네트워크 방식 : NAT Network
 - IPv4 네트워크 대역 : 10.10.10.0/24
 - Kali Linux IP : 10.10.10.3/24
 - Ubuntu-Target IP : 10.10.10.4/24
 - 브로드캐스트 주소 : 10.10.10.255

### 2. SSH 접속 테스트
 - Ubuntu-Target에 OpenSSH Server 설치
 - SSH 서비스 실행 상태 확인
 - 부팅 시 자동 실행 설정
 - Kali Linux에서 Ubuntu-Target으로 SSH 접속 시도
 - 접속 명령어 : ssh blue@10.10.10.4
 - 결과 : Ubuntu-Target 원격 로그인 성공

## 다음단계
 - 가상 머신의 메모리 및 CPU 설정값 확인
 - 두 가상 머신의 네트워크 구성 재확인
 - Nmap을 이용한 실습 대상의 서비스 및 포트 분석
 - 분석 결과와 실습 과정을 GitHub에 기록