---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.human-plasma-derived-albumin-25-percent-solution
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
translation_status: aligned
content_maturity: authored_methodology
---

# 人血浆来源25%白蛋白水溶液，工厂净供货

## 1. 范围与适用性

本方法仅用于单一人血浆来源白蛋白水溶液的民用环境清单：每100毫升含25克白蛋白、100毫升单瓶纸盒规格密封供货，经产品特定质量放行后在工厂门实际净发运。参考对象为整份湿制剂，不是干白蛋白或治疗服务。Albuminar-25美国2013年6月修订标签提供一个真实供货实例，不证明各地当前均可供应。不同物种、浓度、路线、不兼容配方品牌、原料血浆、全血、免疫血清、免疫球蛋白及其他终端组分不能合并为分母。

仅使用批次／批群层面的环境记录，不采集供者个人身份。生物制造单元可采用有原始记录支撑的黑箱，但保留全部实际物料、公用工程、水、排放及废物交换。本文不提供生物材料富集、病原处理、分离纯化或活性增强操作参数、配方或实验协议，也不提供临床用法或剂量。参考定义不含疗效等效或通用血液单位换算。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.human-plasma-derived-albumin-25-percent-solution |
| classification_refs | CPC3.0 35272; 仅为较窄子集背景，不宣称已接受映射 |
| covered_products | 单独声明的人血浆来源25%质量／体积白蛋白水溶液制剂，100毫升单瓶纸盒规格，工厂净供货 |
| excluded_products | 动物血及其组分；重组白蛋白；原料人血／血浆；其他白蛋白浓度；免疫球蛋白；凝血因子；抗血清；临床服务 |
| representative_product | Albuminar-25，有据的100毫升药瓶含25克白蛋白整份水溶液供货；历史美国标签，并非通用供应商规格 |
| production_route | 按原始供应商记录的人源混合血浆制造路线，以包含全部实际制造及辅助负荷的环境黑箱表示；不复述操作协议 |
| market_state | 经质量放行的密封水溶液；声明实际完整制剂、容器、场址、发运门及温控历史 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂发运门供应已声明的人血浆来源白蛋白制剂，供下游环境建模 |
| How much | 1千克实际净供货整份湿溶液，不含包装质量 |
| How well | 每100毫升含25克白蛋白；实际产品特定放行、供货形态和批次分析；不作疗效等效 |
| How long or cycle | 一个封闭声明的发运核算期间及同产品批群，包含期初末在制品与成品结转 |
| reference_flow_link | finished_solution |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 血液制品 `04caea53-a455-4adc-b7d2-3bc102bf7971` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人源; 血浆来源路线; 25%质量／体积含量; 完整供货制剂; 品牌及规格; 100毫升药瓶规格及实际装量; 批次／批群; 质量放行; 实际净发运门; 期初末在制品及成品负荷; 场址及供货地理; 温控历史; 初级及次级包装; 分配门产品; 上游数据集边界 |

具体数据包必须声明全部必需限定信息。原生身份限制：完整选定名称为“血液制品；生产混合，在工厂”，备注包含人血浆衍生药品。地理／供货位置未指定，未提供CAS，路线及等级字段为空，唯一属性为因子1的参考质量。原生分类35260与目标35272不同，该分类债务保留给数据所有者审查。此广义身份仅支持经限定的人源产品交换，不证明25%配方、制造技术、供应商用量或中国内地／香港／全球地理。参考门限定为已声明工厂门。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用整份供货湿溶液净质量。Q为实际净发运量，不是新增放行产量P。finished_solution行为每参考流1千克。 |
| solution_basis | all inventory rows | 质量 | kg | 直接测质量，或用同批体积及独立实测声明条件密度换算。25克／100毫升是质量／体积，不是25%质量分数；不默认水分或密度。组分分析与载体水是子账，不另计采购。 |
| utility_basis | all inventory rows | 实测交换属性 | 声明行单位 | 在normalize_dispatch之前完成原始单位换算。实际速率可乘持续时间；已积分液／气体积不再乘时间。采用独立有据的热值及温压基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可追溯的人血浆采集供应，或具备完整声明上游负荷的采购血浆数据集；不默认捐赠零负荷 |
| starting_condition_role | 实际外部人血浆投入；上游未覆盖时扩展采集、检测与冷链过程 |
| product_classification_scope | 仅一项已声明人白蛋白溶液；CPC分类叶比本方法更广 |
| recursive_input_rule | 采购白蛋白中间品须携带完整上游数据集及精确身份；不无限递归，也不采用零制造负荷 |
| upstream_dataset_requirement | 匹配人源、供货状态、路线、地理、期间、采集检测、共享血浆分配、温控运输及边界覆盖，并披露缺口 |
| disclosure | 从源头至工厂实际净发运；包括全部制造、质控、耗材、公用工程、制水、包装、仓储、返工、废物处理及装运。客户运输／使用另作扩展。公开黑箱不隐藏环境负荷。 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | albumin_supply | 逐项以原子交换记录每种实际物料、能源、水流、耗材、包装组件、联产品、废物及基本排放。实际新增交换须扩展初始卡片；缺项须有不存在证据，不能作为截断。供应商数据可携带上游单元，但必须与前景计量核对边界。 | ifc-pharma-biotech-2007 |
| b_thermal | albumin_supply | 保留实际血浆采集运输仓储冷链、制造冷热负荷、洁净公用工程及成品仓储搬运装运。所引终端标签规定受控室温，不默认终端产品需要冷藏。记录实际温控历史、时间、场址、电力及制冷剂损耗，不公开制造操作参数。 | csl-albuminar25-label-2013; ifc-pharma-biotech-2007 |
| b_gate | albumin_supply | 终端门为工厂已验收整份溶液的唯一实际净发运。新增质量放行质量P是生产向仓库的内部转移，不是Q。生产、成品仓储及发运分别建账，合并账抵消内部交接。期末未交付成品及其结转负荷不进入Q，继续结转；期初成品发运时带入其原制造负荷。 | jrc-ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| albumin_supply | 人白蛋白供应环境黑箱 | required | 声明从源头至发运边界内全部实际单元；扩展采购数据未覆盖的上游单元 | 在可审计未分配多产品物理账上形成单产品报告 | 工厂净供货湿溶液1千克 |

### 过程：白蛋白供应（`albumin_supply`）

#### 输入

##### 产品流

###### 人血浆原料（`plasma`）

按整份湿血浆记录，带入采集、检测、采集耗材、上游分配及冷链负荷。仅人源，不含供者身份；所含水不另计采购。

- 选定流：人血浆原料
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 乙醇溶液（`ethanol`）

实际使用时记录整份采购溶剂制剂及其分析子账，包括新补充量、回收进出和损耗；内部循环不作为新采购。不规定操作浓度。

- 选定流：乙醇溶液
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 辛酸钠（`caprylate`）

实际使用时按实际采购供货形态记录，商业投入内的载体水保留在该投入内。标签身份不提供配方或用量。

- 选定流：辛酸钠
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 乙酰色氨酸钠（`acetyltryptophanate`）

实际使用时记录完整商业投入；分析组分是子账。

- 选定流：乙酰色氨酸钠
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 碳酸氢钠（`sodium_bicarbonate`）

以实际消耗为纳入条件，并非强制配方成分。保留采购形态及含量。

- 选定流：碳酸氢钠
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 氢氧化钠溶液（`sodium_hydroxide`）

按实际制造或清洗投入纳入；原账分开记录用途，但不重复采购。

- 选定流：氢氧化钠溶液
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 乙酸溶液（`acetic_acid`）

按实际投入纳入，保留整份供货制剂、实测含量及库存变化。

- 选定流：乙酸溶液
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 注射用水（`wfi`）

仅外供水跨越本产品投入边界。现场制备属于内部转移：在扩展黑箱内一次保留原水、制水能源、耗材和废弃物。

- 选定流：注射用水
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 过程用水（`water`）

分表记录实际冷却补水、清洗及现场制水原水；不重复计入外供制剂所含水或循环冷却水。

- 选定流：过程用水
- 流属性/单位：体积 / 立方米
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_utilities。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 电力（`electricity`）

纳入同批群采集检测设施、制造黑箱、洁净区域暖通、制水、制冷、质控、仓储、返工及装运的应归属负荷。

- 选定流：电力
- 流属性/单位：能量 / 千瓦时
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_utilities。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 外购蒸汽（`steam`）

仅记录实际外购热；现场蒸汽属内部转移，锅炉燃料、水及排放一次记录。保留冷凝水与回流焓基准。

- 选定流：外购蒸汽
- 流属性/单位：能量 / 兆焦
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_utilities。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 天然气（`natural_gas`）

现场实际燃烧时保留燃气计量及有据热值基准；其他实际燃料须另设原子卡。外购蒸汽不抵销现场燃料负荷。

- 选定流：天然气
- 流属性/单位：能量 / 兆焦
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_utilities。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 1,1,1,2-四氟乙烷（`r134a_makeup`）

仅在实际制冷剂为此物质时使用。采用充注、回收质量、维修和库存记录；其他制冷剂各设独立行，不默认制冷剂化学身份。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_utilities。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 玻璃药瓶（`vial`）

记录实际初级玻璃容器消耗，包括不合格、破损和样品；核实供应商组成。

- 选定流：玻璃药瓶
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 合成橡胶药瓶塞（`stopper`）

按实际瓶塞纳入，核实弹性体身份、供货质量及废品，不默认所有封口组成相同。

- 选定流：合成橡胶药瓶塞
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 铝药瓶封口（`aluminium_cap`）

按实际铝组件纳入；若有聚合物组件，另设卡片。

- 选定流：铝药瓶封口
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 纸板盒（`carton`）

此行为单项实际纸板包装，不是全部包装的集合。实际存在的说明书、标签及其他组件另行记录。

- 选定流：纸板盒
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 印刷纸说明书（`leaflet`）

实际印刷说明书；用兼容背景数据纳入纸材生产及印刷。

- 选定流：印刷纸说明书
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：csl-albuminar25-label-2013; ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 聚丙烯滤芯（`filter`）

仅在实际消耗时记录，采用完整一次性物品及已核实组成。其他实际滤材、管路、袋、试剂、清洗化学品或质控耗材必须各增具体卡，不因本例截断。

- 选定流：聚丙烯滤芯
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净供货成品溶液（`finished_solution`）

终端参考交换仅为工厂发运门实际净供货的人血浆来源25%白蛋白整份湿溶液。参考质量不含包装质量，但纳入包装负荷；其他组分不共用此参考行。 具体数据包必须声明全部必需限定信息。原生身份限制：完整选定名称为“血液制品；生产混合，在工厂”，备注包含人血浆衍生药品。地理／供货位置未指定，未提供CAS，路线及等级字段为空，唯一属性为因子1的参考质量。原生分类35260与目标35272不同，该分类债务保留给数据所有者审查。此广义身份仅支持经限定的人源产品交换，不证明25%配方、制造技术、供应商用量或中国内地／香港／全球地理。参考门限定为已声明工厂门。 原生备注区分血液中心全血／成分与分馏中心血浆衍生物，并区别人工血液替代物。此处保留全部原生名称分量：基名血液制品，无名称属性限定，无处理／标准／路线限定，生产混合、在工厂。不存在次级流属性或密度因子。该记录既不确立供者地理，也不确立临床产品可比性。

- 选定流：血液制品 `04caea53-a455-4adc-b7d2-3bc102bf7971`
- 流属性/单位：质量 / 千克
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：csl-albuminar25-label-2013; jrc-ilcd-2010

###### 人血浆来源免疫球蛋白原液（`immunoglobulin_coproduct`）

仅在此供货状态作为独立联产品实际离开扩展黑箱时记录。并非参考产品，也无效价或疗效等效性。每项其他实际联产品均须按真实分配门设置独立身份及行。

- 选定流：人血浆来源免疫球蛋白原液
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_allocation。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_allocation`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

##### 废物流

###### 废弃人白蛋白溶液（`rejected_solution`）

实际废弃制剂，包括失败零产出批、质控样、过期及未回收退货。保留全部已发生制造与处置负荷，不作为避免生产从投入中扣除。

- 选定流：废弃人白蛋白溶液
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 人血浆蛋白残渣（`plasma_residue`）

实际湿残渣；子账区分水、蛋白及其他组分。不提供处理或病原操作程序；记录实际处理商及负荷。

- 选定流：人血浆蛋白残渣
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 制药过程废水（`wastewater`）

逐项计量实际排水，保留组成、去向、处理及污泥关联。化学需氧量是实测指标，不用于推算质量、蛋白、乙醇或反应水。

- 选定流：制药过程废水
- 流属性/单位：体积 / 立方米
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 废乙醇溶液（`spent_solvent`）

实际外送处理的废溶剂；区别于作为联产品出售的回收溶剂和内部溶剂循环。

- 选定流：废乙醇溶液
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 废聚丙烯滤芯（`used_filter`）

实际废滤芯，另记污染状态及处理路线。其他一次性废物另设行。

- 选定流：废聚丙烯滤芯
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 废玻璃药瓶（`glass_waste`）

破损或不合格玻璃，记录实际污染与去向；不默认给予污染玻璃洁净回收抵扣。

- 选定流：废玻璃药瓶
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 制药废水处理污泥（`sludge`）

实际湿污泥及干固体子账；保留处理公用工程负荷，不重复外部废水处理清单。

- 选定流：制药废水处理污泥
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

##### 基本流

###### 乙醇，排入空气（`ethanol_air`）

控制后实测或独立有据的实际乙醇排放；保留介质、期间及不确定性。无形态证据时不由总挥发性有机物推算。

- 选定流：乙醇，排入空气
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 二氧化碳，化石源，排入空气（`co2_air`）

按有据燃料碳或兼容因子记录实际现场化石燃烧排放；其他实际物种各设行，上游供应者排放不在现场重记。

- 选定流：二氧化碳，化石源，排入空气
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 1,1,1,2-四氟乙烷，排入空气（`r134a_air`）

仅记录该制冷剂的实际泄漏；核对充注、回收及库存，独立于能源用量。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

###### 水蒸气，排入空气（`water_vapour`）

独立实测或有据的蒸发量；不得用同一质量残差同时拟合蒸发和未知反应生成水。

- 选定流：水蒸气，排入空气
- 流属性/单位：质量 / 千克
- 数量规则：A_j / Q，按本行单位报告一次；见第8节唯一报告操作；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ifc-pharma-biotech-2007; jrc-ilcd-2010

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | albumin_supply | 先按物理记录分开可归属采集检测、产品特定制造、质控、包装、冷储及搬运。共享血浆和制造须保留每项实际联产品及未分配物理清单。有证据时采用物理因果关系；否则明确论证采用真实分配门经济价值，使用同期数量／价格，并对另一可辩护基准作敏感性分析。不提供通用白蛋白分配份额、捐赠血浆零负荷或自动按临床价值分配。 | jrc-ilcd-2010 |
| a_ledger | albumin_supply | 原始物理闭合后才分配共享负荷，产品专属负荷归该产品。不同中间／终端状态的组分按准确共享门价值分配，不能直接使用未剔除后续加工的终端零售价。共享池份额合计为一。区分废物、循环及联产品，不重复抵扣避免产品。保留分配前后两套账。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

汇总栏仅声明最终报告基准。每项collection_method均保留未归一的原始分子及库存／结转负荷。仅normalize_dispatch执行A_j / Q；卡片表达式与此报告基准标签指同一次操作。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | albumin_supply | 终端产品与库存门 | foreground_record | 质量及仓库数据负责人：产品／规格；匿名批次／批群；新增放行P；唯一净发运凭证Q；退货；质量；换算时密度／体积；期初末在制品和成品；结转负荷向量；去向；验收状态 | 负责人保留未归一的原始凭证、称重及库存／结转负荷记录。生产入库P与仓库发运分别核对，抵消内部交接；按唯一实际验收净供货湿质量确定Q，排除未交付库存、重复验收和未决退货。此处不做除法。 | kg | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |
| cp_material | albumin_supply | 实际物料及耗材交换 | foreground_record | 制造／环境数据负责人：每项实际采购制剂；供货质量；分析；供应商；收货；期初末原料库存；期初末在制品；结转负荷；拒收与零产出批；退回返工；回收；损耗 | 用发票、批次环境记录及库存核对完整原始期间实际消耗和整份供货制剂，组分分析作子账。纳入零产出、返工和质控负荷及上游采集检测覆盖。不记录富集或制造程序；仅保留未归一分子。 | kg | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |
| cp_utilities | albumin_supply | 能源水及制冷 | foreground_record | 公用工程负责人：分表读数及单位换算；载能体；热值；速率／持续时间或积分体积标识；水源；公用工程回流；制冷服务及充注回收；场址／时间；分配驱动 | 采集完整原始期间计量，包含待机启动、失败批、制水、洁净服务、质控、冷链及实际成品仓储装运负荷。区分外购公用工程与内部制备，保持单位拆分及实际归属记录。采集端不归一。 | kWh; MJ; m3; kg | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |
| cp_packaging | albumin_supply | 包装消耗 | foreground_record | 包装负责人：每项材料／组件；实测单件质量；采购／使用件数；废品／破损；库存变化；皮重不含制剂质量 | 保留同批群每组件未归一总量，包括报废、测试、返工及退回包装。件数转质量须实测组件单件质量。记录完整供应商组成，不默认包装质量。 | kg | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |
| cp_waste | albumin_supply | 废水及单项废物 | foreground_record | 环境／废物负责人：单项流；湿质量／体积；独立实测组成／密度；处理去向；不合格／过期；污泥；回收；库存及供应者覆盖 | 保留每项废物完整原始转移、采样及处理联单与实际处理负荷。核对质量、水及组分，不由化学需氧量推断质量。纳入失败／零产出及退货处置，避免与供应者数据重复处理。不提供处理操作协议。 | kg; m3 | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |
| cp_emissions | albumin_supply | 单项基本交换 | foreground_record | 环境负责人：物种；介质；实际测量质量或独立有据因子投入；控制边界；期间；不确定性；水平衡；燃料碳；制冷剂平衡 | 保留除法前原始物种监测或因子计算，包含控制和冷链损耗。总挥发性有机物、化学需氧量及闭合残差不能识别未知物种。反应水证据独立于物理质量／元素闭合，不能由一个残差解两个未知数。 | kg | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |
| cp_allocation | albumin_supply | 共享负荷与联产品 | foreground_record | 清单核算负责人：全部实际联产品；准确共享门及状态；原始物理产出；因果驱动；同期数量及门价格；分配前后负荷；在制品／成品结转向量 | 采集底层记录，不除以Q。保留实际联产品状态及完整共享负荷池，再应用已披露a_hierarchy决策，将库存／结转负荷追溯至相同终端供货批群。记录实际驱动及价格不确定性。 | kg; declared currency | 逐批／逐事件及期末 | 同一封闭原始报告期间及可追溯期初末结转 | 声明采集／供应／制造及仓储场址；不含供者个人数据 | 每 1 kg 参考流 | 校准测量；发票；批次环境账；库存核对；完整供应者边界及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| carry_dispatch | all inventory rows | 对各交换／负荷j保留A_j＝原始期间应归属负荷＋期初在制品负荷＋期初成品负荷－期末在制品负荷－期末成品负荷，按同产品／路线／状态追踪批群，并明确退货冲回／结转调整。此为负荷匹配，不是原始物理产出核算。区分产品专属与已分配共享负荷，抵消内部转移，此处不做除法。 | raw_period_burdens; opening_wip_burdens; closing_wip_burdens; opening_finished_burdens; closing_finished_burdens; return_adjustments; cp_output; cp_allocation | A_j | jrc-ilcd-2010 |
| normalize_dispatch | all inventory rows | x_j＝A_j／Q。Q为选定工厂门唯一已验收实际净发运湿溶液正质量，单位千克。在原始换算和carry_dispatch之后，这就是唯一报告除法；卡片数量和协议汇总引用同一次操作，不能额外再除。Q为零、负值或未解决时，不得报告数值数据集。 | A_j; Q; cp_output; cp_material; cp_utilities; cp_packaging; cp_waste; cp_emissions; cp_allocation | x_j | jrc-ilcd-2010 |
| physical_closure | albumin_supply | 在分配前，将完整原始物理投入加期初原料／在制品／成品，与唯一发运溶液、实际联产品、其他实际外部产品流出口和公用工程外返、废物／排放及期末原料／在制品／成品核对。另保留完整包装实物子账，含随发运货物带出的包装、废弃包装及期初期末包装库存；包装质量仍在溶液Q之外。各相应平衡只采用实际物理质量，材料、公用工程和包装子账之间的内部转移仅抵消一次。生产放行P是内部转移，予以抵消，不再加作外部产出。测量总湿质量、水及独立有据的蛋白／溶剂／元素平衡；反应水及实际物种须独立证据。不能用残差拟合未知水和另一未知出口。 | cp_output; cp_material; cp_utilities; cp_packaging; cp_waste; cp_emissions; cp_allocation | unallocated_physical_ledger | ifc-pharma-biotech-2007; jrc-ilcd-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | reference product | 匹配人源、准确配方／浓度、整份湿供货状态及工厂门；原生家族UUID不能单独定义这些限定。场址与供货地理须采集，不能由原生空地理或历史标签推断。 | 原始供应商规格及匿名批次放行／发运记录 |
| q_complete | all inventory rows | 保留完整实际黑箱制造、上游采集检测、能源水、包装、质控、仓储装运、失败及返工负荷。不得声称仅包装记录覆盖制造。普通辅助UUID／供应者匹配与终端参考身份分别披露。 | 完整物料／公用工程／废物账及上游覆盖矩阵 |
| q_inventory | all inventory rows | 期初库存带入原有负荷，期末未交付库存结转负荷。退货关联原始批次／发运，必要时冲回原发运及负荷，带入后续返工／仓储，终端净供货质量仅计一次。再验收不产生新产量或第二次交付。 | 生产、仓储、发运独立核对及交易关联、负荷向量 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_solution | 双语均须有唯一终端产品输出finished_solution，即带声明UUID及工厂门的1千克整份湿溶液。其他真实中间品／联产品保留独立身份，不通过改名或隐藏UUID冒充另一参考。不作疗效或通用血液单位换算。 | csl-albuminar25-label-2013 |
| v_period | albumin_supply | 要求Q为正、完整原始期间／批群匹配、完整失败／零产出及返工负荷、物理闭合与期初末在制品／成品结转。证明仅一次normalize_dispatch除法。不将放行P等同发运Q，也不把未交付成品计入Q。 | jrc-ilcd-2010 |
| v_inventory | all inventory rows | 每项实际交换须以原子行表示，已选身份保留全部原生限制、兼容供应者边界、真实用量／单位及协议负责人。缺少重要负荷、物理闭合未解、物种无据或遗漏结转时，不能形成完整前景数据集；未知项不能填零。 | ifc-pharma-biotech-2007; jrc-ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于准确声明的工厂供货人白蛋白溶液环境建模 |
| allowed_use | 配方、人源、浓度、路线、场址、参考门及期间匹配，且上游和结转核算完整 |
| excluded_use | 临床剂量、疗效等效、通用血液单位、其他物种／组分、重组路线或用仅包装数据表示制造 |
| required_metadata | 产品制剂与分析；原始供货规格；期间；场址／地理；工厂发运门；Q与P区别；上游边界；分配；温控；全部实际协议及供应者身份 |
| required_quality_disclosure | 不确定性、采样、排除、原生广义身份／分类限制、辅助UUID／供应者缺口、零产出／返工及库存结转；不暗示方法已获批准 |
| update_trigger | 人源、配方／浓度、路线、场址、供货状态、温控链、供应者边界、分配、参考门或库存方法变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| csl-albuminar25-label-2013 | official_guidance | CSL Behring, Albuminar-25 prescribing information, revised June2013; https://labeling.cslbehring.com/pi/us/albuminar25/en/albuminar25-prescribing-information.pdf ; 获取于2026-10-16 | 制造商原始标签第1-2页：人血浆来源、25克／100毫升水溶液供货状态、药瓶规格及受控室温储存。仅为历史美国实例；不保证当前市场，不假设全球场址，不提供环境因子、配方、临床用法或疗效换算。 |
| ifc-pharma-biotech-2007 | official_guidance | World Bank Group/IFC, EHS Guidelines Pharmaceuticals and Biotechnology Manufacturing, 30April2007, pp4-5,12,19-20; https://www.ifc.org/content/dam/ifc/doc/2000/2007-pharma-biotech-ehs-guidelines-en.pdf ; 获取／复核于2026-10-16 | 行业环境边界：实际废水、废物、洁净公用工程、制水及监测。仅一般适用性；没有产品特定收率、排放因子、操作参数或强制化学配方。 |
| jrc-ilcd-2010 | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March2010, section7.9, PDF pp275-277,283-284; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; 获取／复核于2026-10-16 | 归属型过程拆分、物理因果及经论证的准确门经济分配。本PCR的原始期间、退货及结转规则落实质量／负荷一致性；不由此推导血液特定固定份额、临床价值或生理负荷因子。 |
