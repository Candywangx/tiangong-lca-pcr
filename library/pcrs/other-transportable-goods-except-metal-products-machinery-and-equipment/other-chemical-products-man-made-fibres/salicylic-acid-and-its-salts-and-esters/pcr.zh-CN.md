---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.salicylic-acid-and-its-salts-and-esters
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 无有机溶剂苯酚钠羧化制工业固体水杨酸

## 1. 范围与适用性

本方法只覆盖苯酚与氢氧化钠成盐、脱水、无外加有机溶剂 CO2 羧化，再用硫酸酸化、分离、洗涤与干燥后供货的一项工业固体水杨酸。水杨酸是邻羟基苯甲酸，CAS 69-72-7，C7H6O3。工业粉末供货身份与工艺分解分别由生产商原始产品页及工艺专利支持；二者不证明同一供应商采用该路线。[alta-salicylic-technical; jansen-salicylic-1983]

排除水杨酸钠及其他盐、水杨酸甲酯及其他酯、乙酰水杨酸、间/对羟基苯甲酸、其他取代异构体、配方药品、植物提取物、粗湿滤饼参考，以及有机溶剂悬浮法和盐酸酸化法。专利案例的温压、收率、含量与配方不是通用库存系数。生产商工业级表格重复列有药典等级，不能据此宣称药用、疗效、剂量或药典符合性。悬浮法实验仅用于提醒水解及副反应的条件依赖，不能向本路线迁移收率或溶剂清单。[alta-salicylic-technical; jansen-salicylic-1983; mohammad-kolbe-2024]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.salicylic-acid-and-its-salts-and-esters |
| classification_refs | CPC 3.0 35210; narrower; 仅覆盖游离固体酸，不接受正映射 |
| covered_products | 工业固体水杨酸，实际声明含量、水分及杂质 |
| excluded_products | 盐；酯；异构体；药品制剂；粗湿滤饼；溶剂悬浮及盐酸路线 |
| representative_product | 邻羟基苯甲酸工业粉末，CAS 69-72-7 |
| production_route | 苯酚/NaOH；脱水；无外加有机溶剂 CO2 羧化；硫酸沉淀；分离洗涤干燥 |
| market_state | 工业固体粉末；净交付；单独列包装与实际含水 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工业固体水杨酸，CAS 69-72-7 |
| How much | 1 kg |
| How well | 满足实际声明工业规格的游离酸；不宣称药用或药典符合性 |
| How long or cycle | 一个实际声明交付期间及匹配批群；追踪跨期成品与 WIP |
| reference_flow_link | delivered_salicylic_acid |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 水杨酸及其盐类和酯类 `3ae4ae3f-644a-4d9e-914c-594419243d1f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS 69-72-7; 无有机溶剂且硫酸酸化路线; 固体粉末等级; 供货基准含量与水分; 实际净交付门; 期间及批次谱系; 期初末 WIP 与成品库存结转负荷; 包装皮重及组成; 场址及供应地理; 退回与返工; 供应/接收数据兼容性; 宽泛原生参考及独立限定的单一化学身份 |

所有必需限定信息须在数据包元数据或等效字段声明。参考UUID使用原生宽泛名称“水杨酸及其盐类和酯类”，为已制造成品Product、工厂生产混合及Mass/kg身份；无原生CAS、含量、固液形态、等级、工艺、供应者或地理，也未声明酸盐酯混合物或盐酯专用限制。实际交换仍须独立证明为单一工业固体游离酸CAS 69-72-7及本方法路线，并逐批声明供货含量和水分。宽泛名称不是混合或任选产出，不得换成实际盐、酯、异构体或粗湿滤饼；UUID不提供供应负荷或科学批准。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为本期间唯一正数实际净交付且验收的同产品/路线/状态质量，排除包装皮重。Q 不是质量放行产量；未交付期末成品不进入 Q。退回关联原交付冲销，返工后再验收/发运不能重复创造产量或交付。 |
| solution_mass | sodium_hydroxide_solution; sulfuric_acid_solution | Mass | kg | 整份供货质量为采购交换；组分质量=供货质量×实测质量分数，载体水为组分分账，不额外采购。实际厂内配制保留各真实外购原料及混配负荷。 |
| volume_energy | carbon_dioxide_feed; process_water; steam; electricity | Actual measured dimension | kg; kWh | 体积按实测温压、组分、干湿基及可压缩性或适用密度换算；已积分体积不再乘时间。流率才与对应时间积分。电力 1 kWh=3.6 MJ；蒸汽质量及焓换算分账，不重复记录能量。 |
| ledger_basis | all inventory rows | Actual raw-period dimension | kg; kWh | 采集阶段保留完整未除期间分子及库存负荷；仅 normalize_delivery 把归属该交付批群的分子除以 Q 一次。每行卡片及协议汇总描述同一次报告，不串行重复除。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收苯酚、碱液、CO2、硫酸、供水及外部公用工程；追踪期初 WIP/成品 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC 35210 的游离固体酸子集 |
| recursive_input_rule | 内部回收苯酚/CO2/酸及水成对记账并抵消；外来回料作为真实供货单列，不递归虚构新产量 |
| upstream_dataset_requirement | 匹配实际全制剂、浓度、路线、地理及单位的供应数据；外送废物匹配实际接收处理 |
| disclosure | 原料门至实际净交付厂门，含实际仓储包装搬运发运；资本设施及下游使用处置须披露边界 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | sa_delivery | 保留成盐、脱水、羧化、苯酚回收、硫酸沉淀、过滤洗涤干燥、质量放行、真实仓储包装搬运发运、清洗及实际治理。记录启停、失败/零产出及返工。分解各工序时保持交接量、组成和负荷一致，合并时抵消内部交换。 | `jansen-salicylic-1983`; `jrc-ofc-2006` |
| boundary_stock | sa_delivery | 质量放行与交付分账：期初成品和 WIP 的结转负荷随批进入，期末未交付库存连同负荷保留至后期。不得把放行量与交付量默认相等，也不得把同批期末成品再加为参考输出。保留仓储发运实际负荷，勿借改变终端门删除。 |  |
| boundary_fate | sa_delivery | 先识别实际废流来源和组成，再匹配接收处理。外送含污染物废水只作废物转移，不再同时当直接水排放。厂内处理时纳入真实药剂、能量、污泥与治理后各排放物，逐原子行扩展，不使用总污染物替代物种。 | `jrc-ofc-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sa_delivery | 工业固体水杨酸制造至实际厂门交付 | required | 符合范围的同产品、路线、状态及匹配交付批群 | foreground_production | 1 kg |

### 过程：制造、仓储与实际交付（`sa_delivery`）

以下为最小发现框架，非固定配方或闭合物种表。逐行判断实际存在并采集；未测不是零。实际新增燃料、空气、制冷剂、清洗剂、过滤材料、回收共产品、包装组件及每种排放均另建具体原子行。内部中间体只留完整交接账，不混为额外终端产品。所有公用工程、包装、废物和排放 UUID 未解决，保留真实数量及后续供应/接收匹配义务。

#### 输入

##### 产品流

###### 苯酚（`phenol`）

进入苯酚钠形成工序的新鲜苯酚。原生身份是 Product flow，GLO 工厂端生产混合，明确用于碱金属苯氧化物形成及 Kolbe–Schmitt 水杨酸路线；原生 CAS、geography/locationOfSupply 和 name.flowProperties 均缺失。未指定等级、浓度、供应者或上游苯酚路线。实际 CAS 108-95-2、相态、含量及供应者须独立匹配；GLO 不证明本地供应或市场平均负荷。原生仅有 Mass 1.0，不推定密度或配方。

- 选定流: 苯酚 `87ff97b9-1e2a-41d5-87e2-df340b1efc01`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 氢氧化钠水溶液（`sodium_hydroxide_solution`）

按实际声明质量分数记录整份外购烧碱溶液；NaOH 与载体水仅作组分分账，不增加两笔采购。厂内稀释须保留实际分别采购的原溶液、稀释水及混配能耗。实际供货不符时不能套用 30%、40% 或 50% 身份。

- 选定流: 氢氧化钠水溶液
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 供应的二氧化碳气体（`carbon_dioxide_feed`）

跨越前景边界的新鲜羧化气体。记录实际来源、纯度、水分、压力与气体质量；内部循环 CO2 只记循环。进料 CO2 不是大气吸收基本流，也不自动获得避免排放抵扣。

- 选定流: 供应的二氧化碳气体
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 硫酸水溶液（`sulfuric_acid_solution`）

用于从水杨酸钠沉淀游离水杨酸的整份外购酸制剂。声明实际 H2SO4 分数、水及杂质，不以纯酸质量代替溶液采购。本方法选择硫酸，盐酸路线须另行审查物种及盐类清单。

- 选定流: 硫酸水溶液
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 供应的工艺水（`process_water`）

实际外部供水，用于盐溶解、洗涤、清洗及冷却系统补水，各用途分表。外购碱液或酸液自带水不重复采购；内部洗水及冷凝水回用须成对记交接。

- 选定流: 供应的工艺水
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 活性炭（`activated_carbon`）

实际脱色使用时纳入新鲜吸附剂，记录活性炭等级、干质量与供货水分。专利用量不能作默认值。废活性炭另记湿废物流并保留吸附物组成。

- 选定流: 活性炭
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 外购电力（`electricity`）

计量完整期间搅拌、真空脱水、压缩、冷却、过滤、成品干燥、仓储、装袋、搬运及发运用电。独立确认实际电压、地区、电网或厂内供电及供应者，不采用未经核实的电网 UUID。

- 选定流: 外购电力
- 流属性/单位: Energy / kWh
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utilities`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 外购工艺蒸汽（`steam`）

按实际外购蒸汽质量及管网压力、温度、干度和冷凝回水记录。交付焓作换算分账，不额外增加购热交换。厂内制汽须建立实际燃料、燃烧空气、供水及每种烟气物种行，不与外购蒸汽重复。

- 选定流: 外购工艺蒸汽
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utilities`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 聚丙烯编织袋（`pp_bag`）

实际采用时纳入的外袋组件。称量整件，记录新供或复用、包装期初期末库存、破损及复用周期。生产商产品页只证明袋装供货，不证明聚丙烯材质，必须取得实际包装规格。

- 选定流: 聚丙烯编织袋
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packaging`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`; `alta-salicylic-technical`

###### 聚乙烯内衬袋（`pe_liner`）

实际采用时单独记录的一项内衬袋，与外袋分开。复用服务分摊前先保留完整物理质量。包装皮重不得进入水杨酸交付 Q。实际其他封口、纸层、托盘及组件均另建原子行。

- 选定流: 聚乙烯内衬袋
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packaging`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`; `alta-salicylic-technical`

#### 输出

##### 产品流

###### 工业固体水杨酸（`delivered_salicylic_acid`）

唯一终端参考输出：质量放行、仓储、包装及厂门发运后实际净交付且验收的工业固体邻羟基苯甲酸，CAS 69-72-7。参考显示保留原生名称“水杨酸及其盐类和酯类”，仅绑定更宽泛的已制造成品Product、工厂生产混合与Mass/kg；无原生CAS、含量、形态、等级、工艺、供应者或地理。实际交换仍限独立证明的单一固体游离酸，不是盐、酯、异构体、混合物或粗湿滤饼。逐批声明供货质量基准含量及水分，不推定药效、剂量或药典符合性。

- 选定流: 水杨酸及其盐类和酯类 `3ae4ae3f-644a-4d9e-914c-594419243d1f`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gate`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`; `alta-salicylic-technical`

###### 返还的蒸汽冷凝水（`returned_condensate`）

实际返还供汽方时记录的蒸汽冷凝水，保留组成、温度与接收方。属于外部水及焓返还，不是第二个酸参考或自动抵扣；内部冷凝回用在合并时抵消。

- 选定流: 返还的蒸汽冷凝水
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utilities`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

##### 废物流

###### 含硫酸盐的水性母液（`mother_liquor`）

一股实际转移处理的母液排放，含完整水、钠/硫酸根及溶解酸/苯酚质量。独立测组成及接收去向，不假定为可销售硫酸钠，不从闭合残差虚构反应水。保留夹带水杨酸损失。

- 选定流: 含硫酸盐的水性母液
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 含苯酚的水性冷凝液（`phenolic_condensate`）

脱水或真空冷凝液实际外送时纳入。计量总湿质量及苯酚/水组成，厂内回收不作外部废物。与母液及废活性炭分别记录。

- 选定流: 含苯酚的水性冷凝液
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 湿废活性炭（`spent_carbon`）

实际外送接收方的脱色过滤废渣。保留水、吸附物与酸，不能把相同内含苯酚再报一次直接环境排放。

- 选定流: 湿废活性炭
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 拒收的固体水杨酸（`offspec_acid`）

仅指实际作为废物外运的拒收固体。厂内返工、待检及 WIP 分账记录，均不是额外正参考输出。保留失败/零产出批负荷、外部退回及处置处理。

- 选定流: 拒收的固体水杨酸
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

##### 基本流

###### 排入空气的二氧化碳（`co2_air`）

回收/治理后的实际未捕集 CO2 放空。覆盖各工况测气流及物种浓度，保留化石/生物/其他来源和受纳空气介质。进料、内部循环及产品留存碳均不等于此排放。

- 选定流: 排入空气的二氧化碳
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emissions`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 排入空气的苯酚（`phenol_air`）

治理后的实际苯酚物种排放，包括真空尾气、储存及搬运逸散。不能将 VOC 总量、COD 或未知质量差转为苯酚。披露检出限、未测工况及不确定性。

- 选定流: 排入空气的苯酚
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emissions`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 排入空气的水蒸气（`water_vapour`）

实际进入空气的蒸发水，与回收冷凝水、废物含水及产品含水区分。蒸发量证明相转移，不证明反应水生成速率。

- 选定流: 排入空气的水蒸气
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emissions`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

###### 排入空气的水杨酸颗粒（`acid_dust_air`）

干燥、包装、仓储或发运除尘后实测存在时的水杨酸颗粒。未经物种证据不能把未分化总粉尘全归于水杨酸。捕集粉尘内部回用不作另一外部交换。

- 选定流: 排入空气的水杨酸颗粒
- 流属性/单位: Mass / kg
- 数量规则: 每 1 kg 参考流的采集交换。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emissions`
- 来源: `jansen-salicylic-1983`; `jrc-ofc-2006`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_internal | internal_recovery | 内部苯酚、CO2、水及回收酸只作循环，不作新鲜采购、额外交付或替代抵扣。实际净补料、外售流与外送废物流各自核实。母液含盐不自动等于可销售硫酸钠。 | `jansen-salicylic-1983`; `jrc-ofc-2006` |
| allocation_causal | shared_operations | 优先用独立工序计量划分；共用公用工程按实际可解释的因果驱动分配并保留总量闭合。无通用经济/质量分配比例。真实共产品须独立确认功能、物态、接收及分配依据并经审查，不用未证实的价格或理论盐收率制造抵扣。 | `jrc-ilcd-allocation-2010` |
| allocation_stock | delivery_cohort | 结转账保留各交换分量与负荷，废批和不可恢复损失不能随意塞入期末 WIP 以减负。完整记录包装物理质量后另作复用服务分摊；分摊份额不替代整件实物量，不把复用每轮算成新料采购。 |  |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | sa_delivery | delivered_salicylic_acid | acceptance_and_stock_ledger | 期间；批号/谱系；CAS；路线；等级；含量及含水；称量毛重/皮重/净重；放行；交付；退回及原交付冲销；期初末成品/WIP 质量与各交换结转负荷；拒收/返工去向 | owner=sa_delivery 质量及仓储台账负责人。核实同批实际厂门交付称量与验收，保留唯一交付标识和独立放行记录；原始期间总量及库存分量不除以 Q。逐批证明已交付与未交付库存及负荷分界，退回/再验收不增加产量。 | kg | 每批及每次交付 | 完整声明期间及前期库存谱系 | 同一厂址/路线/状态/交付批群 | 每 1 kg 参考流 | 校准、原账、批次谱系、库存质量及负荷闭合、缺口和不确定性 |
| cp_materials | sa_delivery | phenol; sodium_hydroxide_solution; carbon_dioxide_feed; sulfuric_acid_solution; process_water; activated_carbon | material_ledger | 期间/批次/工序；SKU/CAS；路线；浓度/含水/杂质；供应者/地理；接收与耗用；原料/WIP期初末质量及结转负荷；回流/返工；失败/零产出；体积温压及积分状态 | owner=sa_delivery 生产与物料负责人。以校准称量/流量及采购规格核对每份外购湿制剂，保存完整未除原始期间分子及真实物料耗用；配方组分仅分账。配合 cp_gate 跟踪 WIP 结转，保留失败与返工投入；不在采集端归一。 | kg | 每批及供货批号 | 完整声明期间及前期库存谱系 | 同一厂址/路线/状态/交付批群 | 每 1 kg 参考流 | 校准、原账、批次谱系、库存质量及负荷闭合、缺口和不确定性 |
| cp_utilities | sa_delivery | electricity; steam; returned_condensate | metered_utility_ledger | 期间/工序；表计起止及单位；蒸汽质量/温度/压力/干度/焓；冷凝回水；功率/流率及时间或已积分量；仓储时长；装卸发运；共用驱动及全量；库存结转负荷 | owner=sa_delivery 能源及仓储负责人。保留完整期间实际仪表差、失败/启停/清洗/返工/仓储包装发运用能及可核实分摊依据，不先除产量；独立表计蒸汽与电力，已积分体积不乘时间。保留对应库存负荷向量。 | kWh; kg; MJ | 连续表计且按批对账 | 完整声明期间及前期库存谱系 | 同一厂址/路线/状态/交付批群 | 每 1 kg 参考流 | 校准、原账、批次谱系、库存质量及负荷闭合、缺口和不确定性 |
| cp_packaging | sa_delivery | pp_bag; pe_liner | packaging_ledger | 组件；供应者/材质规格；整件皮重；接收/领用/期初末库存；新供/复用及周期；破损损失；清洗用水用能；交付批号；库存结转负荷 | owner=sa_delivery 包装及仓储负责人。各真实组件称量并保留完整未除期间实物量及库存负荷，先实物后服务分摊，不用分摊份额替代整件质量；逐批排除 Q 中包装皮重。 | kg | 每包装规格及领用批 | 完整声明期间及前期库存谱系 | 同一厂址/路线/状态/交付批群 | 每 1 kg 参考流 | 校准、原账、批次谱系、库存质量及负荷闭合、缺口和不确定性 |
| cp_waste | sa_delivery | mother_liquor; phenolic_condensate; spent_carbon; offspec_acid | waste_transfer_ledger | 期间/批次/来源工序；湿质量/水分；Na/S/C及实际物种；取样；接收处理及联单；母液酸损失；厂内回收；失败/返工；库存和结转负荷 | owner=sa_delivery 环境及生产负责人。独立称量每股真实废物、取样测组分并保留全期间未除分子；核实废批及母液去向，厂内循环成对抵消。外送废水内含物不再作直接排放；治理负荷另保留。 | kg | 每转移及代表性工况取样 | 完整声明期间及前期库存谱系 | 同一厂址/路线/状态/交付批群 | 每 1 kg 参考流 | 校准、原账、批次谱系、库存质量及负荷闭合、缺口和不确定性 |
| cp_emissions | sa_delivery | co2_air; phenol_air; water_vapour; acid_dust_air | species_monitoring | 期间/工况/排口或逸散源；积分气量/流率时间；干湿温压；各物种浓度及检出限；治理前后及效率；碳来源；受纳介质；期初末负荷分配 | owner=sa_delivery 环境监测负责人。覆盖生产、清洗、启停、失败、仓储包装发运实际模式，测气流及每个物种并保留完整未除期间分子；仅流率与对应时段积分。物种与反应水须另有独立证据，COD/残差不是物种测量。 | kg; m3; h | 覆盖各工况的连续或代表性剖面 | 完整声明期间及前期库存谱系 | 同一厂址/路线/状态/交付批群 | 每 1 kg 参考流 | 校准、原账、批次谱系、库存质量及负荷闭合、缺口和不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivery_cohort | delivered_salicylic_acid | Q = 同批群实际唯一正净交付验收质量之和，退回冲销原交付；FG_close = FG_open + Released + Returns_in - Deliveries_out - Rework_out - Losses，以实物事件对账。质量放行不当交付，未交付成品与其负荷留期末，退回再验收不计新产量。 | cp_gate | Q; physical finished-stock ledger |  |
| raw_conversion | all inventory rows | 先保留原量及单位；液体质量由实际质量或有适用密度支持的体积换算，气体质量用实际组分温压干湿基及压缩性。已积分体积不再乘时间；流率按对应时段积分。组分子账只分解全制剂，不另添采购。 | cp_materials; cp_utilities; cp_emissions | R_i in each declared numerator unit |  |
| stock_burdens | all inventory rows | A_i = B_openWIP_i + B_openFG_i + R_i - B_closeWIP_i - B_closeFG_i - B_other_i。各项为同一交换分量的未归一负荷向量：R_i 保留全期间失败/零产出、损失、返工、仓储包装发运及治理；B_other_i 仅为独立可核实的其他产品归属，非任意抵扣。库存结转须有谱系及证据，不能同时保留生产负荷并再给库存一遍；同批内部生产/仓储交接在合并时抵消。此式是负荷归属，不能冒充本期物理输入输出质量账。 | cp_gate; cp_materials; cp_utilities; cp_packaging; cp_waste; cp_emissions | A_i; documented burden-carry ledgers |  |
| normalize_delivery | all inventory rows | a_i = A_i / Q，仅在 Q>0 时报告每 1 kg 参考流。这是唯一一次归一操作；行卡片及协议 aggregation_rule 只是其报告描述，不再次除以 Q。零交付期间保留原始负荷及库存结转，不制造单位库存值或抹去失败负荷。 | A_i; Q; cp_gate | a_i per 1 kg reference flow |  |
| physical_species | all inventory rows | 独立核对全湿实物质量及 C/H/O/Na/S 元素：期初+实际外入=实际外出+期末，内部循环两端抵消。再用独立物种分析及反应进度证据核对化学水的生成/消耗，分清制剂载体水、溶解/洗涤水、自由水、结构水及相转移。本方法不给反应水系数：专利脱水不是生成水测量；悬浮法水解实验证明条件依赖，不能移植。硫酸使水杨酸盐酸化也不能套“每中和一次产水”模板。未知反应水和未知出口不能同由一个残差拟合，COD/TOC 不是物种。闭合差须调查及披露。 | cp_materials; cp_gate; cp_waste; cp_emissions | independent physical/element and species/water ledgers | `jansen-salicylic-1983`; `jrc-ofc-2006`; `mohammad-kolbe-2024` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference product | 终端实物交换必须为同一工业固体游离酸，并有精确原生参考属性链。完整原生信息无真实化学、形态、等级或路线矛盾时，可用更宽泛的已制造成品Product绑定另有独立证据的CAS 69-72-7单一酸限定；空缺原生CAS不是已核实CAS。不得替换实际盐/酯、异构体、混合物或粗湿滤饼；供应者及真实供货规格仍独立核实。 | 完整原生身份、精确参考链及实际单一产品规格 |
| period | all inventory rows | 保留真实期间、批群、失败/返工、库存及负荷转移、原量换算和唯一归一证据；缺测不能写零。 | 各采集协议原账与校准 |
| species | all inventory rows | 守恒检验、实际物种及反应水证据相互独立；披露闭合差、检出限、地理/时间及供应接收不兼容。 | 独立采样/反应证据及全量闭合 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | 确认 CAS 69-72-7 的工业固体游离酸、无有机溶剂/硫酸路线、实际规格及供货水分。reference_flow_link 唯一指向 delivered_salicylic_acid，双语指向同一物理行；宽泛UUID绑定不构成科学批准；核实完整原生限制及实际单一产品限定，真实矛盾或未解决身份仍阻止使用。 | `alta-salicylic-technical`; `jansen-salicylic-1983` |
| validate_inventory | all inventory rows | 逐行检查单交换、方向、类型、全供货制剂、单位及 protocol owner；保留全原生名称分量、CAS 缺失、GLO/厂门限制及供应地理不确定性；UUID 或 Schema 正确不能证明供应负荷兼容。 |  |
| validate_ledger | sa_delivery | 证明交付 Q 与放行/库存分开，WIP及成品期初末负荷不漏不重；实际失败/零产出、返工、仓储包装搬运发运、废物治理均保留。核对唯一归一、独立实物/元素及物种/水证据，未知不是零。 | `jrc-ofc-2006`; `mohammad-kolbe-2024` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在参考身份及数据质量缺口解决后作为明确路线的工业固体酸厂门数据 |
| allowed_use | 同产品/状态/路线、明确地理时间、声明供货规格且核实供应接收匹配的用途 |
| excluded_use | 盐/酯/异构体或药物制剂替代；疗效/剂量/药典批准；默认碳移除抵扣；把 draft 当批准方法 |
| required_metadata | 身份与实际参考门；期间批群；原始库存及负荷结转；供货规格；公用工程；包装；治理及供应接收证据 |
| required_quality_disclosure | 宽泛原生参考及独立单一游离酸限定；辅助 UUID/供应者匹配；原生苯酚限制；物种/水证据及闭合差；缺测与不确定性；科学审查未完成 |
| update_trigger | 参考身份、路线、酸化剂、等级/水分、原料制剂、能源、场址/期间、包装、废物接收或测量证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jansen-salicylic-1983 | literature | Jansen and Wolff. Chemical process. US4376867A (1983-03-15), original patent PDF pp. 2–3, columns 1–4. https://patents.google.com/patent/US4376867A/en | 成盐、脱水、CO2 羧化、硫酸沉淀、分离及副产酸/母液损失的工序证据；旧工艺案例，不是当前供应商路线证明、通用收率、配方、反应水系数或排放因子。 |
| alta-salicylic-technical | literature | Alta Laboratories Ltd. Salicylic Acid, Technical Grade product table, snapshot 2026-10-16. https://alta.in/salicylic-acid/ | 工业粗粉、CAS 69-72-7、邻羟基苯甲酸及袋装供货身份。未披露实际工艺、袋材质或通用含量；工业表重复的药典标签不采用，网页疗效描述不迁移。 |
| jrc-ofc-2006 | official_guidance | European Commission JRC. Reference Document on Best Available Techniques for the Manufacture of Organic Fine Chemicals (August 2006), printed pp. 380–381, sections 5.2.1 and Table 5.1. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf | 化工废流来源、质量平衡、实际组成与工况/物种监测指导；不提供水杨酸工厂通用配方、反应水或排放系数，COD/TOC 不是分子物种。 |
| mohammad-kolbe-2024 | literature | Mohammad, Onwudili and Yuan. Potential Large-Scale CO2 Utilisation for Salicylic Acid Production via a Suspension-Based Kolbe–Schmitt Reaction in Toluene. Molecules 29 (2024), 2527, section 2.2.1 and Scheme 4. https://doi.org/10.3390/molecules29112527 | 独立水解实验及物种反证：甲苯悬浮路线、外加水及特定实验条件；仅支持不能把相转移或通用模板冒作实际反应水，不移植该路线、用量、收率或副反应比例。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC，ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance，2010年3月第一版，§7.9.3，印刷页257–258（PDF页277–278）。https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持已声明且确需分配的归因型情境：虚拟细分、逐交换决定性物理因果，再仅对真正剩余共同功能采用同一过程出口、实际状态下的同期市场价值。只支持分配方法，不证明本产品工业路线、配方、实测数量、固定份额、替代信用或科学批准；不声称手册逐字规定本PCR库存/批群实现。 |
