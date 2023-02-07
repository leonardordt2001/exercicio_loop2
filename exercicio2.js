let Tmedia =0;
let maiormedia =0;
let menormedia =0;
let aprov=0;
let reprovFalta =0;
let reprovNota =0;
let sair ="";
let totalAlunos =0
let msg ="";

do{
     let situacao ="";
     let requisito1 =Boolean();
     let requisito2 = Boolean();
     let matricula =prompt("Digite o nome do aluno matriculado");
     let nota1 =Number(prompt("Digite a primeira nota"));
     let nota2 =Number(prompt("Digite a segunda nota"));
     let nota3 =Number(prompt("Digite a terceira nota"));
     let aulasF =Number(prompt("Digite a quantidade de aulas frequentadas , sendo no maximo 32"));
     let frequencia = (aulasF/32)*100;
     let media =(nota1 + nota2 +nota3) /3;
     let tmedia =0

     tmedia +=media
  
     if(frequencia >=80){
        requisito1 =true;
     }else{
        situacao ="reprovado por faltas";
        reprovFalta++
     }
     if(media >=7){
        requisito2 = true;

     }else{
        situacao ="reprovado por nota.";
        reprovNota++;
     }
     if(requisito1 && requisito2){
        situacao ="aprovado"
        aprov++;
     }
     if(!requisito1 && !requisito2){
        situacao = "reprovado por falta e nota"
     reprovFalta++
     reprovNota++ 
     }
     if(media > maiormedia){
        maiormedia =media;

     }
     totalAlunos++;
     tmedia =tmedia /totalAlunos

     if(totalAlunos ==1){
        menormedia;
     }
     sair =prompt("Deseja sair n/ sim n/não");

     msg+="Aluno"+matricula+"//media do aluno:"+media+"//frequencia do aluno:" +frequencia+ "%"+"??situacao"+"<br>"
    }  
     while(sair == "não");
       
      document.getElementById("mediaT").innerHTML = mediaT;
      document.getElementById("maiorM").innerHTML = maiorM;
      document.getElementById("menorM").innerHTML = menorM;
      document.getElementById("aprov").innerHTML = aprov;
      document.getElementById("reprovF").innerHTML = reprovF;
      document.getElementById("reprovN").innerHTML = reprovN;
      document.getElementById("msg").innerHTML = msg;