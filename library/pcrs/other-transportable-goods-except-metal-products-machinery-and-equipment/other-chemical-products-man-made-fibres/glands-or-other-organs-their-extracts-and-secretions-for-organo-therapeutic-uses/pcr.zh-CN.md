---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.glands-or-other-organs-their-extracts-and-secretions-for-organo-therapeutic-uses
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 实际净交付门的猪甲状腺干燥提取物原料药

## 1. 范围与适用性

本方法涵盖分隔管理的猪甲状腺整份干燥提取物作为散装原料药，在制造商装货验收门的环境清单。Bioiberica 证实真实的猪甲状腺干燥原料药供货；独立的 Armour 标签支持同一动物/组织来源物料类别的实际药用，不证明两者具有共同供方。不推断药理等效。来源：`bioiberica-thyroid-api`；`dailymed-armour-thyroid`。

排除其他动物种类、器官、湿腺体、分泌物、纯化 T3/T4、合成激素、整片药物和最终混合制剂。物理身份为动物＋组织＋整份提取物＋干燥供货状态；器官治疗用途本身不是身份。本方法采集公开民用物料、能源、水、废物和质量边界记录，不提供生物加工参数、富集或活性增强规程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.glands-or-other-organs-their-extracts-and-secretions-for-organo-therapeutic-uses |
| classification_refs | CPC 3.0 35271；narrower |
| covered_products | 一种明确组成和供货状态的整份猪甲状腺干燥提取物原料药 |
| excluded_products | 其他动物/组织；湿器官；纯化或合成激素；片剂；混合制剂 |
| representative_product | 实际净交付门的猪甲状腺干燥提取物原料药 |
| production_route | 动物来源制造至整份干燥原料药，或明确分开的该已制造原料药采购/包装路线；实际路线须有证据 |
| market_state | 制造商装货门的散装干燥原料药，净产品质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明的整份猪甲状腺干燥提取物原料药 |
| How much | 1 kg 实际净交付原料药，不是新增质量放行产量 |
| How well | 按实际原料药规格和批次身份验收；不推断效价、临床剂量或等效性 |
| How long or cycle | 一个声明的交付/核算期间及匹配的产品-路线-状态批群；无临床服务时长 |
| reference_flow_link | delivered_api |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 用于器官治疗的腺体或其他器官及其提取物和分泌物 `78482d47-aacf-4a25-9229-23e12b5c4b18` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物种类和甲状腺组织; 整份提取物身份; 干燥供货组成与水分; 实际路线; 质量规格; 批群和期间; 净交付门和退回; 期初末 WIP 与成品库存及结转负荷; 供方和场址地理; 冷链与损耗; 上游分配; 包装和发运范围 |

原生参考为宽泛 Product flow：basename 如上；名称中的属性分量为空；路线为“成品，已制造”；组合为“生产混合，在工厂”；备注重复类别描述；无 CAS 和供货地理。唯一属性是参考质量，系数为 1。这不规定动物、组织、等级、干燥状态或供方。复用以以上全部限定及唯一物理交付行为条件，不提供动物来源证据、密度、临床质量或背景数量。已核对属性→单位组的精确版本；参考单位为 kg。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | delivered_api | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的干燥供货状态，用校准称量毛重减皮重得到净提取物质量。Q 为扣除退回质量后的实际净验收交付量，按批仅计一次；未放行及未交付库存不进入 Q。水分和实测组成是子账，不替代参考质量。 |
| raw_units | all inventory rows | 记录的物理属性 | 声明单位 | 保留未归一的期间记录。用独立支持的因子和实际状态换算质量、积分能量与体积；仅速率乘持续时间，积分体积不能再乘时间。不把原生次级属性系数当密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收带上游负荷的分隔猪甲状腺组织，或接收可追溯的已制造整份干燥原料药及完整上游链 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 猪甲状腺干燥原料药物理子集；分类不选择组织或等级 |
| recursive_input_rule | 外购整份原料药仅记一次上游投入，随后只记新增前景作业；不递归重建其已包含的器官或公用工程 |
| upstream_dataset_requirement | 须有动物种类/组织、供货状态、养殖/屠宰分配、路线、场址地理、运输/冷链及损耗证据；器官不自动为零负荷 |
| disclosure | 声明实际起点、工厂装货验收门、全部阶段和处理接口、实际纳入仓储/包装/搬运/发运及返工，以及每项遗漏阶段及原因 |

### boundary_complete

纳入实际接收、属于前景时的动物来源制造、质量检测、冷藏、清洗、整理、包装、成品仓储及至所述装货门的发运。每项真实附加物料、燃料、制冷剂、包装组件、废物及排放均另设带协议的原子交换。不规定加工顺序或操作设定。门外运输作为单独披露的扩展，不由工厂端流身份默默强加。

### inventory_carry

分别保留生产放行账与成品仓储/发运账，合并时抵消相等内部交接。期末成品库存既不是另一笔生产输出，也不属于交付 Q。按实际匹配批群结转期初末 WIP/成品负荷；保留失败/零产出运行、返工、损耗及退回品的负荷。退回后再验收不形成第二份新产品或重复交付。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| api_supply | 猪甲状腺原料药供货环境账 | required | 声明路线和装货门内全部实际阶段；外购原料药与器官来源制造为替代投入，不能重复采购 | foreground | 1 kg 净交付原料药 |

### 过程：猪甲状腺原料药供货环境账（`api_supply`）

#### 输入

##### 产品流

###### 分隔管理的猪甲状腺原料（`thyroid_glands`）

仅器官来源制造路线使用此投入。记录实际组织、动物来源、供货湿态和冷链损耗。不能从食用内脏标签推断组织身份和上游负荷。

- 选定流：猪甲状腺
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：bioiberica-thyroid-api; dailymed-armour-thyroid

###### 外购整份干燥原料药（`purchased_api`）

仅已制造整份原料药的接收与包装替代路线使用此投入。供方数据集必须包含动物来源制造链；不得把其内含腺体再记作一次采购。

- 选定流：猪甲状腺干燥提取物
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：bioiberica-thyroid-api; dailymed-armour-thyroid

###### 计量电力（`electricity`）

用于声明边界内制造、冷藏、仓储、搬运和发运的实际场址电力。不假定电压、国家组合或供方。已检查的 CN 1–35 千伏消费组合身份不能默认为欧洲或未指定场址的电力。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

###### 外购过程热（`purchased_heat`）

以确实外购热能为条件。核对热量表及上游供热；现场燃料及其实际燃烧排放需另设原子行，不能再次计入同一外购热能。

- 选定流：外购热能
- 流属性/单位：Energy / MJ
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

###### 外购过程用水（`process_water`）

记录单独取得的水，包括有记录的清洗用水。外购组织、原料药或制剂中已有的水是组成子账，不是第二次水采购。

- 选定流：过程水
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

###### 氢氧化钠清洗溶液（`cleaner`）

仅在确实采购该清洗剂时使用此条件示例。计量整份供货溶液，并将声明组成保留为子账。本卡不规定浓度、卫生处理步骤或加工设定。其他实际清洗剂需各设卡片。

- 选定流：氢氧化钠水溶液
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

###### 高密度聚乙烯供货容器（`hdpe_container`）

以确实使用该容器为条件。记录实物及适用时的重复使用寿命。不假定供方使用高密度聚乙烯；每项其他真实包装组件均有自己的材料行和负荷。包装质量不进入原料药 Q。

- 选定流：高密度聚乙烯容器
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净交付整份猪甲状腺干燥原料药（`delivered_api`）

本唯一行仅表示声明的猪甲状腺整份干燥提取物，不表示其他腺体、湿组织、浓缩液或纯化激素。保留宽泛原生名称，不把该名称覆盖的物品视为可互换。

- 选定流：用于器官治疗的腺体或其他器官及其提取物和分泌物 `78482d47-aacf-4a25-9229-23e12b5c4b18`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_delivery
- 来源：bioiberica-thyroid-api; dailymed-armour-thyroid

##### 废物流

###### 弃置猪甲状腺组织残余（`tissue_residue`）

称量实际分隔弃置残余并记录处理接口。不推断收率或再利用适用性。内部返工仍属内部，不得同时记作本项处置和另一笔外购器官。

- 选定流：猪甲状腺组织残余
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

###### 弃置干燥原料药（`discarded_api`）

把失败、过期和退回弃置原料药与成功交付分开追踪。按匹配批群账纳入其实际制造、存放和处理负荷；不形成正 Q。

- 选定流：弃置猪甲状腺干燥提取物
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

###### 水性过程废液（`effluent`）

使用实测废液质量和独立分析的组成，并声明去向及处理边界。COD 是质量指标，不能替代物种、元素闭合或反应水。

- 选定流：甲状腺加工水性废液
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

##### 基本流

###### 蒸发至空气的水（`water_vapour`）

当蒸发跨越边界时，以独立测量确定实际除去的水。相变不是反应水生成。不能用同一平衡残差同时拟合此数量与未知反应水。

- 选定流：排入空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：把匹配的原始期间分子按每参考流基准报告，仅使用第 8 节的唯一报告计算；采集端不执行除法。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：cp_environment
- 来源：

## 7. 分配与共产品处理

### animal_upstream_allocation

不能仅因甲状腺是小份屠宰输出而把上游负荷设为零。取得动物来源和输出类别证据及实际上游数据集的分配方法。直接归属器官专属收集、冷链、损耗和运输；记录联合产出数量与分配驱动，不推断价值或收率。欧委会方法区分养殖与屠宰分配，并在自身范围内规定强制猪默认值；这些不是甲状腺专属系数，本方法不移植。研究选择完整 PEF 方法时须保留该区别。来源：ec-pef-2021。

### foreground_allocation

共享前景服务先分开可归属作业/表计；剩余分配须有实测因果关系支持，缺乏因果依据时披露替代方法。保留未分配物理账及全部联产品。本质量方法不允许以临床剂量、活性或激素等效量分配。来源：ec-pef-2021。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

aggregation_rule 列仅声明最终报告基准，不在采集端执行 A/Q。唯一除法属于下方报告计算，卡片及本列不能再除一次。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | api_supply | 净交付与库存 | weighing_and_stock_ledger | 批次；动物；组织；路线；状态；期间；毛重；皮重；验收发运；退回；期初WIP；期末WIP；期初成品；期末成品；结转负荷；内部交接；失败运行 | owner：场址质量与仓储保管人共同负责。保留未经归一的原始称量、批次验收及退回标识、质量放行和交付记录、库存及负荷双账。用期初库存、当期接收/放行、损耗和期末库存核对唯一交付批次。采集端不执行 A/Q。 | kg | 每批及期末 | 完整实际期间及结转批群 | 具名场址和装货验收门 | 每参考流 | 校准、库存核对、签署验收/退回、组成与供方来源 |
| cp_environment | api_supply | 原子环境交换及结转负荷 | meter_invoice_and_waste_ledger | row_id；批次；期间；原始数量；原始单位；换算；起点条件；进料组成；期初WIP负荷；期末WIP负荷；期初成品负荷；期末成品负荷；失败零产出；返工；共享服务；分配驱动；去向 | owner：场址环境数据保管人，会同表计、生产及废物负责人。保留完整未除的期间分子、换算证据及完整 WIP/成品负荷结转。纳入零产出/失败运行、真实冷链/仓储/包装/搬运/发运与返工。每份整配方采购与其组成子账分开；保留每个实际基本物种及接收介质。采集端不除以交付或放行量。 | 各原子行分别为 kg；kWh；MJ | 每批/表计间隔及期末 | 完整匹配期间，包括期初结转及失败运行 | 声明场址、实际上游接口及去向 | 每参考流 | 发票、表计、分析、处理联单、损耗及负荷核对；明确缺失与零 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_delivery_basis | all inventory rows | Q = 声明批群中唯一验收发运原料药的毛重减皮重之和，再扣退回质量；要求 Q > 0。对每个交换 j，以未归一完整期间记录加期初结转负荷，减有依据的期末 WIP 和成品结转，结合实际分配并抵消内部交接，组装可归属分子 A_j。按每 1 kg 净交付参考仅报告一次 A_j / Q。卡片指令与归集基准描述的是同一次报告操作，绝非连续除法。保留扣出的期末负荷供下期结转；保留失败/零产出/返工负荷于有记录的批群；零产出期间结转负荷，不能产生归一产品数据集。 | cp_delivery; cp_environment | 每 1 kg 净交付原料药的交换数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| origin_state | all inventory rows | 区分动物/组织、实际路线、整份制剂、水分及供货状态。供方实例的欧洲来源不能确立所有生产者地理或批次来源；药品标签不是供应链身份关联。 | bioiberica-thyroid-api; dailymed-armour-thyroid; cp_delivery |
| physical_balance | all inventory rows | 按期初库存＋外部输入＝实际输出＋期末库存核对完整未分配物理质量和相关元素；抵消内部交接。独立确立实际物种、水生成/消耗及相态/结构水/游离水变化。COD 和闭合残差均不能提供未知物种或反应水。披露残差不确定性，不虚构遗漏出口。 | cp_delivery; cp_environment |
| identity_limits | delivered_api | 宽泛原生参考不是动物、器官、干燥状态或等级规格。仅可配合完整猪甲状腺限定及唯一成品物理行使用。其他实际交换需匹配的本地身份与供方；辅助 UUID 缺口不能抹去实测负荷。 | cp_delivery; cp_environment |

## 9. 校验规则

### validate_identity

拒绝不同组织、动物种类、纯化活性物与整份提取物互换，或遗漏原生流限制。明确参考链接必须选择双语中同 UUID 的唯一终端 Product 输出；不能隐藏或改名真实联产品或中间物来绕过该检查。

### validate_ledger

要求正的唯一净交付 Q、完整原始分子及 WIP/成品结转负荷。拒绝库存计入交付 Q、重复再验收、遗漏失败/零产出负荷、重复 A/Q、积分体积再乘时间及重复组成采购。未知值保留为缺口，不能当零。

### validate_boundary

核对全部实际纳入的仓储、包装、搬运、发运、冷链、返工、废物去向及实际基本流介质。要求独立物理/元素平衡及物种/水证据。缺少场址测量或供方匹配时须明确不确定性，并在具体数据集被接受前补齐；本方法不构成科学批准、临床声明或发布许可。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 此声明整份原料药供货的可追溯环境建模 |
| allowed_use | 仅匹配动物/组织、整份提取物、干燥供货状态、路线、地理与净交付门的使用 |
| excluded_use | 临床疗效、给药、激素等效、其他器官/动物、未指定混合物及未经核实的生物技术操作 |
| required_metadata | 全部参考限定、协议负责人、期间/批群、分配、上游数据集、库存及结转负荷核对、供方地理和实际边界 |
| required_quality_disclosure | 原生宽身份限制、辅助 UUID/供方缺口、缺失测量、平衡不确定性及未审范围 |
| update_trigger | 动物/组织、整份提取物组成、状态、路线、参考门、供方/上游分配或库存结转方法变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| bioiberica-thyroid-api | handbook | Bioiberica, Thyroid API; https://www.bioiberica.com/en/products/human-health/thyroid-api | 制造商身份实例：猪甲状腺来源及干燥原料药；欧洲来源声明仅适用于该供方。未提供清单、通用工艺路线或收率。 |
| dailymed-armour-thyroid | official_guidance | DailyMed, Armour Thyroid label, setid 56b41079-60db-4256-9695-202b3a65d13d; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=56b41079-60db-4256-9695-202b3a65d13d | 标签支持实际药用及食用供应链猪的甲状腺来源；片剂辅料不属于散装原料药身份。标签声明为未获批准药品，不是 FDA 疗效批准；不推断剂量、效价、原料药质量分数或工厂表现。 |
| ec-pef-2021 | official_guidance | European Commission C(2021) 9332 final, Annex I, pp. 63–64, 68, 70; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 一般多功能过程及动物/屠宰范围。猪的表格不是甲状腺专属系数；不移植任何数值因子。声称完整 PEF 的研究必须保留其强制默认值并正确分类真实输出；仅本 PCR 不确立完整 PEF 符合性。 |
