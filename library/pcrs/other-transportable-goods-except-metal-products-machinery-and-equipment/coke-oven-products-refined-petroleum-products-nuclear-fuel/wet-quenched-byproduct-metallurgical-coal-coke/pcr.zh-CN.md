---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.wet-quenched-byproduct-metallurgical-coal-coke
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
translation_status: aligned
content_maturity: authored_methodology
---

# 副产品回收焦炉湿熄冶金煤焦


## 1. 范围与适用性

本PCR覆盖以炼焦煤配煤在常规间接加热副产品回收室式焦炉生产，经湿熄、沥水、筛分及散装交付的合格高炉冶金焦。前景包括实际煤搬运与预处理、焦炉操作及燃料加热、湿熄水回用、煤气冷却与焦油分离、氨捕集制硫酸铵、洗油吸收及汽提回收粗苯、实际安装的煤气脱硫、公用工程、治理、储存及废水处理。EPA12.2.1及JRC BREF第5章提供制造工艺证据，但不证明通用配置或当前现场绩效。[epa-coke-production-2008; jrc-iron-steel-coking-2013]

排除炼厂石油焦焦化、泥炭焦或褐煤焦、半焦、甑炭、铸造焦、干熄及不回收副产品的热回收焦炉。排除下游焦油精馏、BTX精制、煤气制甲醇或氢及高炉用焦。采用其他氨回收路线、湿式氧化脱硫化学体系、配煤加油方案或干熄的工厂，须先完成独立证据支持的扩展才能采用本方法；不得直接拼入本路线。

本子集的实际煤气脱硫可以不存在，或为有证据支持、回收元素硫的吸收/解吸装置。产酸及湿式氧化脱硫路线须另行审核扩展，其实际产品随后必须纳入清单，不能省略。[jrc-iron-steel-coking-2013]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.wet-quenched-byproduct-metallurgical-coal-coke |
| classification_refs | CPC 3.0 33110; narrower; 仅为背景，须独立接受裁定 |
| covered_products | 湿熄高炉煤焦；保留全部实际伴生产品 |
| excluded_products | 石油焦；泥炭或褐煤焦；半焦；甑炭；铸造焦；干熄及不回收副产品路线 |
| representative_product | 焦化厂交付门口散装筛分高炉焦 |
| production_route | 煤预处理→副产品回收炼焦→湿熄、沥水及筛分；粗煤气→实际冷却及焦油回收→硫酸铵及粗苯回收→声明的脱硫→煤气外送或内部加热 |
| market_state | 验收冷却散装产品，声明收到基水分 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应煤基焦炭作为高炉还原剂、热源及透气料柱支撑；这是声明产品单位，不保证铁产量 |
| How much | 出厂交付1千克收到基合格净焦炭 |
| How well | 实际规定粒度、水分、灰分、碳硫、强度或反应性及验收试验基准 |
| How long or cycle | 一个声明生产交付期间，不假定服务寿命 |
| reference_flow_link | coke_dispatch |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 焦炭 `b9bbfbd4-65fa-4a8b-b19e-37f97ee2bef9` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 煤种配煤及来源；常规副产品回收焦炉及装煤方式；湿熄；煤气净化流程图；焦炭批次、牌号及粒度；收到基与干基质量水分定义；煤焦焦油碳硫基准；低位高位热值采样基准；煤气湿干组成、温度、绝压及压缩因子；内部外送煤气及燃料边界；供应蒸汽状态及凝结水；期间场址；库存校正；共产品接收方；分配方法及分配前数量 |

全部必需限定信息须在数据集元数据、参考备注或等效包字段中声明；缺失时参考定义不完整。所选焦炭产品为焦化厂交付边界、炼焦路线，主参考为质量/千克。完整原生记录明确将名称所列次级28.2 MJ/kg低位热值标为IPCC默认值，并明确未限定工厂特定焦炭牌号。该有明确默认来源的次级描述不规定现场热值牌号；本方法采用主质量参考，不应用默认能量换算。正向产品身份由焦炭名称、碳化煤及高炉燃料同义词、炼焦路线、工厂边界和所引煤焦实体定义共同建立，不仅凭分类代码。参考仅对应实际验收的湿熄、沥水及筛分高炉煤焦子集。具体数据集绑定前须采集实际批次水分、低位高位热值及试验基准，核对供应数量与路线；不能从次级属性推定现场热值或其干基收到基试验口径。[ipcc-energy-fuel-definitions-2006; jrc-iron-steel-coking-2013; epa-coke-production-2008]

参考、清单分母及采集计算基准均为实测净交付产品1千克质量，不依赖数据库次级热值系数。名称牌号口径未明的投入废物身份建议，以及NOx聚合惯例，在澄清前仍不能完成具体绑定；它们不能替代实测实物交换，也不使已声明质量方法失效。实际适用物料须补充兼容身份，同时保留每项实物流及实测基准。科学方法接受与分类映射接受分别裁定，未声称现场数据采集及供应绑定已完成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | coke_dispatch | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用声明出厂收到基的1千克净合格焦炭，以cp_coke称量，排除包装和焦粉；出厂代表样本实测水分，另保留推得干基当量。全部清单行及采集聚合使用相同焦炭分母。 |
| material_bases | coal_charge; coke_dispatch; crude_tar_dispatch; crude_benzol_dispatch; ammonium_sulphate_dispatch | 质量 | kg | 对每种物料独立记录收到基质量及水质量分数；干质量=湿质量×(1−湿基水质量分数)。干燥无灰基、干基及收到基碳硫热值是不同基准；须用本物料分析水分和灰分换算，不能使用其他物料水分。cp_material、cp_products及cp_coke保留样本和方法。 |
| gas_bases | cog_export; natural_gas_import; nitrogen_makeup | 按核实参考属性采用质量或体积 | kg; m3 | 实测煤气体积须保留温度、绝压、水分、组成及压缩因子。按有文件支持的状态方程协议换为明确干基参考体积；换质量时使用同一组成及状态。不能假定标准立方米温压、密度或低位热值。自产煤气总量及内部链接两端须保持等量。 |
| packaging_count | sulphate_bags | 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 用cp_packaging采集同声明规格完整空袋件数；若原记录仅为包装质量，以实际代表样本测得的空袋净质量换算件数，不采用数据库缺省袋重。包装与硫酸铵净质量分开。 |
| energy_bases | electricity_import; steam_import; natural_gas_import | 核实的能量属性及独立载体数量 | MJ; kg; m3 | 电力、燃料化学能与净供应蒸汽焓分别记账。电力保留真实直读属性并按1kWh=3.6MJ换算。煤焦气的低位高位热值及取样水分基准分别保留。蒸汽净供热须按质量×(供汽焓−回水焓)在供应方边界核算并保留干度压力；基准未知时背景链接不完整。 |



## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 煤搬运入口交付炼焦煤及独立计量供应；洗煤在上游，除非实际纳入 |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC3.0 33110的较窄子集；以煤焦实物身份为准 |
| recursive_input_rule | 采购同类焦炭独立称量并链接自身上游数据；内部焦粉或粉尘回用为等量实物链接，不是新增产量 |
| upstream_dataset_requirement | 交付煤、每项供应及外部废物处理须链接上游；核实路线、属性、水热气基准及交付边界兼容性 |
| disclosure | 场址；期间；装煤；煤预处理；湿熄；煤气净化图；公用工程；处理出口；原始与分配账；缺失身份；资本运输及截断 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | coking_plant | 按所引制造描述与现场图核对实际路线。湿熄排除干熄气循环及其回收蒸汽或电力抵扣。煤预处理包括实际破碎、配煤和搬运；采购煤洗选属于上游，除非确在前景并独立采集。 | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| boundary_gas | coking_plant | 纳入实际煤气初冷、焦油分离、硫酸铵氨回收、终冷、选定洗油轻油回收及安装的吸收解吸脱硫。保留实测配置；BREF可选方案不允许拼接不相关洗涤器或催化剂。以交付门口排除下游化工精制。 | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| boundary_interfaces | coking_plant | 聚合前景保留热焦、粗净煤气、凝结水、喷洒或熄焦液、焦油渣及贫富洗油的阶段计量和两端等量内部链接。内部交换仅在聚合外部清单抵消，不能从实物过程图删去或再计上游背景。分别核对外购与内部产生热气及火炬进气。 | jrc-iron-steel-coking-2013 |
| boundary_water_emissions | coking_plant | 独立采集熄焦或冷却净补水、循环、蒸发、焦炭带水、排污及受体回水。纳入实际治理及厂内废水处理；外送废水为废物交换，只有声明处理出口后实际排入环境才是基本排放。披露冷却配置及异常旁路。 | jrc-iron-steel-coking-2013 |
| boundary_upstream | coking_plant | 每个外部投入须链接适用上游数据集，独立核实数量和供应基准。期间纳入实际启停、火炬、不合格品处理及维护；披露初始资本建设和另列运输，不得用收率因子隐藏无依据设施寿命或排除。 | jrc-iron-steel-coking-2013 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coking_plant | 煤预处理、焦炉、湿熄筛分及副产品回收，含实际公用工程和处理 | required | 有文件证明的纳入路线 | foreground | coke_dispatch |

前景聚合为一个单元，以保留唯一最终焦炭参考。下列实物阶段独立计量；中间热焦为同一产品在工序间交接，不是第二个最终参考输出。各卡是外部交换，均不设置默认正数量。

| 阶段 | 实物入口出口及保留计量 |
| --- | --- |
| coal | 交付煤种→实际破碎配煤装炉；称重、库存、水分及回用焦油污泥 |
| battery | 装煤与间接加热→热焦及粗煤气；装推焦计划、燃料、烟囱及炉门炉盖导气排放 |
| wet_quench | 同一热焦→湿熄冷焦→沥水筛分交付焦及焦粉；补水循环蒸发、粉尘及带水 |
| gas_recovery | 粗气→焦油分水→硫酸铵轻油回收→安装脱硫；净气分为焦炉外送火炬；贫富油及洗液循环 |
| treatment_utilities | 实际气水治理及供应→分源室外排放、处理回水或外送废物；污泥去向 |

实物账包括全部湿燃烧及漏入空气（干O2/N2及实际湿度）、完整湿烟气及煤气损失、全部物料载水、降雨径流、反应水、湿熄浆液及沉降池库存排泥、凝结水和每项真实残余。按原始组成及不确定性实测或显式建模空气排气量；即使LCIA清单不表征干N2/O2载气，其排出仍保留在实物衡算。缺测平衡流不能按零计；物种负荷为完整物料的分析拆分，不能再向载水废物或混合物增加重复千克数。[jrc-iron-steel-coking-2013; epa-coke-production-2008]

每项真实供方容器、内衬、封口及运输包装、交付返还、回用库存、维护替换与拆出件分别保留实物账；每种实际完整规格或独立处理组分增设原子行。本方法不假定存在桶、袋衬或托盘。供应方附随包装、清洗、返还运输及生命周期服务负荷在记录供应边界仅计一次，周转资产不能虚构为净耗料。维护及资本服务负荷按有证据期间归属，不编造炉数、寿命或更换配方。

### 过程：副产品回收湿熄焦化厂（`coking_plant`）

#### 输入

##### 产品流

###### 硬煤，焦煤（`coal_charge`）

仅在洗选加工的主焦煤、声明洗煤厂供应边界及名称26.377 MJ/kg低位热值牌号和源确认的水分试验基准均核实时采用此UUID。它不是不受限定的配煤身份；名称牌号基准未明时不得绑定。全部其他真实配煤组分及上游交付运输边界分别采集。

分别记录交付煤种及采购配煤组成、湿质量、水分、灰分、碳、硫及低位/高位热值基准。本身份对应焦煤，不能代表配煤中其他不相容煤种；实际存在时增加独立核实的组分行。不规定配煤比例。

- 选定流：硬煤，焦煤 `515ad0c8-5bea-4b8b-97cc-851b8450534f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：jrc-iron-steel-coking-2013

###### 交流电（`electricity_import`）

仅在CN电网平均消费供电组合、实测用户侧1–35 kV时采用此身份；其他电压或供电边界须独立核实。分别计量各阶段用电，核对供应方边界中的电网损耗；不能将韩国电力或输配服务当作通用电力。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据cp_utilities采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：jrc-iron-steel-coking-2013

###### 气态天然气（`natural_gas_import`）

原生路线限定压缩处理、管道运输至消费端并符合适用国家燃气标准；须核实实际路线、接收边界和质量规范。所列甲烷CAS不使天然气混合物变为纯甲烷，质量和元素账采用含CO2/N2/H2O的实际组成。供应方不能定义参考立方米状态时阻塞数量链接。

仅记录实际补充加热或启动用气。采集温度、绝对压力、水分、组成及压缩因子，核对供应方参考立方米定义；次级质量系数不是密度。自产焦炉煤气为内部链接，不能计作此投入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：依据cp_gas采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_gas
- 来源：jrc-iron-steel-coking-2013

###### 焦炉抽吸及副产品汽提用供应蒸汽（`steam_import`）

分别保留外购汽、自产汽、凝结水返还及排放留存水；可用焓或上游供应方未决仍采集实物汽质量，同一蒸汽质量和热服务不能重复计供应热负荷。

记录实际交付蒸汽压力、温度、干度或过热度、质量及凝结水回流。没有压力一致证据时不选用11.0或0.45 MPaG身份；链接热量背景时须独立核算净交付焓差，MJ属性本身不证明基准。

本卡对应一个外部供汽母管；独立供应的不同压力、温度或干度状态须另设原子行，不能因都叫蒸汽而合并。不采用造纸生产线或脱臭专用供应身份作为焦化制造依据。

- 选定流：焦炉抽吸及副产品汽提用供应蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据cp_utilities采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：jrc-iron-steel-coking-2013

###### 自来水（`supplied_water`）

仅用于实际供应的处理自来水；分别记录煤润湿、湿熄、冷却与洗涤的外部净补水。体积表读数以实测密度换算；数据库次级换算不是现场测量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_water采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：jrc-iron-steel-coking-2013

###### 洗油（`coal_tar_wash_oil`）

名称与完整说明均限定33.453 MJ/kg低位热值；实际煤焦油精馏洗油的牌号及权威水分试验基准须匹配后才能绑定。次级系数不是默认配方、密度或实测损失。

仅用于煤焦油精馏来源洗油补充量，记录牌号、组成、来源、湿质量及再生循环损失。源分类指向石油，与名称、说明及路线不一致，须供应方澄清。内部循环不是新增投入。

- 选定流：洗油 `5e14a4df-e90c-4654-be3d-988d0d17159c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：jrc-iron-steel-coking-2013

###### 石油来源吸收洗油（`petroleum_wash_oil`）

仅在实际轻油吸收器使用石油来源洗油时计入，必须与煤焦油来源洗油分开；两种来源描述是实际可选路线，不能拼为虚构配方。

- 选定流：石油来源吸收洗油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：epa-coke-production-2008

###### 硫酸（`sulfuric_acid_input`）

仅用于硫酸铵回收的新鲜供酸，且供应质量分数经测量符合本记录93–98%的限定。分别保留供应酸液、纯H2SO4当量及稀释后饱和器母液；其他供酸浓度须另核身份。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：epa-coke-production-2008

###### 氢氧化钠（`sodium_hydroxide`）

源明确限定95–98%纯度工业级白色结晶固体，并说明氯生产伴生产生。须核实实际采购固体纯度及生产路线；溶解水与投加液分记。采购稀碱液须另核身份。

仅计实际蒸氨或废水处理碱投加。声明供应形态及浓度，核对背景数量是否对应该形态，不将溶液直接视作纯NaOH。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：jrc-iron-steel-coking-2013

###### 碳酸钾（`potassium_carbonate`）

原生身份为合成K2CO3粉末或晶体、摩尔质量138.205 g/mol，不代表完整再生洗涤液。独立分析采购盐、水和其他实际添加物，保留贫富液库存。

仅用于实际安装的碳酸盐吸收/解吸脱硫回路。核实现场流程图、浓度、再生及后续硫回收；不得将湿式氧化催化剂及其废水拼入此回路。

- 选定流：碳酸钾 `50187d31-fd0a-47c3-9aa2-84402ffb625e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：jrc-iron-steel-coking-2013

###### 氮气（`nitrogen_makeup`）

仅计实际空分来源惰化或吹扫补充氮气。保留纯度和交付物态，以组成、温压和压缩因子换算表读体积；不是干熄循环气投入。

- 选定流：氮气 `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_gas采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_gas
- 来源：jrc-iron-steel-coking-2013

###### 黏土（`luting_clay`）

仅计实际炉盖密封用黏土。干矿物及加水分别记录；本矿区黏土记录不能自动代表配制密封料及其运输。

- 选定流：黏土 `226972bf-eeed-4ec4-a22e-f227e582ca18`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：epa-coke-production-2008

###### 聚丙烯编织袋（`sulphate_bags`）

仅计实际硫酸铵包装，与净硫酸铵质量分开。核对袋的供应定义是否含内衬；新增内衬须另设原子行。本路线焦炭为散装。

实际同规格完整袋按件计，实测空袋质量并记录实际容量、编织、涂层、内衬、封口及供应边界。农场门口种子包装不能证明本化学产品包装身份，不规定容量、种子比例或空袋重。

- 选定流：硫酸铵交付用完整聚丙烯编织袋
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`；单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：依据cp_packaging采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging
- 来源：epa-coke-production-2008

###### 焦炉维护用硅质耐火砖（`silica_refractory_makeup`）

记录所选期间实际维护更换，不虚构炉寿或更换率。初始资本建设另行披露，不能折为默认每焦炭砖耗。

完整广义耐火砖记录明确包括硅质原料，且无相反制造限定；本行仅用于实际更换硅质耐火砖并核实烧制牌号、组成及供应方，不能以高铝或镁质替代。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：jrc-iron-steel-coking-2013


###### 焦化设备维护用矿物润滑油（`maintenance_lubricating_oil`）

仅在实际设备维护使用矿物润滑油时计入。采集一种声明完整供应配方、SDS、牌号、水及添加物、采购库存和阶段使用；合成油或润滑脂另设行，不能以绝缘油、溶剂或加工助剂代矿物润滑油。

- 选定流：焦化设备维护用矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_material采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：jrc-iron-steel-coking-2013

##### 基本流

###### 河水（`river_abstraction`）

仅计声明河流来源的直接取水，不是购水。记录源及位置、取水、回水去向及处理；不能又从供应方背景重复计取同一水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：依据cp_water采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：jrc-iron-steel-coking-2013

#### 输出

##### 产品流

###### 冶金焦（`coke_dispatch`）

按第3节焦炭产品质量/千克参考，仅取验收高温煤焦化、湿熄后的最终交付产品。明确标注的次级IPCC默认值不提供现场热值、热值牌号、能量换算或焦炭收率。采集实际强度及反应性验收试验与方法，不编造CSR/CRI限值。

湿熄、沥水、筛分并核对库存后的合格高炉冶金焦，以出厂交付收到基计。排除焦粉和包装，另保留干基当量及产品带水。

- 选定流：焦炭 `b9bbfbd4-65fa-4a8b-b19e-37f97ee2bef9`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_coke
- 来源：jrc-iron-steel-coking-2013

###### 焦粉（`coke_breeze_dispatch`）

此广义制造成品记录明确包括焦粉；本行只取实际筛下煤焦粉子集，并不使本PCR纳入褐煤、半焦或干馏炭。实测其低位热值水分基准，不采用冲突的名称热值牌号或次级能量系数。

实际独立回收并验收、交其他用途的筛下焦粉，记录筛分粒级、水分及接收过程。内部回用捕集粉尘不能重复作为外售量。

- 选定流：煤或褐煤焦炭及半焦炭，干馏炭 `7384eff9-1da1-49c8-9d67-1ca70c6fc44f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_products采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_products
- 来源：jrc-iron-steel-coking-2013

###### 焦炉煤气（`cog_export`）

原生组成百分比为近似描述，不是硬配方或完整组成。测量全部实际组分和水，核对摩尔质量、C/H/O/N/S及低位高位热值，不能归一化抹掉未测组分。已核参考为质量/千克；现场体积及接收方体积/立方米均须独立声明温压压缩因子与湿干基准。

仅计跨出焦化厂边界的净净化焦炉煤气。煤气账另保留总产量、焦炉加热、其他内部使用、火炬进气、泄漏与库存变化；不得用假定密度或热值换算体积。

- 选定流：焦炉煤气 `32ab44a2-c912-4c1f-98cf-856a24b3f99a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_gas采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_gas
- 来源：jrc-iron-steel-coking-2013

###### 煤焦油（`crude_tar_dispatch`）

所选名称限定煤干馏工厂边界及33.453 MJ/kg低位热值。绑定前核实权威水分试验基准与实际焦油牌号；源说明和次级数值均不能提供默认分析值。

仅计声明分水处理后的实际回收煤干馏粗焦油，保留残余水、固体、碳及硫。排除焦油精馏、沥青和下游杂酚油；交付边界与接收焦油PCR协调。

- 选定流：煤焦油 `176de006-c7be-47ad-be03-2ce15e99c6ff`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_products采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_products
- 来源：jrc-iron-steel-coking-2013

###### 粗苯（`crude_benzol_dispatch`）

实际从焦炉煤气经富油汽提及分水回收的未精制轻油，保留实测苯、甲苯、二甲苯组成；不能视作纯苯、裂解汽油或分别精制的BTX。

- 选定流：粗苯 `521f59f8-548c-43c8-a6e5-51c11d153cb2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_products采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_products
- 来源：epa-coke-production-2008

###### 硫酸铵（`ammonium_sulphate_dispatch`）

实际由煤气氨与硫酸反应、结晶及干燥取得的可用硫酸铵，记录纯度、水分及库存。同一回收氨不能再假定另产氨水。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_products采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_products
- 来源：epa-coke-production-2008

###### 随硫酸铵交付的聚丙烯袋（`sulphate_packaging_dispatch`）

记录实际随净硫酸铵出厂的同声明规格袋件数；其空袋净质量及实际装载后的毛重在实物衡算中独立保留。袋是附随包装组件，不是第二次袋生产或独立有收入共产品；不增加单独分配份额。领用、交付、废弃及库存件数以cp_packaging核对，实际废弃包装须另设废物行。

- 选定流：硫酸铵交付用完整聚丙烯编织袋
- 流属性/单位：件数 `01846770-4cfe-4a25-8ad9-919d8d378345`；单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：依据cp_packaging采集实际交付件数，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging
- 来源：epa-coke-production-2008

###### 焦炉煤气脱硫回收元素硫（`recovered_sulphur_dispatch`）

仅计有文件证明的吸收/解吸及硫回收出口实际元素硫，须保留纯度、水分及去向。不采用橡胶硫化剂记录代表回收硫规格。不设默认硫收率，不假定同时产酸。

须核实实际焦炉煤气出口及纯度的回收元素硫身份。原生硫化剂路线不能证明回收产品；炼厂副产品路线也不能证明煤气来源。身份未决时仍保留实物硫产量、分析及接收边界。

- 选定流：焦炉煤气脱硫回收元素硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_products采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_products
- 来源：jrc-iron-steel-coking-2013


###### 返回供汽方的液态蒸汽凝结水（`steam_condensate_return`）

仅计同一供回公用工程边界实际外部回凝结水，实测液态质量、温压、污染和接收方，保留热水账。内部凝结水回路为等量内部管线，不是本交换；不假定独立销售或分配份额。

- 选定流：返回供汽方的液态蒸汽凝结水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_utilities采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：jrc-iron-steel-coking-2013

##### 废物流

###### 焦油渣（`tar_residue_external`）

名称31.4 MJ/kg低位热值及焦油生产来源均为绑定限制，不是通用残渣热值。链接前澄清水分试验基准及实际残渣牌号，不从次级系数推能量。

仅计焦油分离或储存实际外送渣；计量湿质量、水、PAH、碳硫及接收处理。同期间返回配煤的渣仅留在内部衡算，不能列为外送废物。

- 选定流：焦油渣 `cff6bba8-920e-4f83-9b5e-e36a6db83e10`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013

###### 焦炉轻油吸收废洗油（`spent_wash_oil_external`）

仅计送处理的实际排放，辨明煤焦油或石油来源、夹带粗苯、水分、再生历史及接收方。返回吸收的贫油为内部链接。

本通用废油身份没有机加工、润滑或炼油来源限定；仅用于实际废吸收洗油，并记录来源、水分及粗苯污染、危险特性和接收方；广义身份不证明处理数据集兼容。

- 选定流：废油 `e620bc79-43f0-41a8-9589-9b5fe50ffef2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013

###### 焦化废水处理脱水生物污泥（`biosludge_external`）

仅计实际外送，保留干固体、水、污染物分析及接收方。市政或造纸污泥身份不能证明此来源；回炉污泥在内部核对。

须核实产生状态生物污泥身份；含糊的水处理药剂路线不能凭广义说明豁免。测量水、干固体、PAH及C/H/O/N/S，核实实际生物来源与接收条件；不能以干污泥、市政污泥、回流活性污泥或湿熄沉渣替代。

- 选定流：焦化废水处理脱水生物污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013

###### 送废物处理的捕集煤焦粉尘（`captured_coke_dust_external`）

仅计实际废弃捕集固体，须记录来源阶段、组成、水分及接收方。排除空气排放和可用焦粉。内部回用在聚合边界抵消。

- 选定流：送废物处理的捕集煤焦粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013

###### 移交外部处理的焦化废水（`coking_wastewater_external`）

仅计实际移交外部处理的液体。电解锰渣洗涤废水来源不相容；不能将其中污染物在处理前同时记作直接淡水排放。

该广义工业废水废物流仅在实际接收边界为二或三级处理，且实测焦化废水负荷及预处理满足接收条件时链接。其主参考为质量/千克，不规定污染物浓度；以实测密度将配对实际体积换为质量，不能将其当作直接淡水排放。

- 选定流：废水 `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_water采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：jrc-iron-steel-coking-2013

###### 焦炉维护废硅质耐火砖（`spent_refractory_external`）

实际外送维护残余，记录污染状态及接收方，不能默认再生抵扣或固定更换寿命。

- 选定流：焦炉维护废硅质耐火砖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013


###### 湿熄沉降池湿煤焦沉渣浆泥（`wet_quench_sludge_external`）

仅计完整湿沉降煤焦浆泥的实际外送；独立实测湿质量、水、干固体、灰及C/H/O/N/S/PAH，保留沉降来源和接收方。与干捕集粉尘、可用焦粉、焦油渣和生物污泥分开；回用固液为配对内部链接，缺测外送不为零。

- 选定流：湿熄沉降池湿煤焦沉渣浆泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013


###### 废润滑油（`spent_maintenance_oil_external`）

仅计实际石油基或合成设备润滑油使用后在产生状态外送；记录来源、水污染物、质量、库存和接收方，本身份不设处理或回收抵扣。废吸收洗油为另一交换。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_waste采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-iron-steel-coking-2013


###### 废弃完整聚丙烯编织硫酸铵袋（`discarded_sulphate_bags`）

仅计声明规格实际废弃完整袋；称量完整聚合物、内衬、封口和污染物组件，独立保留件数。回用、返还和交付去向分开，不设默认废弃率或机械回收。

- 选定流：废弃完整聚丙烯编织硫酸铵袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_packaging采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging
- 来源：jrc-iron-steel-coking-2013

##### 基本流

###### 二氧化碳（化石源）（`co2_fossil_air`）

记录烟囱及火炬化石CO2，独立核对煤和煤气碳衡算；煤中碳并非在焦化厂全部氧化。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 一氧化碳（化石源）（`co_fossil_air`）

记录实际排向室外的化石CO，与煤气组分及CO2分开。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 甲烷（化石源）（`ch4_fossil_air`）

记录泄漏、燃烧或处理实际外排未燃化石甲烷，不能用修正流，不能把已售煤气内甲烷记作外排。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 氮氧化物（`nox_air`）

明确量值为NO与NO2物种质量和还是NO2当量，并核实接收清单及LCIA定义；原生记录未解决此问题。组分观测保留在辅助衡算账中，不能将聚合量与同一NO/NO2组分重复列交换；N2O另列。聚合基准不匹配时不得采用。

仅计NO与NO2汇总，排除N2O。声明实验室数量是物种质量还是NO2当量，核实与接收LCI/LCIA定义一致；身份的质量/千克属性不能解决该定义。不得再重复计NO或NO2。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 一氧化二氮（`n2o_air`）

仅计实际评估的燃烧或废水氮转化N2O，与NOx分开，说明未检出或缺测。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 二氧化硫（`so2_air`）

仅采用实际SO2物种质量。报告SOx总量或SO2当量在明确物种及当量惯例前仅为辅助指标，不能直接映射为SO2，也不能与SO2重复计。

记录治理后实际SO2，包括加热、火炬及有文件证明的硫回收尾气；不能将全部煤硫按固定比例转为SO2。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 颗粒物（PM2.5）（`pm25_air`）

计量独立的≤2.5微米粒径组分；不能再将累积PM10或总颗粒物清单叠加。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 颗粒物（PM2.5 - PM10）（`pm25_10_air`）

独立记录>2.5至≤10微米组分，仅由可比采样及定义推导。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 颗粒物（> PM10）（`pmover10_air`）

独立记录>10微米组分，包括搬运、推焦和湿熄实际逸散粉尘，不含捕集回用粉尘。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 苯（`benzene_air`）

记录逸散或有组织实际苯排放，排除粗苯内保留的苯。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 甲苯（`toluene_air`）

物种为甲苯，不是甲苯二异氰酸酯。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：甲苯 `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 二甲苯（所有异构体）（`xylene_air`）

记录实际二甲苯异构体之和，不重复计相同的单独异构体。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 萘（`naphthalene_air`）

实际外排萘，排除回收焦油或吸收回路中保留的萘。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：萘 `fe0acd60-3ddc-11dd-a682-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 苯酚（`phenol_air`）

仅为物种苯酚；没有分析方法证据时不能将总酚检测赋给苯酚。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 苯并[a]芘（`bap_air`）

记录物种苯并[a]芘及采样捕获的颗粒结合部分，不能将PAH总量视作该物种，也不能因已有颗粒质量而删除。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：苯并[a]芘 `08a91e70-3ddc-11dd-9221-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 氢氰酸（`hcn_air`）

仅计HCN分子质量；氰化物氮或总氰化物报告须有分析物种判定及明确换算。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：氢氰酸 `fe0acd60-3ddc-11dd-a6ba-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 氨（`ammonia_air`）

NH3分子质量，与颗粒铵及氮当量报告分开。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 硫化氢（`h2s_air`）

实际H2S分子排放，不是总硫或硫酸盐。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 二硫化碳（`cs2_air`）

实际CS2，不是二甲基二硫化物或总还原硫代理。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：二硫化碳 `08a91e70-3ddc-11dd-9245-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 羰基硫（`cos_air`）

实际COS，CAS463-58-1，不是候选硫双威农药。 介质为室外空气未特指子介质；保留烟囱高度及源位置，现场有更具体介质证据时精化身份。

- 选定流：羰基硫 `cb28e592-6d08-4cfc-8696-74d788f55175`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_air采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-coke-production-2008; jrc-iron-steel-coking-2013

###### 水蒸气（`water_vapour_air`）

分别保留入厂空气湿度、注入蒸汽、反应水和液滴夹带。湿烟气或湿熄水汽总量为实测实物出口；声明的净耗水计算另列，不能省略空气水分，也不能将同一夹带液滴同时计为水汽与液体。

实际湿熄或冷却净外排水蒸气，与夹带液滴分开。闭路循环量不是蒸发量；核对焦炭带水及蒸汽凝结水。介质为室外空气未特指。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_water采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：jrc-iron-steel-coking-2013

###### 苯酚（`phenol_freshwater`）

仅计实际处理出口物种苯酚；总酚未明确物种前留作辅助指标。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：苯酚 `08a91e70-3ddc-11dd-975b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 氰化物（`cyanide_freshwater`）

处理后CN离子质量，不是HCN分子或氰化物氮；披露分析基准及游离/络合状态。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：氰化物 `fe0acd60-3ddc-11dd-a7d8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 铵（`ammonium_freshwater`）

仅计NH4离子质量；氨氮不能在未核实物种及换算时直接复制。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：铵 `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 硫氰酸根离子（`thiocyanate_freshwater`）

仅为SCN离子质量，不是有机硫氰酸酯农药或总氰化物。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：硫氰酸 `9297b4d6-0776-4c54-a688-3c07e07907ca`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 硝酸根（`nitrate_freshwater`）

仅为NO3离子质量，实测硝态氮及分析换算另行保留。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：硝酸根 `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 亚硝酸根（`nitrite_freshwater`）

仅为NO2离子质量，不是二氧化氮气体或硝酸根。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：亚硝酸根 `08a91e70-3ddc-11dd-96e0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 苯（`benzene_freshwater`）

处理出口物种苯，不是BTX总量。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：苯 `08a91e70-3ddc-11dd-9207-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 焦化处理出水硫化物离子（`sulfide_freshwater`）

已核物种为S²⁻、CAS18496-25-8，排入淡水，质量/千克。按实际pH、物种分析及实验室方法区分溶解总硫化物、自由S²⁻、HS⁻和H2S，总量分析不自动等于自由离子质量。实际表示HS⁻或溶解H2S时另用其核实原子身份，不能借用本离子。

仅为S2-；以S计总硫化物须分析物种判定，不能直接用元素硫或H2S替代。 本行仅适用于实际最终排入淡水；移交外部处理为废物，不是此排放。

- 选定流：硫化物 `4d9a8790-3ddd-11dd-9066-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 悬浮物（未指定）（`suspended_solids_water`）

实际实测TSS并披露受纳水体；此身份为水未特指介质，未核实淡水细分。TSS作为运行指标保留，不能加到物种质量或溶解固体之和；接收方法要求淡水时须精化身份。

- 选定流：悬浮物（未指定） `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据cp_effluent采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_effluent
- 来源：jrc-iron-steel-coking-2013

###### 处理后排放液态淡水（`liquid_water_return`）

仅计最终排入有文件证明的淡水受体的液体。取水资源淡水UUID不可用于本行。分别保留回水体积、污染物、蒸发及移交外部处理量。

直读分类为排入淡水，不是水资源取用。保留实测液体回水体积；需要转换为参考数量时采用实测密度，披露最终处理出口及受体。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：依据cp_water采集实际交换，每 1 kg 参考流；保留分配前实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：jrc-iron-steel-coking-2013

库存核对同时保留数量与携带负荷。煤、焦炭、每项共产品、油药剂、包装和废物按批次阶段记录期初期末库存；期初库存加收货或生产等于实际交付、使用、返还或移除加期末库存，并另列实测或有依据损失及不确定性。交付批次须匹配生产记录，归属交付负荷前保留期初携带负荷，以及进入期末库存、不合格物料和实际返还的负荷。不能以不匹配制造期间除外售焦量，也不能按收入份额抹掉实物库存变化。净出厂产品价格采用同一声明质量或能量基准、币种、日期及税费运输包装惯例，实测数量乘价格须核对实际收入，不能采用发票毛重。

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_physical | coking_plant | 分配前实物图及质量、水、碳、硫、能量账须与负荷分配账分开；实际焦炭、焦粉、煤气、焦油、粗苯、硫酸铵或回收硫数量不得乘分配份额。内部煤气、循环液及残渣回流不是该边界可交付共产品。随化学产品交付包装为附随实物组件，不单设共产品收入或份额；保留实际件数及质量，其制造负荷仅归属该包装产品一次。 | jrc-iron-steel-coking-2013 |
| allocation_direct | coking_plant | 在本编写的归因协议中，先将可独立计量的可分过程负荷归给实际产品；记录剩余可证明物理因果关系。气液固化学回收的质量或热值分配不自动具备因果性。以cp_allocation保留裁定及证据。 |  |
| allocation_shared | coking_plant | 若不能证明可分性和物理因果关系，对剩余共用负荷采用cp_allocation记录的实际期间净出厂收入：份额_j=收入_j/全部真实外送共产品收入之和；分配负荷_j=直接可归属负荷_j+份额_j×剩余共用负荷。保留每个符合条件产品、统一计价单位币种期间及另一合理基准敏感性。内部煤气回路或付费处理废物不得分配份额；零负收入或缺失须审核裁定，不能编造份额。 |  |
| allocation_export | coking_plant | 外送净煤气、粗焦油及粗苯在交付门口携带记录负荷；接收数据集从相同实物状态及数量开始。不能对同一共用负荷同时分配并抵扣替代产品；替代研究须另列声明情景。 | jrc-iron-steel-coking-2013 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coke | coking_plant | coke_dispatch | weighing_record | 批次；合格净交付质量；期初期末库存；牌号；废品质量；水分样本方法；粒度；校准；起止日期 | 校准交付秤及合格库存核对；代表性水分质量试验；独立保留干基当量 | kg | 每批及期间结束 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_material | coking_plant | 原子物料投入 | supply_record | 行ID；物料牌号及适用CAS；供应方；批次；净供质量；水分；浓度；C/H/O/N/S灰分；低位高位热值方法基准；库存退回；阶段 | 校准称重库存记录及代表性分析；逐个核实实际煤组分及供应化学形态；不从数据库身份推配方 | kg | 每次交付及每批 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_products | coking_plant | 每项外送共产品 | dispatch_record | 行ID；批次；牌号；实际净交付质量；水纯度；C/H/O/N/S及分析基准；去向；库存；轻油组成；验收收入记录 | 独立校准产品计量称量及库存校正；分析焦油粗苯水分组成；实物质量与分配负荷分开 | kg | 每次交付或班次 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_gas | coking_plant | 原子气体投入及煤气外送 | meter_record | 表计源阶段；原始读数；温度；绝压；水分；干组成；压缩因子方法；密度方法；低位高位热值；净气总产；加热；其他内部使用；火炬；泄漏；外送；储存 | 连续校准气表及配对组成水分样本、状态方程；核对各分支及供应参考条件，不采用数据库次级换算 | kg; m3; MJ | 连续；按有记录波动配对分析 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_utilities | coking_plant | electricity_import; steam_import | meter_record | 表计阶段；CN地域、电网平均组合、电压及千瓦时；供汽回水质量；压力温度干度；凝结水；供应焓及系统基准；加热边界；启动损耗 | 校准分时电汽表；核对阶段合计及外购或自产能量和供应文件；通过有文件支持蒸汽状态计算求焓 | kWh; MJ; kg | 连续或每班 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_water | coking_plant | 供水、河水、水汽、液体回水及废水移交 | water_balance_record | 阶段；水源；空气湿度；降雨径流；取补水；循环；蒸汽凝结水；煤带水；反应生成水；焦油带水；蒸发；液体排污回水；受体；废水处理出口；密度；库存 | 独立校准水表液位及配对质量水分测量；显式保留熄焦冷却喷洒循环及反应水；用实测水衡算及残差不确定性，不能强行闭合 | kg; m3 | 连续；每日核对 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_waste | coking_plant | 每项外送废物 | transfer_record | 行ID；阶段来源；湿质量体积；干固体；污染物PAH；接收处理；内部回用质量；库存；联单 | 校准移交称量及组成水分分析、签认接收记录；独立盘点回用，不计作外送废物 | kg; m3 | 每次移交及期间结束 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_air | coking_plant | 每种大气物种及粒径组分 | emission_record | 行ID；排放源烟囱高度；有组织弥散逸散；过程负荷时间；治理旁路；物种CAS；气体温压湿干氧参考；浓度流量；采样时间；PM粒径过滤及可凝结定义；未检出定量限；燃料碳源；方法 | 实际分源测量或有文件证明、与排放源及控制相匹配的估算模型；浓度与同基准气量积分，单独核对推装焦事件、泄漏和火炬，保留方法不确定性；历史EPA或BREF因子不是默认值 | kg | 有条件连续并作代表性源及事件采样 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_effluent | coking_plant | 每项最终水物种及指标 | analytical_record | 行ID；处理出口受体；体积时间；分析物CAS；离子或元素当量；单位；溶解或总量；采样混样；浓度；实验室换算；定量限；污泥分离 | 配对校准出口体积及代表性流量比例混合实验室样本，时间匹配；逐物种分析；COD、BOD、总氮、总酚及PAH汇总作为辅助指标保留，不虚构物种 | kg; m3 | 有记录采样计划及期间积分 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_balances | coking_plant | 分配前实物衡算 | balance_record | 阶段图；内部链接ID及等量；全部外部数量；全部物料产品废物水及C/H/O/N/S灰分；完整煤气组成；实际燃烧空气O2/N2湿度及湿排气；湿熄浆泥；凝结水；包装返还；库存；低位高位热值焓；热损；由不确定性得容差 | 以配对测量构建阶段及全厂质量元素能量衡算；保留反应、氧、燃料循环、反应水及实测或建模损失；报告残差不确定性，不将残差指为虚构排放 | kg; m3; MJ | 每日及期间结束 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |
| cp_packaging | coking_plant | 硫酸铵包装袋 | packaging_record | 规格；额定容量；实际领用及交付件数；废弃件数；库存及退回；空袋净质量样本；聚丙烯、内衬、涂层及封口组成、供应包装包含边界；供应方参考件数 | 清点领用并核对采购及库存；同规格代表空袋用校准秤称净质量，只有质量记录时据此换算件数；不以额定容量作袋重 | Item(s); kg | 每次包装及期间结束 | 同一声明期间 | 选定焦化厂包装阶段 | 每 1 kg 参考流 | 清点记录、代表样本称重、规格及供应数量定义 |
| cp_allocation | coking_plant | 分配负荷账 | allocation_record | 直接可归属负荷；剩余共用负荷；全部真实外部产品数量；物理因果依据；净出厂价格收入；基准单位币种期间；移交；裁定；敏感性 | 使用实际期间账目及产品验收接收记录，仅对剩余共用负荷按有依据实测基准推份额；保留完整分配前账及每个纳入或排除产品证据 | kg; MJ; currency | 同一期间并作价格敏感性 | 同一声明期间，纳入启停及异常事件 | 选定焦化厂及独立辨识表计阶段 | 每 1 kg 参考流 | 校准；原始时间；样品链；配对分析基准；核对；不确定性及缺失披露 |



### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalisation | 所有清单行 | 清单强度=同一期间积分实际外部交换/合格净出厂收到基焦炭千克数。校正期初期末库存，分母排除焦粉；最终焦输出为1千克。分配前实物量仍关联实物图。 | cp_coke; cp_material; cp_packaging; cp_products; cp_gas; cp_utilities; cp_water; cp_waste; cp_air; cp_effluent | 每 1 kg 参考流 |  |
| gas_state_conversion | cog_export; natural_gas_import; nitrogen_makeup | 干基参考体积=实测湿体积×干气摩尔分数×实测绝压/参考绝压×参考温度/实测温度×参考压缩因子/实测压缩因子；温度用开尔文，声明状态方程方法。质量=实测体积×同一组成、湿干、温压压缩因子状态密度。供应方数量匹配不完整时拒绝链接。 | cp_gas | 带状态气量，再按campaign_normalisation归一化 |  |
| air_integration | 水汽以外大气排放 | 排放质量=各匹配浓度×气体体积区间之和，加独立有依据事件或逸散负荷；参考气体及氧校正前保留原始基准。不以BAT限值浓度或默认煤气收率代实际气量。PM独立粒径组分分开，只有采样定义期间一致且差非负时可由累积量相减。 | cp_air | 每 1 kg 参考流物种质量 | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| effluent_integration | 最终水排放 | 物种质量=浓度×匹配最终排水体积之和并作有记录单位換算。若报告以N、S或总量计，先核实实际分析物及方法特定换算。仅实验室明确的离子进入对应原子行；不能假定辅助总量指标闭合元素衡算。 | cp_effluent; cp_water | 每 1 kg 参考流物种质量 | jrc-iron-steel-coking-2013 |
| balance_reconciliation | 分配前实物账 | 对总质量及C/H/O/N/S各元素：外部投入=外部输出+库存变化+披露残差及测量建模不确定性；反应不生成或消灭质量元素。纳入完整燃烧空气、湿度、排气载体、全部湿物料产品废物及返还接口。仅对水这一物种账显式记录化学生成或消耗H2O，同时保留空气水分及物料载水。内部管线配对两端数量、组成、干湿基及状态一致，仅在聚合边界抵消。能量采用统一低位或高位热值及参考状态惯例并记录转换：外部化学热电投入=外部化学显热潜热热电输出+损失+能量库存变化+披露参考状态或反应能残差。内部燃烧煤源煤气只在煤能量投入内计一次，不能再作外购或外售气；按所选热值惯例避免潜热重复。不能以编造排放闭合残差。 | cp_balances; cp_gas; cp_water; cp_material; cp_products; cp_utilities; cp_packaging; cp_waste | 独立总质量C/H/O/N/S水能量账及不确定性 | jrc-iron-steel-coking-2013 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_route | coking_plant | 记录一条实际连通配置；BREF可选方案或历史单厂示例不证明现场存在。 | 现场图、操作记录及所引原始章节 |
| dq_completeness | 所有清单行 | 每项实际外部物料燃料、产品废物及排放均须原子行；实际存在的不同煤组分、处理药剂、油、包装、维护投入及污染物须增行，双语单位一致并核实身份。缺测不是零，不适用须证据。 | 表计图、采购产品废物账及源评估 |
| dq_source_limits | coking_plant | 不规定通用收率、水分、碳硫、热值、熄焦蒸发或排放默认量。BREF表5.2明确不适于计算且排除部分弥散逸散搬运排放；单厂能量图不是标准衡算。后续采用EPA历史因子须独立匹配源、控制及基准。 | BREF5.2.1–5.2.2；EPA12.2.2及因子来源 |
| dq_identity | coking_plant | UUID仅证明声明实物身份属性，不证明供应过程数据集兼容。保留源分类瑕疵，独立核实浓度、地域、电压、供应状态及参考数量。未知UUID或压力状态基准在解决前显式保留。 | 身份原件、分析及供应参考定义 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | coke_dispatch | 要求恰有一个1千克收到基净合格焦炭最终参考，双语分母、聚合及公式一致。不得隐藏已核中间UUID或伪造身份绕过检查。 |  |
| validate_route | coking_plant | 核对煤焦制造、湿熄、实际煤气处理连通及供能边界；拒绝混入石油焦、干熄或不回收副产品路线及未审核药剂替代。 | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| validate_balances | coking_plant | 分配前须有绑定原始证据的全厂及阶段质量C/H/O/N/S水能量账、配对内部链接及独立有据残差不确定性。不假定通用完全闭合容差或每焦炭配方。缺衡算时具体数据集不完整。 | jrc-iron-steel-coking-2013 |
| validate_pollutants | coking_plant | 核对室外空气、水与资源或废物身份、每个物种CAS、限定化石来源及参考属性单位。NOx数量定义未决须与身份分开，NOx排除N2O；不叠加嵌套PM粒级或物种总指标重复量。经审核扩展引入实际生物碳时，不论温室气体统计惯例如何，生物CO2仍保留在LCI。 | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| validate_allocation | coking_plant | 核对每项真实外部共产品、直接共用负荷拆分、采用收入时一致基准及分配负荷守恒。实物输出及接收边界保留，不能按分配份额缩放。零负值、缺价格或因果依据未决时须审查。 |  |
| validate_readiness | coking_plant | 使用具体数据集前须解决全部实际适用空身份及供应数量或介质债务，保留缺测问题和不确定性。方法投影及计量检查不等于科学接受、现场调查或对已编数据集的验证。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明焦化交付边界的实际煤焦供应；已分配伴生产品须有其独立核实交付边界 |
| allowed_use | 有实际路线牌号的兼容高炉焦采购制造LCI；经数据证据审查后匹配的次级或背景使用 |
| excluded_use | 石油泥炭褐煤半焦甑炭；干熄或不回收副产品；下游精制或铁产量预测；从文献推默认工厂清单 |
| required_metadata | 参考限定信息；供应流过程固定引用；气汽电基准；路线图；完整期间库存原始记录；全部共产品量及分配；接收状态 |
| required_quality_disclosure | 分配前衡算残差；分析水碳硫热值基准；表计采样定量限缺测；路线特定排除；未决身份；价格因果敏感性；科学审查状态 |
| update_trigger | 煤配煤牌号或熄焦装煤变化；净化药剂；公用工程受体供应基准；回收产品交付边界；分配市场变化；新原始证据 |


## 11. 数据源

| 来源ID | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| jrc-iron-steel-coking-2013 | official_guidance | European Commission JRC, Iron and Steel Production BREF, 2013, EUR 25521 EN, doi:10.2791/97469; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 第5章5.1.1–5.1.5，印刷209–221页/PDF237–249页：煤焦炉、湿干熄区别、焦油氨轻油及脱硫可选体系水回路；5.2.1–5.2.2印刷225–234页/PDF253–262页：排放缺项、废水残余及单厂能量限制。仅作制造衡算背景，不设默认量。 |
| epa-coke-production-2008 | official_guidance | US EPA, AP-42 Section 12.2 Coke Production, May 2008; https://www.epa.gov/sites/default/files/2020-11/documents/c12s02_may08.pdf | 12.2.1.1–12.2.1.4及图12.2-1–3、12.2-1–6页；12.2.1.5–12.2.2、12.2-7–9页：常规副产品路线、湿熄、硫酸铵及石油洗油粗轻油回收、排放源区分及不回收副产品路线排除。历史美国背景，不采用通用比例、操作条件或排放因子。 |
| ipcc-energy-fuel-definitions-2006 | official_guidance | IPCC 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 1, Tables 1.1–1.2; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_1_Ch1_Introduction.pdf | 表1.1印刷1.14页/PDF14页：高温煤干馏焦炉焦及冶金焦的正向实体定义；表1.2印刷1.18页/PDF18页：核对引用次级低位热值为统计默认值而非现场牌号。不采用默认热值、收率、水分、碳含量或排放因子。 |
