---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-chloride-muriate-of-potash
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 热溶结晶制散装粒状肥料级氯化钾

## 1. 范围与适用性

本归因型从摇篮到厂门方法适用于开采的钾石盐—石盐原矿经热溶、固液分离、冷却结晶、脱卤、天然气干燥、机械压实、筛分和散装装车制得的氯化钾肥。交付粒状肥料产品的实测K2O当量质量分数≥60%，并声明水分、KCl含量和杂质。这是以KCl为主的商业矿物产品，不是假定的分析纯化学品或多养分配方。所选参考身份还要求对应中国工厂端情境。来源工艺图支持物理上兼容的单元操作，不证明目标工厂已核实，也不提供默认工艺配方。[ks-thermal-2023; eccc-potash-2017; ks-kalimop-grade]

排除浮选和静电分离路线、溶解开采/盐田卤水路线、化学合成、食品/药用重结晶、供货KCl溶液、未完成粒状加工即出售的粉状/标准产品、K2SO4、KNO3、作为原始肥料出售的光卤石/钾石盐以及NPK混配肥。本路线无成品黏结剂、包覆、防结块或化学抑尘配方；采用水润整粒和仅用水捕尘时予以纳入。使用化学添加剂、不同净化路线或其他污染控制药剂前，须重新评估适用性并各设原子交换。实际现场数据在后续采集，但产品身份、路线和计量基准须可证明。CPC34631还包括其他等级/路线；建议关系为narrower，待独立接受。[un-cpc3-2025; ks-thermal-2023]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-chloride-muriate-of-potash |
| classification_refs | CPC 3.0 34631; narrower |
| covered_products | 所声明热溶路线的未包覆散装粒状肥料级KCl |
| excluded_products | 第1节列明的其他生产路线、等级/状态及复合肥 |
| representative_product | 肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% |
| production_route | 钾石盐—石盐原矿热溶 → 分离 → 冷却结晶 → 脱卤/干燥 → 压实/筛分 → 散装交付 |
| market_state | 粒状固体、散装、中国厂门验收；水分和等级按交付状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应作为钾源的粒状KCl肥料；不宣称田间产量效果 |
| How much | 1 kg 交付状态验收净产品 |
| How well | 实测K2O当量≥60%；声明KCl、水分和颗粒规格 |
| How long or cycle | 一次厂门交付；不包括农业施用及使用持续时间 |
| reference_flow_link | kcl_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% `c8585965-5595-48da-9260-2970ed1905cb` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际生产者/场址及中国厂门情境；开采原料和热溶路线；散装粒状未包覆状态；实测KCl/K2O当量及检测基准；水分和非水溶物/Mg/NaCl杂质；粒径规格；排除包装的验收净质量；计量期间；内部循环和存量变化；能源/治理配置；供方背景基准 |

各数据包须声明上述限定信息。产品身份链接不等于供方清单、纯度测量、过程批准或地域替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为1 kg交付状态验收净粒状产品，不是1 kg K、K2O、干KCl或包装毛质量。Q为同一采集期间的验收净成品质量；排除拒收品、回用品和共产品。 |
| nutrient_basis | kcl_product | Mass | kg | 分别保留产品、干固体、KCl、元素K及K2O当量数量。使用明确基准的实测水分/含量；养分当量为计算量，不是新的实物产品或排放K2O。[ks-kalimop-grade] |
| gas_volume | gas | Volume | m3 | 分别计量厂内供热锅炉和直接接触干燥器的管输气态天然气。参考量为体积/m3。记录温度、绝对压力、湿/干基、组成、压缩因子及供方参考体积定义；只有这些基准对应时才能建立换算和背景兼容性。数据库次级质量系数不是密度。由该燃气产生的内部蒸汽不能再计作外购热量。 |
| energy_basis | electricity | Net calorific value | MJ | 在1–35 kV供电交付点计量电网电力，并保留破碎、泵、真空/冷却、离心机、压实、筛分和除尘的阶段分表。匹配地域、年份、电压及上游交付损失。计量的kWh按3.6 MJ/kWh换算；数据库参考属性为净热值，这不表示电力具有燃料热值。 |
| water_components | water_out; chloride; potassium; sodium | Volume; Mass | m3; kg | 排口总卤水实物体积/质量与水组分、各溶解离子分别保留。使用实测密度和组成，不假定含盐水密度。取水资源输入、外购水、废物外运和直接排水为不同边界角色。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 开采的钾石盐—石盐原矿运抵地面加工单元；上游开采、破碎和运输由经核实的背景数据提供 |
| starting_condition_role | background_dataset |
| product_classification_scope | CPC 3.0 34631; narrower |
| recursive_input_rule | 不得将另一KCl肥料数据集递归用作未处理原矿。实际以精制KCl为原料时，不适用本生产边界；须独立评估后选择仅加工指导。 |
| upstream_dataset_requirement | 实际组成/来源及开采负荷明确的运抵原矿；实际电压/地域/年份的电力；体积基准已核实的管输燃气；供水；实际外购补盐；残渣管理及适用运输。缺失上游负荷须披露为不完整，不作零值。 |
| disclosure | 披露外包开采/运输及公用工程、厂内外废物管理、存量变化、关闭/后期维护情景和排除事项。不得以门到门标签掩盖实物开采阶段缺漏。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | hot_leach_kcl | 纳入产热/热回收、母液循环、结晶真空/冷却、脱卤、干燥、水润整粒、压实、筛分、储存、装车及实际排放/废物治理。成品阶段交接保留在一个集成单元内；交接两端同量，并核对检测基准/存量变化。 | ks-thermal-2023; eccc-potash-2017 |
| boundary_waste | hot_leach_kcl | 覆盖实际含盐尾渣、澄清污泥、排污液、收集粉尘、污染径流及接收方处理。区分厂内中间流和厂外交换。不得断言尾渣溶解及关闭/后期维护无害；长期释放须保留可归属情景、时限和不确定性。 | eu-mwei-2018 |
| boundary_downstream | hot_leach_kcl | 本散装参考不包括田间施用、作物产量、避免的肥料替代、厂门后用户运输及成品包装。披露资本/维修排除项及其重要性；实际材料消耗或释放不能悄然删除。 | un-cpc3-2025 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hot_leach_kcl | 集成热溶粒状KCl生产 | required | 第1–3节的声明路线和验收产品身份 | foreground | kcl_product; 1 kg |

分别保留原矿接收/破碎、溶浸及热态分离、冷却结晶/循环、脱卤/干燥、压实/水润整粒/筛分和装车/废物治理的阶段记录。内部晶体、细粉和母液不得变成额外的成品输出行。以下清单逐一描述实物流；条件行仅在其明确条件成立时纳入。筛查行不要求正排放。实际额外化学品、燃料、运输、回收矿物及污染物须各增设一个具体身份的行；无依据截断或匿名组合集合交换视为不完整。

### 过程：集成热溶粒状KCl生产（`hot_leach_kcl`）

#### 输入

##### 产品流

###### 热溶用钾石盐—石盐原矿 (`ore`)

称量接收的钾石盐—石盐原矿，取样测定KCl、NaCl、水、非水溶物和含镁杂质。声明开采来源、破碎状态及运抵厂界的上游清单；精制氯化钾肥不能代替原矿。

- 选定流：热溶用钾石盐—石盐原矿
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_mineral记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_mineral
- 来源：ks-thermal-2023; eu-mwei-2018

###### 交流电 (`electricity`)

在1–35 kV供电交付点计量电网电力，并保留破碎、泵、真空/冷却、离心机、压实、筛分和除尘的阶段分表。匹配地域、年份、电压及上游交付损失。计量的kWh按3.6 MJ/kWh换算；数据库参考属性为净热值，这不表示电力具有燃料热值。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
参考单位组： `93a60a57-a3c8-11da-a746-0800200c9a66`.

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按cp_energy记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 水，工艺 (`water`)

分阶段记录热溶、洗涤、水润整粒、冷却补水及仅用水除尘洗涤的外购工艺水质量。内部母液和回收冷凝水属于循环，不重复计为外购水。原矿携带水分在原矿组成账中单列。

- 选定流：水，工艺 `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_water记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 气态天然气 (`gas`)

分别计量厂内供热锅炉和直接接触干燥器的管输气态天然气。参考量为体积/m3。记录温度、绝对压力、湿/干基、组成、压缩因子及供方参考体积定义；只有这些基准对应时才能建立换算和背景兼容性。数据库次级质量系数不是密度。由该燃气产生的内部蒸汽不能再计作外购热量。 所选原件名称为经处理的管输天然气，但CAS 74-82-8对应甲烷；须明确保留该来源身份复核冲突。它不证明纯甲烷，也不证明所计量混合气的组成。仅在实际管输气身份及供方体积/m3基准有记录且兼容时使用该链接，否则保留该输入关联未决。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
参考单位组： `93a60a57-a3c8-12da-a746-0800200c9a66`.

- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按cp_energy记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_energy
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 氯化钠 (`makeup_salt`)

有条件纳入：单独称量用于初始溶浸母液配制或补盐、经核实纯度≥99.5%的外购NaCl。只计算实际外部加入量，并核算期初/期末母液存量。该流不能标识混合石盐尾渣，也不表示必须补盐。

- 选定流：氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_mineral记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_mineral
- 来源：ks-thermal-2023; eu-mwei-2018

#### 输出

##### 产品流

###### 肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% (`kcl_product`)

只设一个最终验收的散装粒状KCl成品输出；Q不包含包装及拒收/回用物料。检测交付状态的K2O当量等级、KCl、水分和杂质。养分计算采用实测结果，不采用身份记录中名义60%情景。离心机、干燥器和压实机的交接计量保留在同一前景单元内。

- 选定流：肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% `c8585965-5595-48da-9260-2970ed1905cb`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_product
- 来源：ks-thermal-2023; eccc-potash-2017; ks-kalimop-grade

###### 回收富石盐矿物盐 (`halite_product`)

有条件纳入：一种按真实买方规格出售的回收富石盐产品；称量实际混合物，并报告NaCl/KCl/镁盐/非水溶物组分、水分和买方规格。不能默认其为纯NaCl，也不能自动认作废物。同一质量不得同时出现在尾渣中。其他回收矿物产品须另设有具体身份的行。

- 选定流：回收富石盐矿物盐
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_mineral记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_mineral
- 来源：ks-thermal-2023; eu-mwei-2018

##### 废物流

###### 富NaCl固态热溶尾渣 (`tailings`)

称量一种送往明确废物管理单元的富NaCl固态热溶尾渣。测定水分及残余KCl、NaCl、镁盐和非水溶物。核对接收方的含盐废物接收条件和管理路线；不得以氯化钠化学品或无关废物代替。厂内管理保留在集成单元内，跟踪其物料存量及含盐释放。

- 选定流：富NaCl固态热溶尾渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_residue记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_residue
- 来源：eu-mwei-2018; ks-thermal-2023

###### 非水溶矿物澄清污泥 (`sludge`)

非水溶矿物澄清污泥与粗颗粒盐尾渣分别称量；取样确定实际黏土/矿物组成、夹带卤水和水分。记录脱水及处理去向；该物不是生物污泥。

- 选定流：非水溶矿物澄清污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_residue记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_residue
- 来源：eu-mwei-2018; ks-thermal-2023

###### 废含盐母液排污液 (`purge`)

有条件纳入：计量一种送往厂外处理的废含盐母液，记录质量、密度、水及每种主要盐的浓度和接收方。厂内排污处理不能同时算为外运废物和直接淡水排放。返回母液属于内部循环；其他行业废水及纯水都不能标识该废液。

- 选定流：废含盐母液排污液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_purge记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_purge
- 来源：eu-mwei-2018; ks-thermal-2023

###### 送往处置的含氯化钾收集粉尘 (`dust_waste`)

有条件纳入：称量实际送往处置的含KCl收集粉尘，并检测水分和污染状态。返回成品或热溶系统的粉尘为内部回收，不是本废物输出，也不是空气排放。矿物污泥与收集干粉尘分别记录。

- 选定流：送往处置的含氯化钾收集粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_residue记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_residue
- 来源：eccc-potash-2017

##### 基本流

###### 二氧化碳（化石源） (`co2`)

记录厂内天然气燃烧产生的化石CO2，并以实测CO、CH4及其他实际含碳物种核对燃料碳账。不得套用锅炉默认碳转化比例，也不能将矿物KCl当作碳输入。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 一氧化碳（化石源） (`co`)

测量适用燃气燃烧器的化石CO；保留CO质量、采样方法、排气流量、干/湿条件和运行时段。不得在实物排放账中将其换作CO2质量。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 甲烷 (化石源) (`ch4`)

分别测量燃烧器未燃化石甲烷及实际厂内燃气系统泄漏，再无重叠汇总。不得采用生物源或延迟排放校正流。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 一氧化二氮 (`n2o`)

采集燃烧N2O排放，或有技术依据、注明不确定性的物种特定估计。N2O与NO、NO2分开；不适用含氮肥料施用排放因子。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 一氧化氮 (`no`)

按物种分辨的测量报告实际NO质量。以NO2当量报告的总NOx不能证明该数量；须有物种划分和明确换算，否则保留数量未决。不得再将总NOx与NO/NO2相加。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 二氧化氮 (`no2`)

按与NO相同的采样和排气基准报告实际NO2质量。保留独立物种实物量和经核实的表征基准；NOx不包括N2O。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 二氧化硫 (`so2`)

按实测燃气硫/加臭剂及适用烟气记录量化SO2；低含硫量不证明零排放。不得以泛化硫氧化物总量代替。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 氯化氢 (`hcl`)

盐干燥器实际HCl的条件筛查行：Autazes生产者报告描述了其特定干燥器内MgCl2杂质分解；本稿仅据此筛查机制，不采用其配方或排放因子。使用正排放量前，须明确杂质化学、排气证据及治理配置。不因成品名为KCl而假定HCl生成比例，天然气锅炉因子也不能描述该盐物料特定释放。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：brazil-potash-dryer-case

###### 甲醛 (`formaldehyde`)

燃烧物种特定筛查：适用时量化甲醛，保留检出限及方法证据。VOC总量不能代替本行。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 苯 (`benzene`)

燃烧物种特定筛查：适用时量化苯，不得沿用甲醛或VOC总量。其他实际VOC物种须各设原子行。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-ap42-gas; eu-lvic-aaf-2007

###### 颗粒物 (PM2.5) (`pm25`)

测量干燥、压实、筛分、储存、装车和燃烧经实际治理设施后离开厂界的PM2.5。包括无组织源；说明湿式除尘水滴及可凝结颗粒物的测量定义。收集粉尘不是外排粉尘。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：eccc-potash-2017

###### 颗粒物 (PM2.5 - PM10) (`pm10`)

只报告PM2.5–PM10粒径区间。同一兼容方法提供累计PM10和PM2.5时，按相减得到该区间，报告不确定性并核对非负性；否则不得虚构粒径划分。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：eccc-potash-2017

###### 颗粒物（> PM10） (`pm_over10`)

只报告大于PM10的颗粒；仅当采样定义及覆盖一致时，才能以总颗粒物减PM10求得。不得再将累计总颗粒物或PM10与三个不重叠区间相加。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：eccc-potash-2017

###### 水蒸气 (`water_air`)

确定蒸发、干燥和冷却实际外排的水蒸气，在水账中区分回收冷凝水与燃烧生成水。记录水的质量，不是湿排气体积。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 水 (`water_out`)

有条件纳入：厂内管理后直接排入淡水的液态水组分。记录实际废水体积、密度和水分数，并用有依据的水密度将水组分质量换为参考体积。总卤水体积不自动等于纯水体积。该基本交换不包括外运废水及内部循环。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
参考单位组： `93a60a57-a3c8-12da-a746-0800200c9a66`.

- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按cp_water记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 氯化物 (`chloride`)

有条件纳入：排入淡水的氯离子质量，按最终排口的排水体积及代表性氯离子分析确定，包括可归属的含盐径流。该物不是单质氯或HCl。

- 选定流：氯化物 `08a91e70-3ddc-11dd-9508-0050c2490048`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_water记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 钾离子 (`potassium`)

有条件纳入：按同一排口基准记录直接排入淡水的钾离子质量；使用实测离子浓度，不用肥料K2O等级。将残余钾损失纳入矿物账。

- 选定流：钾离子 `17f0762e-681b-4f6f-8693-58b95f6779a7`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_water记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

###### 钠离子 (`sodium`)

有条件纳入：按实测浓度及排口体积记录直接排入淡水的钠离子质量。不得采用钠资源开采流，也不能将整份NaCl质量再加到同一离子排放清单中。

- 选定流：钠离子 `6a3f413e-8aab-4c58-93b0-1f51c9714adb`
参考单位组： `93a60a57-a4c8-11da-a746-0800200c9a66`.

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_water记录期间实际可归属交换量；除以同期间以kg计的验收成品质量Q。保留该流声明的分子单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：eu-lvic-aaf-2007; eccc-potash-2017; eu-mwei-2018

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | hot_leach_kcl | 本归因清单先分别采集KCl专属加工负荷及物理可分离盐回收负荷。有因果证据时才能虚拟细分。只对剩余不可分离环境负荷分配，先采用决定性的物理因果关系；若无法建立关系，采用分离点、匹配期间且有记录的市场价值，并做敏感性分析。不提供通用质量份额或售价。 | eu-ilcd-2010 |
| allocation_physical_ledger | hot_leach_kcl | 在未分配的实物质量/水/K/Na/Cl/碳账中保留实际原矿、成品、回收盐、废物及排放。分配份额用于环境负荷账，不得机械缩减共产品实物输出。分别报告实物账及分配账；回收盐不默认获得避免生产信用。废物处置按一致原则归属于其来源过程。 | eu-ilcd-2010; eu-mwei-2018 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | hot_leach_kcl | kcl_product | 成品验收账 | 批次；验收净质量Q；粒径；交付水分；KCl；K2O当量；NaCl；Mg；非水溶物；检测基准；场址；日期；失败/零产出及返工/退货关联；成品和在制品期初/期末存量及结转负荷 | 经校准的净重称量及代表性混合样/可追溯实验室检测；Q排除包装、拒收批次及内部循环，其实际生产负荷仍保留在匹配生产池。按normalize_period逐批核对验收净产量、存量和退货；退回/再次验收的同一净批次只确认一次，内部返工不增加产出；最终参考输出每 1 kg 参考流 | kg | 每批 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |
| cp_mineral | hot_leach_kcl | ore; makeup_salt; halite_product | 称重及矿物检测 | 流；批次；进/出质量；水分；KCl/NaCl/Mg盐/非水溶物；来源/接收方；期初/期末存量；补盐纯度 | 经校准秤、代表性固/液采样及检测，保留标准、实验室方法和不确定性；核对干组分及夹带液体; 保留期间原始流总量及期初/期末存量和组成记录，交normalize_period处理；采集时不作除法 | kg | 每批及存量核对 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |
| cp_energy | hot_leach_kcl | electricity; gas | 计量及供方记录 | 仪表；阶段；kWh；燃气m3；温度；绝对压力；湿/干基；Z；组成；低/高热值基准；供方体积定义；蒸汽供/回状态 | 经校准交付仪表及阶段分表；账单和供方定义；热量审计包括锅炉损失、冷凝水返回、热回收及实际蒸汽焓; 保留可归属的期间原始交付能量/体积总量，交normalize_period处理；采集时不作除法 | MJ; m3 | 连续记录，每核算期核对 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |
| cp_residue | hot_leach_kcl | tailings; sludge; dust_waste | 残渣存量及处置记录 | 流；实际湿质量；干组分；夹带液；污染；内部回用；外运/厂内存量；接收方；含盐接收条件；设施长期情景 | 独立经校准称量、代表性水分/组成检测及废物接收方文件；核对收集量与回收/拒收粉尘; 保留期间实际外向流原始总量，交normalize_period处理；厂内堆存存量另行保留，采集时不作除法 | kg | 每次处置或存量事件 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |
| cp_purge | hot_leach_kcl | purge | 外运液废记录 | 排污液质量/体积；密度；水/盐分数；去向；循环量；期初/期末母液存量 | 计量/称量外运液废并检测组成；厂内处理和循环另行核对; 保留期间外运排污液原始质量总量，交normalize_period处理；采集时不作除法 | kg | 每次外运及期间平衡 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |
| cp_air | hot_leach_kcl | co2; co; ch4; n2o; no; no2; so2; hcl; formaldehyde; benzene; pm25; pm10; pm_over10; water_air | 物种及粉尘计量 | 来源/阶段；物种；粒径区间；烟囱/无组织流量；浓度；温度/压力；湿/干/O2校正基准；小时数；检出限；治理状态；采样定义；可凝结组分 | 有代表性的排口烟气/物种检测，匹配排气体积和运行覆盖；有记录的无组织评估；水滴干扰及可过滤/可凝结定义；适用时核对碳/水账; 保留期间实际排放的各物种原始质量总量，交normalize_period处理；粒径区间不重叠，采集时不作除法 | kg | 代表性运行模式及期间小时数 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |
| cp_water | hot_leach_kcl | water; water_out; chloride; potassium; sodium | 水及排口平衡 | 外购水质量；循环/冷凝水；废水体积/密度/水分数；温度；Cl-/K+/Na+浓度；淡水受纳体；降雨/径流；存量；关闭情景 | 经校准仪表、代表性流量加权排口样及离子特定分析；注明密度/温度及不确定性；监测含盐残渣设施及可归属长期释放; 保留期间各实际水/离子原始总量及原始实物废水记录，交normalize_period处理；采集时不作除法，外运排污液不得再计为直接排放 | kg; m3 | 连续流量及代表性采样；存量期间 | 一个明确代表性期间，包括启停及存量变化 | 同场址及产品范围；透明归属共用单元 | 每 1 kg 参考流 | 校准；检测；覆盖；核对；检出限；可追溯记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 各非参考交换的X为以声明分子单位计的期间原始总量，仅在此按x = X / Q归一一次；协议、换算及负荷计算不得先除以Q。采用同场址、同路线及同产品状态的完整匹配生产池，包括启停、失败及零产出运行、拒收和内部返工，并保留其实际物料、能源、排放及废物负荷。核对原料、母液、在制品及成品的期初/期末存量及其结转生产负荷；匹配领用、接收与退货，避免遗漏或重复既往及结转负荷。Q为该池经存量和退货核对后可归属的唯一正值交付状态验收净成品质量；退回并再次验收的同一净批次只确认一次，内部返工不是新增产出。Q <= 0或无法证明生产池/负荷匹配时，保留原始记录，归一结果不可用。最终参考输出为1 kg；保留未分配实物账，负荷分配仅用于独立环境负荷账。 | X; Q; cp_product | 每 1 kg 参考流的交换 | eu-lvic-aaf-2007 |
| electricity_conversion | electricity | E_MJ = 3.6 * E_kWh | E_kWh; cp_energy | E_MJ | eu-lvic-aaf-2007 |
| assay_conversion | kcl_product | m_dry = m_product * (1 - w)；仅干基检测可用m_KCl = m_dry * f_KCl_dry。KCl中元素K = m_KCl * molar_mass(K) / molar_mass(KCl)；K2O当量 = m_K * molar_mass(K2O) / (2 * molar_mass(K))。存在其他含钾杂质时采用实际声明的检测结果；不得用名义等级代替。 | m_product; w; f_KCl_dry; cp_product | m_dry; m_KCl; m_K; K2O-equivalent | ks-kalimop-grade |
| ion_load | chloride; potassium; sodium | 每种离子的排放质量 = 代表性浓度（每m3实际废水的kg）乘匹配排水体积（m3）后汇总；溶解态/总量定义须兼容。核对降雨、径流及存量。 | concentration; discharge volume; cp_water | ion mass | eu-mwei-2018 |
| water_volume | water_out | 水组分质量 = 废水体积 * 实测废水密度 * 水质量分数；水参考体积 = 水组分质量 / 声明温度下有依据的水密度。保留原始总废水计量。 | effluent volume; effluent density; water fraction; water density; cp_water | water volume | eu-mwei-2018 |
| mineral_balance | hot_leach_kcl | K、Na和Cl逐一核算：实测输入组分质量 + 期初存量 = 成品 + 回收盐 + 残渣 + 直接释放 + 期末存量，采用实际杂质物种划分并报告计量不确定性。在环境负荷分配前保留质量/水平衡。 | cp_mineral; cp_product; cp_residue; cp_purge; cp_air; cp_water | component reconciliation | eu-mwei-2018; eu-lvic-aaf-2007 |
| allocation_account | hot_leach_kcl | 归属KCl负荷 = 实测KCl专属负荷 + 有依据的KCl份额 * 不可分离共用负荷；份额总和为1。共产品实物数量保留实测值；负荷除以Q不缩减共产品质量。 | specific/shared burden; causal or price records; Q | allocated KCl burden | eu-ilcd-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核对物理名称/CAS/路线/状态、组分混合物及去向；UUID身份与供方数量基准分别检查。未决链接须有具体物理流名、检测及后续解析；不得以方便取得的相邻产品替代原矿或废物。 | cp_mineral; cp_residue; cp_purge |
| dq_scope | hot_leach_kcl | 保留实际SKU/场址/期间和运行模式、期初/期末母液存量及阶段分表。缺失计量、无依据排放划分或不匹配供方数据集为未决，不是零值或完整数据集。 | cp_product; cp_energy |
| dq_air | cp_air | 区分实际物种、不重叠粒径段及采样/可凝结定义；未检出须有检出限和不确定性处理。只有物理/计量依据明确时才能排除筛查来源。 | eccc-potash-2017; epa-ap42-gas |
| dq_source_limits | hot_leach_kcl | K+S工艺图及加拿大做法只支持物理方法；不将其温度、行业排放比例、纯度、收率或能耗移植为通用值。采用LVIC-AAF共性审计，不移植合成氨/NPK配方。AP42锅炉数据须核实实际燃烧器适用性，不能默认套入直接盐干燥器。 | ks-thermal-2023; eccc-potash-2017; eu-lvic-aaf-2007; epa-ap42-gas |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_product | kcl_product | 要求恰好一个与参考相连的验收输出及第3节全部限定信息、声明等级基准下实测≥60%的K2O当量、净质量、水分及粒状散装身份；不得自动选择其他物理路线/状态。 | ks-kalimop-grade; un-cpc3-2025 |
| validate_balance | hot_leach_kcl | 检查期间/Q一致、阶段交接同量、K/Na/Cl/水/燃料碳核对、存量变化、循环/蒸汽/废水/颗粒输出无重复及实物与分配账分开。超出声明计量不确定性的未解释残差须报告发现，不能用填平流掩盖。 | eu-mwei-2018; eu-lvic-aaf-2007; eu-ilcd-2010 |
| validate_completeness | all inventory rows | 每个使用的交换须有原始采集、实际供方/接收方兼容性及条件适用性证据。UUID未决、天然气体积约定、只有总NOx、缺失粒径划分、未知卤水组成或省略长期残渣负荷均保留为明确不完整覆盖。来源因子或身份声明不能使其成为通过的现场数据集。 | eccc-potash-2017; eu-mwei-2018; epa-ap42-gas |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 数据完整性审查后，在本路线/等级/场址基准内的粒状KCl供应清单 |
| excluded_use | 其他矿物/化学品、农业施用影响因子、自动覆盖整个分类、食品/药用纯度或未经核实供方替代 |
| required_metadata | 参考限定信息；边界及期间；实测检测/存量；分配决定；来源范围；供方及接收方记录；实际单位/换算 |
| required_quality_disclosure | 未决身份/背景；计量覆盖及检出限；实物平衡残差；长期情景；分配敏感性和排除项 |
| update_trigger | 原料矿物组成/等级、净化或添加剂路线、产品等级/状态、公用工程基准、残渣去向、监测或供方变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p165; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类身份及相邻K2SO4/光卤石边界 |
| ks-thermal-2023 | handbook | K+S Compendium July 2023, p48 thermal dissolution diagram; https://www.kpluss.com/.downloads/ir/2023/kpluss-compendium-july-2023.pdf | KCl热态分离及母液循环；不采用图示运行默认值 |
| ks-kalimop-grade | handbook | K+S KALIMOP GRAN. product information, web snapshot 2026-10-14; https://www.kpluss.com/en-us/our-business-products/agriculture/products/en-kalimop-gran/ | 粒状KCl及60% K2O当量等级存在；不证明目标SKU检测或制造场址 |
| eccc-potash-2017 | official_guidance | ECCC Code of Practice for the Management of PM2.5 Emissions in the Potash Sector in Canada, September 2017, Sections 2.1.2.6–2.1.2.9 and 3–4, PDF pp15,19,24; https://www.canada.ca/content/dam/eccc/documents/pdf/cepa/20250707-eng.pdf | 干燥/压实/水润整粒及粉尘监测/治理限定；加拿大物理示例，不移植排放比例 |
| eu-mwei-2018 | official_guidance | JRC109657, MWEI BREF 2018, Sections 1.3.1.2, 2.1.1.8–2.1.1.9, 4.2.1.3.4.1, PDF pp60,81,278; DOI10.2760/35297; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC109657/jrc109657_mwei_bref_-_for_pubsy_online.pdf | 含盐钾矿残渣溶解、采掘废物质量/水平衡及后期维护；无通用残渣组成 |
| eu-lvic-aaf-2007 | official_guidance | EC LVIC-AAF BREF August 2007, scope and Sections 1.4.8/1.5.1, PDF pp27,51,61; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf | 仅共性能源审计、蒸汽/水/CO2核算；排除合成氨、酸及NPK特定方法 |
| epa-ap42-gas | official_guidance | US EPA AP42 Section 1.4 Natural Gas Combustion, retained edition with page footer 10/26 (October 2026), pp1.4-2–1.4-3; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | 燃气锅炉/炉排放物种及技术/计量范围；无通用因子或干燥器配方 |
| eu-ilcd-2010 | official_guidance | ILCD Handbook General guide for LCA Detailed guidance, March 2010, Sections 7.9.2–7.9.3, printed pp255–257/PDF pp275–277; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 有决策情境限定的归因型细分、物理因果及市场价值后备方法 |
| brazil-potash-dryer-case | handbook | Brazil Potash Autazes Technical Report Summary, 19 April 2024, rotary dryer and scrubber sections, printed pp138 and 144; https://ir.brazilpotash.com/financials/sec-filings/content/0001193125-24-102820/d818742daddexhb.htm | MgCl2杂质相关HCl的项目案例筛查；不转用其配方、处理药剂、产能或排放因子 |
