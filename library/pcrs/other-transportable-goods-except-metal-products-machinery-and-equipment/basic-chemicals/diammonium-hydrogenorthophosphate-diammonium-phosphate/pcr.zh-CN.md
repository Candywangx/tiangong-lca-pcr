---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.diammonium-hydrogenorthophosphate-diammonium-phosphate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 颗粒肥料级磷酸二铵

## 1. 范围与适用性

本方法草稿适用于湿法磷酸氨化制得颗粒肥料级二铵，经造粒、干燥、冷却、筛分、调理并在厂门交付。仅在真实操作有记录时覆盖预中和器、管式反应器及组合配置。前景单元不包含磷酸或氨的制造；其生产和运抵须链接上游数据集。DAP专属依据为LVIC-AAF第7.2.8节（印刷页288）。

排除以一铵为声明成品、聚磷酸铵溶液、高纯试剂晶体、氨化过磷酸钙、硝酸磷肥转化、PK/硝酸钾及干混NPK。商业二铵可能含硫酸盐和实际杂质，养分等级不是纯物种质量分数。生产者规格只用于说明产品识别，不提供通用配方、水分、收率或能耗。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.diammonium-hydrogenorthophosphate-diammonium-phosphate |
| classification_refs | CPC 3.0 34642; narrower |
| covered_products | 声明真实含量和交付状态的颗粒肥料级二铵 |
| excluded_products | 一铵；其他NP配方；PK；硝酸钾；NPK混肥；液态聚磷酸铵；高纯二铵 |
| representative_product | 颗粒肥料级磷酸二铵 |
| production_route | 湿法磷酸+无水氨；反应与造粒回路 |
| market_state | 验收颗粒固体，厂门散装或实际包装交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明的二铵氮磷肥料材料 |
| How much | 1 千克验收肥料净产品 |
| How well | 声明批次总/铵态N、有效/水溶及总P/P2O5、水分、二铵/硫酸盐组成、粒度及合格测试方法；不声称作物增产等效 |
| How long or cycle | 一个声明生产批期或代表性报告期，至厂门验收 |
| reference_flow_link | dap_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 磷酸氢二铵（磷酸氢二铵） `522a424b-bc31-44d1-93c6-47da1f41b0f2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU及生产者; CAS/物种与组成; 养分检测方法和报告基准; 交付湿基净质量; 水分; 磷酸路线和浓度; 氨状态; 造粒配置; 实际包衣组分; 包装; 地区与时期; 背景供方数量定义 |

具体数据包必须声明全部限定信息。肥料净质量、干固体、养分当量和纯二铵含量分别记录。

保留同产品、同状态、同路线完整报告期的原始总量，包括开停、失败或零产出批次、返工、不合格品和在制品（WIP）。Q定义为该期最终验收界面仅计一次的二铵验收净产量。以发货、成品库存变化和单独识别的外购成品核对Q；已经计入验收的数量不能再次加库存修正。明确记录WIP变化及其携带实物量和负荷。有据负荷归属后各期间交换总量仅除以正Q一次，不能只平均成功批次或再次归一化已经归一化的记录。Q为零时保留完整物理总池和负荷总池，标记归一化数据集不可用，不编造分母或零清单。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | dap_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用1千克验收产品净质量，含实际产品水和配方组分，排除包装。全部清单采用同一分母及cp_product。 |
| nutrient_basis | phosphoric_acid; dap_product | Mass | kg | 区分湿酸液、活性H3PO4、实际P及P2O5当量。使用实测含量和声明的摩尔质量换算。有效磷不是总P，不能用于闭合元素P平衡。不能将N+P2O5当总产品质量。 |
| utility_basis | electricity; natural_gas; imported_steam | 声明的原生属性 | MJ；m3；kg，分别计量 | 电力采用原生Net calorific value/MJ属性，透明换算kWh。气体体积不是质量；表计须与供方参考条件一致。蒸汽质量与净交付焓是不同量，分别记录，不假定热量因子。 |
| emission_basis | 全部基本输出 | Mass | kg | 保留物种、来源、介质、监测标况及干湿基准。仅在可解释物种分配时换算F、N或NO2当量，否则保留未决。采用互斥PM粒级。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 新鲜湿法磷酸、氨及其他实际投入送达本前景单元 |
| starting_condition_role | foreground collection boundary |
| product_classification_scope | CPC 3.0 34642; granular fertilizer-grade subset |
| recursive_input_rule | 外购二铵为单独计量的投入并链接上游生产；内部筛下/筛上回料和回收液属于循环，不是无负荷外购二铵或额外参考产品 |
| upstream_dataset_requirement | 各外部产品投入须有相容生产和运抵背景；一体化场址的磷酸/氨供应亦须纳入且不重复 |
| disclosure | 披露起始物料、一体化关系、运输、库存、共用公用工程、废气/废水处理、包装及设备覆盖 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_operations | 纳入接收、储存、中和、造粒、干燥、冷却、筛分/破碎、调理、收集/洗涤、实际排污管理和厂门交付。单元聚合物理相连各段，保留分段表计和回料台账。 | eu-lvic-aaf-2007; epa-ammonium-phosphate-1993 |
| boundary_no_free_inputs | 接收是前景采集边界，不是免费上游截断。外部处理及一体化公用工程须链接负荷。各实际燃料、助剂、直接取水及环境排放须另列原子行。排除资本设备须论证披露；纳入设备时分别保留实际实物质量和有记录的使用期/寿命产量当量。 | ilcd-attributional-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| dap_unit | 颗粒肥料级磷酸二铵 | required | 所选磷酸氨路线及真实场址设备 | foreground | 1 千克验收二铵净产品 |

### 过程：二铵反应、后处理和治理（`dap_unit`）

#### 输入

##### 产品流

###### 磷酸 (`phosphoric_acid`)

计量跨单元边界的新鲜酸液及水、H3PO4/P2O5基准、杂质和氟。该UUID仅在实物符合湿法Central Prayon弱酸身份时采用。分别保留湿酸液质量和活性磷酸质量；链接前确认供方背景参考量表示哪一个。内部洗涤回酸不计为新酸。

- 选定流: 磷酸 `9102d985-3980-4e5d-a870-f5164ff2e977`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_feed`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_feed`
- 来源: `eu-lvic-aaf-2007`

###### 无水氨 (`anhydrous_ammonia`)

计量无水NH3净新鲜投料，核对罐存变化和纯度；不得替换为氨水总质量。物理台账分别记录各段加氨，不能把合计投料重复计入。

- 选定流: 无水氨 `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_feed`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_feed`
- 来源: `eu-lvic-aaf-2007`

###### 硫酸 (`sulfuric_acid`)

仅在产品指标调整或酸洗涤实际使用时纳入。该身份要求供货硫酸浓度93–98%；实测湿质量和含量，不默认93%。生成并留在二铵中的硫酸铵须计入交付肥料及N/S平衡，不另作共产品。

- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_feed`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_feed`
- 来源: `epa-ammonium-phosphate-1993`; `mosaic-dap-sds-2020`

###### 工艺用水 (`makeup_water`)

计量洗涤、稀释和清洗用外来经处理补水。记录来源、处理方式及体积换算所用实测密度。水账分别保留内部池水循环和酸带入水；循环量不算新水。直接取水须另列基本资源流，不能使用该产品UUID。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_feed`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_feed`
- 来源: `eu-lvic-aaf-2007`

###### 交流电 (`electricity`)

记录泵、造粒机、干燥机传动、风机、筛分、破碎、冷却、洗涤、储存和包装电表量；按1 kWh = 3.6 MJ换算。该UUID仅适用中国（CN）1–35 kV电网平均供电到用户；须对应真实电压、地区、时期及损耗。其他供电须另核身份，不默认电网结构。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value / MJ
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_utilities`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utilities`
- 来源: `eu-lvic-aaf-2007`

###### 气态天然气 (`natural_gas`)

纳入干燥或可归属厂内供热的实际燃气及实测泄漏。记录温度、压力、干湿定义、组成、压缩因子和表计修正，并显式换算为供方m3定义。次级Mass的meanValue 1不是密度。记录燃气与燃烧输出，不再购买同一厂内产生的热量。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Volume / m3
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_utilities`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utilities`
- 来源: `epa-gas-combustion`

###### 外购工艺蒸汽 (`imported_steam`)

若蒸汽跨边界，计量送汽质量、压力、温度、干度及回凝水质量/状态；由焓差另报净供热。压力与供方参考基准（蒸汽质量或净交付热）一致前不选UUID；仅有热值属性不能证明可用交付焓。

- 选定流: 外购工艺蒸汽
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_utilities`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utilities`
- 来源: `epa-ammonium-phosphate-1993`

###### 矿物油 (`mineral_oil`)

本交换仅用于单独供货的矿物油，或有记录厂内配制的真实投料组分；称量耗量并核对CAS、牌号和供方。它不代表整份外购防结块制剂。外购制剂使用coating_preparation记录完整供货质量和身份；组分数量支持物理台账，不能再次购买其上游组分。其他单独供货的厂内配方投料须另列原子行。

- 选定流: 矿物油 `e4d87634-a041-48d6-b071-da57551c8ab5`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_feed`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_feed`
- 来源: `epa-ammonium-phosphate-1993`

###### 矿物油基肥料防结块制剂 (`coating_preparation`)

外购矿物油基抑尘或防结块制剂时，记录完整供货制剂及真实SKU、供方、湿质量、水、活性组分分数和全部载体组分。本行不是纯矿物油组分，未采用UUID。仅对额外单独供货的油使用mineral_oil；不能把制剂组分重复计为采购。各真正不同的外购制剂单列交换，制剂总量与组分/载体平衡保持同报告基准的对应。

- 选定流: 矿物油基肥料防结块制剂
- 流属性/单位: Mass / kg
- 数量规则: 完整报告期耗用的整份供货制剂实测量仅除以正验收净产量Q一次；采用`cp_feed`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_feed`
- 来源: `epa-ammonium-phosphate-1993`

###### 聚丙烯编织肥料袋 (`pp_bag`)

袋装交付时计量实际外袋聚合物质量、容量和袋数；各部件去皮称重，耗用质量除以同一验收肥料净产量。不得移植种子包装数据集、默认25千克袋或默认袋重。散装交付须证明未使用，而非给正默认量。

- 选定流: 聚丙烯编织肥料袋
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_packaging`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging`
- 来源: `epa-ammonium-phosphate-1993`

###### 聚乙烯薄膜 (`pe_liner`)

单独使用PE内衬时计量耗用质量和牌号。保留实物PE薄膜身份，同时披露原始CPC29220分类瑕疵并向供方澄清。内衬不计入肥料净质量；若不可分采购袋已包含内衬，不得再计一次。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_packaging`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging`
- 来源: `epa-ammonium-phosphate-1993`

#### 输出

##### 产品流

###### 颗粒肥料级磷酸二铵 (`dap_product`)

1 千克验收肥料净产品，包括实际水分、硫酸盐和调理组分，排除运输包装。最终验收时对产量仅计一次，并用发货及期初期末成品库存核对；外购成品二铵和返工单独识别。不是1千克纯(NH4)2HPO4、N或P2O5。 所选通用DAP产品身份仅在本稿颗粒肥料子集及整份交付千克基准相容时采用。其英文和中文baseName、英文注释及分类均指向DAP；中文generalComment却写“磷酸二氢铵（磷酸二铵）”，自身不一致。披露此局部翻译债务并请维护者澄清，不能据此采用MAP化学式。原生记录未提供CAS；须核对实际产品物种、含量、组成及背景供方数量基准，不能声称全部源元数据无误。

- 选定流: 磷酸氢二铵（磷酸氢二铵） `522a424b-bc31-44d1-93c6-47da1f41b0f2`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_product`
- 来源: `mosaic-dap-spec-2024`; `mosaic-dap-sds-2020`

##### 废物流

###### 磷铵洗涤排污液 (`scrubber_purge`)

记录离开本单元送往具名处理设施或池的实际排污液，包括水、溶解N/P/F/S和悬浮固体。内部回用只记循环，不记外排废物。计量湿液质量和组分；最终环境排放前须链接处理。电解锰渣洗涤废水身份不适用。

- 选定流: 磷铵洗涤排污液
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_waste`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `epa-ammonium-phosphate-1993`

###### 磷铵洗涤污泥 (`scrubber_sludge`)

记录酸洗涤回路实际移出的污泥及湿质量、干固体、养分/氟和接收方。内部返回的沉降物不作外排。不得把它写为上游磷酸制造石膏，也不能未经来源核对采用通用污水处理身份。

- 选定流: 磷铵洗涤污泥
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_waste`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `epa-ammonium-phosphate-1993`

###### 废弃不合格颗粒磷酸二铵 (`discarded_dap`)

仅记录离开单元的废弃物及含量、处置/处理去向。内部筛下物和破碎筛上物保留为物理回料。可销售等外肥料须另列产品输出并审查分配，不得重标为本废物或悄然加入验收二铵。

- 选定流: 废弃不合格颗粒磷酸二铵
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_waste`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `eu-lvic-aaf-2007`

##### 基本流

###### 氨 (`nh3_air`)

纳入治理后过程NH3及实测储运逸散；区分NH3质量与NH3-N。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

###### 氟化氢 (`hf_air`)

采用分物种HF质量；以F计的总氟不是HF质量，不得同时重复分给HF和SiF4。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

###### 四氟化硅 (`sif4_air`)

采用分物种SiF4质量；只有总氟而无法分物种时保留未决。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 四氟化硅 `fe0acd60-3ddc-11dd-a706-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

###### 颗粒物 (PM2.5) (`pm25_air`)

采用治理后排放及实测无组织排放的空气动力学PM2.5粒级质量。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

###### 颗粒物 (PM2.5 - PM10) (`pmcoarse_air`)

仅采用PM2.5–PM10区间；用相容累积测量求差，不得将PM10与PM2.5相加。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

###### 颗粒物（> PM10） (`pmover10_air`)

采用排出的>PM10颗粒；互斥粒级与总外排粉尘核对，排除收集后回用粉尘。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

###### 二氧化碳（化石源） (`co2_air`)

采用前景燃料/包衣碳氧化产生的化石CO2；闭合碳账前保留未燃碳及实测CO/CH4。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 一氧化碳（化石源） (`co_air`)

采用实际排放的化石CO并保留燃料来源证据，不默认全部燃料碳变成CO2。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 一氧化氮 (`no_air`)

采用NO物种质量，不是未分物种的NO2当量NOx；不默认NO/NO2比例。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 二氧化氮 (`no2_air`)

采用NO2物种质量；实测NOx当量通道另作核对，不重复加载LCI；N2O另列。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 二氧化硫 (`so2_air`)

燃料硫/工况支持时采用实测SO2物种质量；留在硫酸铵中的硫不是空气排放。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 甲烷 (化石源) (`ch4_air`)

记录不完全燃烧和燃气泄漏的实测/建模化石甲烷，并说明适用设备方法；不设正默认因子。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 一氧化二氮 (`n2o_air`)

用适用测量或设备模型核查实际燃烧N2O；不得据此虚构本二铵边界内的硝酸制造。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion`

###### 水蒸气 (`water_air_air`)

过程净蒸发与进气水分、燃料燃烧生成水分别计量；物理水账完整保留，输出符合定义的排放量。反应水生成/消耗及有机干物转化须有独立反应和组成依据；COD或平衡残差不能证明反应水、蒸发量或收率。 将同一生产期实际释放量积分后除以验收净产量。介质为空气、室外未特指；已知子介质时改用核验相符的流。查到身份不等于存在正排放。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 同一报告期可归属实测数量除以验收产品净质量；采用`cp_air`。无默认量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_air`
- 来源: `epa-ammonium-phosphate-1993`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| physical_and_burden_ledgers | 未分配物理账（新鲜投入、循环、产品、废物、排放及库存）与环境负荷归属账分开。各内部链接两端采用同一状态基准和相等数量。分配不得缩小真实产品或废物质量。 | ilcd-attributional-2010 |
| allocation_hierarchy | 归因型数据优先划分生产批期/共用操作。不能划分时说明因果物理归属，其他有据选择须做敏感性分析；不默认养分、质量或经济分配份额。回用不构成共产品抵扣。可售第二等级/外送养分物流须实测输出并单独审查性质与去向后再归属负荷。 | ilcd-attributional-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | dap_unit | 验收肥料净产品 | 校准秤；发货；库存；分析 | 批号；时期；最终验收数量Q；开停；失败与零产出批次；返工；WIP；期初期末库存；净/毛/皮重；水分；总N/P/S/F；养分检测；等外品数量 | 以校准的最终验收称重对每份产品仅计一次，独立核对发货、成品库存、外购成品及WIP。保留含失败/零产出批次和返工的全部期总量；同批取样并区分检测基准。 汇总细则：最终验收Q千克仅计一次；完整期记录仅除以正Q一次得到每 1 kg 参考流；Q=0保留总量而无归一化结果. | kg | 每批 | 一个代表性生产期 | 包含后处理的二铵单元 | 每 1 kg 参考流 | 秤校准；库存核对；分析方法和不确定性 |
| cp_feed | dap_unit | 新鲜投料和包衣 | 表计/称重及供方含量 | row_id；数量；纯度；浓度；干湿状态；酸液水；总N/P/S/F/C；酸来源；包衣配方及整份供货制剂湿质量；组分和载体水分数；供方数量基准；库存 | 采用校准流量计或称重收货，做密度/状态修正及库存核对；分别保留整份溶液账与组分账。 汇总细则：外部耗用质量/验收产品净质量，每 1 kg 参考流. | kg | 每批或连续积分 | 与cp_product同一时期 | 单元外来投入；内部循环另记 | 每 1 kg 参考流 | 供方规格及参考量定义；化验；校准 |
| cp_utilities | dap_unit | 电力、燃气、蒸汽分别计量 | 分表及焓记录 | row_id；工段；表计；kWh；气体m3；压力；温度；干湿；组成；压缩因子；蒸汽kg；进汽/凝水状态；供方基准 | 读取校准表计，仅推导有记录的修正和实测蒸汽焓差。用可审计测量划分共用供应，并保留归属账。 汇总细则：各可归属原生数量/验收产品净质量，每 1 kg 参考流. | MJ; m3; kg separately | 连续积分 | 与cp_product同一时期 | 反应、后处理、治理及可归属公用工程 | 每 1 kg 参考流 | 表计校准；实际供电电压；燃气供方定义；蒸汽表与状态；不假定效率 |
| cp_packaging | dap_unit | 实际包装部件 | 部件去皮称重和使用计数 | row_id；SKU；聚合物；容量；单件质量；耗用件数；损坏/不合格包装；如有复用则记录循环次数 | 称量实际空部件，核对材料用量与件数。实物数量/质量与有据使用循环负荷分别保留。 汇总细则：部件耗用质量/验收肥料净质量，每 1 kg 参考流. | kg | 各SKU和生产批期 | 与cp_product同一时期 | 实际交付配置 | 每 1 kg 参考流 | 秤校准；物料清单；供方证据；不假定袋重或寿命 |
| cp_waste | dap_unit | 外排污液、污泥和废弃二铵分别计量 | 称重、化验和转移记录 | row_id；湿质量；水；干固体；总N/P/S/F/C；接收方；处理；内部回用；库存变化 | 计量各实际跨单元边界流，核对相连处理和接收记录；区分直接环境排放与废物转移。 汇总细则：外送湿质量/验收产品净质量，每 1 kg 参考流. | kg | 每次移出或连续排污 | 与cp_product同一时期 | 单元出口及具名接收接口 | 每 1 kg 参考流 | 过磅单；样品；接收验收；残余养分和水平衡 |
| cp_air | dap_unit | 各物种/粒级分别计量 | 烟道/无组织监测及有记录的设备模型 | row_id；来源；CAS/物种；来源属性；区间；C；气量；时间；T/P；干湿；参比O2；收集；回收；F/N/NOx基准；检出限；不确定性；进气湿度 | 对相容浓度和实际标况气量积分，匹配干湿和参比O2修正。纳入治理后的有组织及无组织释放。未测通道保留未决，不置零。燃烧通道无法由测量确立时，仅采用有记录且适用于设备的模型。 汇总细则：各排放物种质量/验收产品净质量，每 1 kg 参考流. | kg | 代表性工况含启停 | 与cp_product同一时期 | 反应、干燥、冷却、筛分、转运、储存及实际燃烧 | 每 1 kg 参考流 | 监测方法和校准；气量积分；工况覆盖；物种及PM核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalise_period | all inventory rows | 各实际外部交换保留同产品/状态/路线完整期总量，含开停、失败或零产出批次及返工，披露WIP变化。可归属总量仅除以cp_product同一正验收二铵Q千克数一次。未分配实物总量与负荷份额分别保留。Q=0无归一化结果。参考输出为1千克。 保留同产品、同状态、同路线完整报告期的原始总量，包括开停、失败或零产出批次、返工、不合格品和在制品（WIP）。Q定义为该期最终验收界面仅计一次的二铵验收净产量。以发货、成品库存变化和单独识别的外购成品核对Q；已经计入验收的数量不能再次加库存修正。明确记录WIP变化及其携带实物量和负荷。有据负荷归属后各期间交换总量仅除以正Q一次，不能只平均成功批次或再次归一化已经归一化的记录。Q为零时保留完整物理总池和负荷总池，标记归一化数据集不可用，不编造分母或零清单。 | cp_product; cp_feed; cp_utilities; cp_packaging; cp_waste; cp_air | 每 1 kg 参考流的原生单位数量 | ilcd-attributional-2010 |
| material_reconciliation | dap_unit | 水和各元素N/P/S/F/C分别以投入减外部输出减库存增加计算并解释残差。完整单元内循环相互抵消，但工段收发记录仍须等量。总P采用总磷检测，不用有效磷。燃料碳、燃烧生成水和进气水分分别核算。不得调收率或删排放来闭合。 | cp_feed; cp_product; cp_utilities; cp_waste; cp_air | 分配前的期物理残差和不确定性 | eu-lvic-aaf-2007 |
| speciation_reconciliation | all elementary outputs | 以声明的摩尔质量和实际物种分配对应质量分数，核对F、NH3-N及NOx当量。浓度C为kg/m3且V为已积分的相容气体体积m3时，排放质量为C乘V求和，不再乘时间。仅体积流率m3/时间才结合时间积分。浓度与气量测量条件须匹配；仅当采样基准和可凝结覆盖一致时，互斥区间之和对应总PM。不支持的分配保持未决。 | cp_air | 已核排放物种千克及未决通道 | epa-ammonium-phosphate-1993; epa-gas-combustion |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_provider | all inventory rows | 联合核对名称、CAS、注释、路线、介质、参考属性及供方数量定义。身份UUID不证明供方地区、技术或浓度兼容。普通辅料/废物身份缺失须披露；参考产品不确定阻塞可用方法。 | cp_feed; cp_product; cp_utilities |
| coverage_and_uncertainty | dap_unit | 保留完整时期及异常工况覆盖，解释检出限、缺失物种分配、库存差和分配不确定性；本方法不给通用配方或过程数量默认值。历史EPA受控工厂因子及BREF案例不是可移植现场值。 | cp_air; cp_product; cp_waste |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_reference | 接受数据包前要求一个验收二铵净产品参考、全部限定信息、相容原生属性和已核实物相容且披露元数据债务的产品身份。高纯晶体或稀释试剂记录不能证明肥料级产品身份。 | mosaic-dap-spec-2024; mosaic-dap-sds-2020 |
| validate_physical_ledgers | 检查未分配水和元素平衡、回料等量、各外送废物/产品去向、全部已识别空气通道及独立负荷分配。不得重复计收集粉尘、洗涤循环、嵌套PM、N/P当量或内部供热。 | eu-lvic-aaf-2007; ilcd-attributional-2010 |
| validate_pending | 不得将测量不可用、物种分配不支持、供方基准未核或基础设施失败转成零交换或通过。具体数据集须解决适用测量和参考身份缺口。 | epa-ammonium-phosphate-1993 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 适用性、身份及前景数据获接受后的二铵供应建模 |
| excluded_use | 农艺产量等效；施肥排放；试剂纯度二铵；一铵/NPK或硝酸磷肥替代 |
| required_metadata | 全部参考限定信息、边界、单位、时期、实际供方、包装、处理接收方及分配理由 |
| required_quality_disclosure | 参考/供方缺口；原生元数据瑕疵；质量/元素残差；监测覆盖；不确定性；排除项 |
| update_trigger | 磷酸/氨路线、含量、配方、公用工程供方、治理设备、计量基准或参考身份变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | [UNSD CPC 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) | 34642身份及相邻34643–34646区别，不是方法批准 |
| eu-lvic-aaf-2007 | official_guidance | [European Commission LVIC-AAF BREF, August 2007](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf), §§7.2.3–7.2.9, printed pp.287–289 / PDF315–317 | 仅二铵路线和物理操作；不采用其他等级和表列数量 |
| epa-ammonium-phosphate-1993 | official_guidance | [US EPA AP-42 §8.5.3 Ammonium Phosphate](https://www.epa.gov/sites/default/files/2020-09/documents/8.5.3_ammonium_phosphate.pdf), July1993/reformatted1995, §§8.5.3.1–3 and Fig.8.5.3-1 | 造粒单元与释放/回收接口。开头通式为MAP，不作DAP化学式。TVA配方/受控场址因子不作默认值。 |
| mosaic-dap-spec-2024 | literature | [Mosaic Diammonium Phosphate 18-46-0 specification sheet](https://mosaicco.com/fileLibrary/publicFiles/0-Diammonium-Phosphate-Specification-Sheet.pdf), ©2024 | 生产者保证值说明养分检测语义；仅列部分组分，不是完整组成或通用等级 |
| mosaic-dap-sds-2020 | literature | [Mosaic DAP SDS MOS100011](https://mosaicco.com/filelibrary/publicfiles/0-dap_sds.pdf), revised24March2020, §§1,3 | DAP物种/CAS及商业混合物区别；生产者组成范围不作配方 |
| epa-gas-combustion | official_guidance | [US EPA AP-42 §1.4 Natural Gas Combustion](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf), retained header10/26, §§1.4.1–1.4.3 | 条件性的厂内燃气燃烧物种；须核设备适用性，不把锅炉因子移植至直燃干燥机 |
| ilcd-attributional-2010 | official_guidance | [EC JRC ILCD Handbook: General guide for LCA, Detailed guidance, first edition2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf), §7.9.2–3, printed pp.255–257 | 归因型细分与有记录的分配，不自动给予替代抵扣 |
