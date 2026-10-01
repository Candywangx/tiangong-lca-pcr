---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.iron-ores-and-concentrates-other-than-roasted-iron-pyrites
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁矿石及精矿（焙烧黄铁矿除外）

## 1. 范围与适用性

本 PCR 用于生产铁矿石及铁精矿在所声明矿山或选矿厂出口处的场址特定前景清单。覆盖露天或地下开采及物理选矿生产的直接发运矿、块矿、粉矿和非团聚精矿。磁铁矿与赤铁矿路线必须区分。排除焙烧黄铁矿、焙烧球团、烧结矿、直接还原铁、生铁和钢。球团、烧结及冶金还原需要单独的下游方法规则。磁化焙烧或化学浸出需要明确扩展路线清单，不得按普通物理分选处理。

参考基准为所声明的产品数量，不代表不同品位矿石具有相同的炉料性能。本 PCR 自行定义前景范围和采集要求；技术来源支持过程适用性，不提供行业通用配方或消耗默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.iron-ores-and-concentrates-other-than-roasted-iron-pyrites |
| classification_refs | CPC 3.0:14100；仅作分类背景 |
| covered_products | 直接发运铁矿石；块矿；铁矿粉；非团聚铁精矿 |
| excluded_products | 焙烧黄铁矿；球团矿；烧结矿；金属铁；钢 |
| representative_product | 声明干基全铁品位和粒度的脱水铁精矿 |
| production_route | 开采、破碎筛分、按实际路线磨矿及磁选或重选、按实际路线浮选、脱水和出口装运 |
| market_state | 散装矿石或精矿；声明出口含水率、矿物组成、粒度和品位 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于下游炼铁准备的含铁矿物原料 |
| How much | 声明出口处 1 kg 干基产品 |
| How well | 声明干基全铁品位、矿物组成、粒度分布、水分、SiO2、Al2O3、P 和 S；不规定通用品位下限 |
| How long or cycle | 一次出口交付；无使用寿命要求 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁精矿，富矿粉 `3d8f36b6-aab1-4687-ac75-00bf966ed458` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 矿山与选矿厂位置；报告期；出口位置；开采或购入给矿起点；产品形态；矿物组成；路线；干基全铁品位；水分基准及取样方法；粒度；SiO2；Al2O3；P；S；可销售干质量；上游链接覆盖；分配方法 |

以上对象代表精矿路线。原矿、块矿或粉矿数据集须在参考对象和 `final_product` 中同时采用匹配的产品身份；已确认的铁矿石 `aa72a314-73ed-4400-95a0-a8f9f837a27f` 是矿石候选，不自动替代精矿。保持 1 kg 干基，声明实际品位与形态。所链接供应数据集须采用相同水分约定；若其流质量为收到基，须用实测含水率将交换数量转换为湿质量，并在元数据中明示 1 kg 干基当量。不得默默改变供应流的解释。必需限定信息须写入前景数据包。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| dry_reference | 参考产品 | 质量 | kg | 采用 1 kg 干基产品。用 cp_product 采集湿质量及对应的湿基含水率；只扣除游离水，不扣除化学结合水。 |
| grade_basis | 矿石与精矿 | 质量分数 | kg/kg | 全铁记录为干基质量分数。百分数除以 100 换算；含铁质量不得替代产品质量。 |
| energy_basis | `site_electricity` | 净热值 | MJ | 计量电量按 3.6 MJ/kWh 从 kWh 换算为 MJ。供应流电压须匹配声明的电表边界。 |
| water_basis | 水和矿浆 | 体积；质量 | m3; kg | 水体积、矿浆湿质量和固体干质量分开记录。仅用同一样品实测密度及固体分数换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 矿山原位矿石，或进入独立声明选矿厂的购入矿石 |
| starting_condition_role | 开采前景或仅选矿前景，明确区分 |
| product_classification_scope | 铁矿石与非团聚精矿；CPC 3.0:14100 提供分类背景 |
| recursive_input_rule | 购入同类别矿石以输入及上游供应数据集计入一次；内部中矿和回用物流不重新启动类别追溯 |
| upstream_dataset_requirement | 链接购入给矿、燃料、电力、药剂、运输及场外废物处理；披露地域、技术、水分基准和覆盖范围 |
| disclosure | 出口位置、过程覆盖、库存变化、剥离、水源、尾矿去向、基础设施及闭矿处理和遗漏 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | 所有数据集 | 纳入声明前景内实际钻孔、开采、运输、破碎、分选和脱水环节；包括购入给矿到厂运输。 | `epa-iron-1994` |
| boundary_services | 场址运行 | 纳入泵送、抑尘、尾矿管理和矿井水处理。回用水为内部周转量；新鲜取水单独记录。 | `ifc-mining-2007` |
| boundary_start | 购入矿石 | 仅选矿数据包须保留上游矿石链接；缺少开采负荷不得宣称从摇篮到出口覆盖。内部开采矿石不得另挂第二个上游矿石供应数据集。 |  |
| boundary_extension | 生命周期覆盖 | 本出口清单排除下游团聚、冶炼及客户运输。声明勘探、资本设备、矿山开发、闭矿与闭矿后覆盖；纳入可归属的长期废物管理，或记录经评估的遗漏，不得默默假设为零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mining | 开采与场内矿石运输 | conditional | 声明边界内进行原位开采 | 矿石采出及废石产生 | 每 1 kg 参考流 |
| beneficiation | 破碎、筛分与物理分选 | conditional | 实际路线进行破碎、筛分、磨矿或分选 | 准备粒度并回收含铁矿物 | 每 1 kg 参考流 |
| flotation | 浮选提质 | conditional | 实际路线采用浮选 | 路线特定药剂投入及分离 | 每 1 kg 参考流 |
| finishing | 脱水、产品控制与出口装运 | required | 所有数据集；仅在实际执行时纳入脱水 | 可销售产品交付 | 每 1 kg 参考流 |
| site_services | 公用工程、尾矿与水管理 | required | 所有数据集，按可归属活动量计入 | 唯一场址公用工程台账及环境控制 | 每 1 kg 参考流 |

所有交换数量采用同一报告期可销售产品干质量分母 D，单位 kg。矿石内部转移汇总时抵消。选矿、浮选与成品处理间的精矿移动属于采集协议中的阶段平衡观察，不另列为本出口清单的产品交换；仅 final_product 为精矿成品输出。尾矿及废石采用场内管理或明确链接的场外处理，仅计一次。场内最终堆存实物记录为库存，不虚构为基本流排放。场址服务台账统一计入全部公用工程和直接排放；阶段分表数据须与其核对，不再次相加。

各卡以所列交换实际发生为适用条件。这些是具体身份示例，不是完整场址配方：每种实际炸药、捕收剂、起泡剂、燃料、润滑剂、衬板、包装件、回收共产品、废物及排放物质须另列卡片并匹配身份和协议。来源记录证明排放时，应纳入 CO、SO2、CH4、N2O、粗细颗粒物、硝酸盐及溶解金属。未测量不得默默赋零。替代药剂须用独立身份，不得改名沿用 UUID。

### 过程：开采与场内矿石运输（`mining`）

#### 输入

##### 产品流

###### 乳化炸药（`mining_explosive`）

发放乳化炸药质量 / D；仅用于实际采用该配方的路线。其他实际炸药和雷管逐项另列。

- 选定流：乳化炸药 `eb58ee82-ee46-4306-baef-51dfef1d1ccc`
- 流属性/单位：质量 / kg
- 数量规则：发放乳化炸药质量 / D；仅用于实际采用该配方的路线。其他实际炸药和雷管逐项另列。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mining`
- 来源：`epa-iron-1994`

##### 废物流

##### 基本流

###### 铁矿石，地下（`ore_resource`）

采出矿石干质量 / D；为含脉石矿石质量，不是含铁质量；排除贫化无矿覆盖层。

- 选定流：铁矿石，地下 `a41972a3-173d-4d12-8394-0a0da769234b`
- 流属性/单位：质量 / kg
- 数量规则：采出矿石干质量 / D；为含脉石矿石质量，不是含铁质量；排除贫化无矿覆盖层。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mining`
- 来源：

#### 输出

##### 产品流

###### 铁矿石（`mined_ore`）

转出开采矿石干质量 / D；记录库存变化和损失。连接选矿时为内部转移。

- 选定流：铁矿石 `aa72a314-73ed-4400-95a0-a8f9f837a27f`
- 流属性/单位：质量 / kg
- 数量规则：转出开采矿石干质量 / D；记录库存变化和损失。连接选矿时为内部转移。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mining`
- 来源：

##### 废物流

###### 铁矿山废石（`waste_rock`）

废石干质量 / D；分别标识剥离及开发废石，记录去向和库存变化。

- 选定流：铁矿山废石
- 流属性/单位：质量 / kg
- 数量规则：废石干质量 / D；分别标识剥离及开发废石，记录去向和库存变化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mining`
- 来源：

###### 铁矿山覆盖土（`overburden`）

发生剥离时的移除土壤质量 / D；分别记录干基及复垦储存。

- 选定流：铁矿山覆盖土
- 流属性/单位：质量 / kg
- 数量规则：发生剥离时的移除土壤质量 / D；分别记录干基及复垦储存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mining`
- 来源：

##### 基本流

### 过程：破碎、筛分与物理分选（`beneficiation`）

#### 输入

##### 产品流

###### 铁矿石（`ore_feed`）

消耗矿石给矿干质量 / D，并校正给矿库存；分别标识内部开采与外购给矿。

- 选定流：铁矿石 `aa72a314-73ed-4400-95a0-a8f9f837a27f`
- 流属性/单位：质量 / kg
- 数量规则：消耗矿石给矿干质量 / D，并校正给矿库存；分别标识内部开采与外购给矿。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_beneficiation`
- 来源：

###### 钢球（`grinding_balls`）

采用湿式钢球磨矿且材质匹配所选身份时的钢球净消耗 / D；核对购入、补加和钢球库存。

- 选定流：钢球 `d5f10af9-1429-4a11-b47f-71173cc13b2f`
- 流属性/单位：质量 / kg
- 数量规则：采用湿式钢球磨矿且材质匹配所选身份时的钢球净消耗 / D；核对购入、补加和钢球库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_beneficiation`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铁矿石分选尾矿（`separation_tailings`）

尾矿固体干质量 / D；另采集矿浆湿质量和固体分数；声明硫化物含量和管理去向。

- 选定流：铁矿石分选尾矿
- 流属性/单位：质量 / kg
- 数量规则：尾矿固体干质量 / D；另采集矿浆湿质量和固体分数；声明硫化物含量和管理去向。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_beneficiation`
- 来源：`epa-iron-1994`

##### 基本流

### 过程：浮选提质（`flotation`）

#### 输入

##### 产品流

###### 玉米淀粉（`flotation_starch`）

仅在玉米淀粉用作抑制剂时计入其发放干质量 / D；区分糊化用水。

- 选定流：玉米淀粉 `982918a4-54b1-4792-9ee5-2f3155d4e929`
- 流属性/单位：质量 / kg
- 数量规则：仅在玉米淀粉用作抑制剂时计入其发放干质量 / D；区分糊化用水。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flotation`
- 来源：

###### 氢氧化钠（`flotation_naoh`）

使用时计入 NaOH 干基当量质量 / D；记录配方浓度及实际溶液质量，稀释水不得重复计入。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：使用时计入 NaOH 干基当量质量 / D；记录配方浓度及实际溶液质量，稀释水不得重复计入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flotation`
- 来源：

###### 十二烷基胺醋酸盐（`flotation_collector`）

仅在实际使用该化学品时计入所发放配方捕收剂质量 / D；记录纯度，不自动以其他胺替代。

- 选定流：十二烷基胺醋酸盐
- 流属性/单位：质量 / kg
- 数量规则：仅在实际使用该化学品时计入所发放配方捕收剂质量 / D；记录纯度，不自动以其他胺替代。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flotation`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铁矿石浮选尾矿（`flotation_tailings`）

浮选尾矿固体干质量 / D；保留药剂组成及接收管理路线。

- 选定流：铁矿石浮选尾矿
- 流属性/单位：质量 / kg
- 数量规则：浮选尾矿固体干质量 / D；保留药剂组成及接收管理路线。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flotation`
- 来源：

##### 基本流

### 过程：脱水、产品控制与出口装运（`finishing`）

#### 输入

##### 产品流

###### 聚丙烯酰胺（`dewatering_flocculant`）

仅在使用时计入配方聚丙烯酰胺发放质量 / D；披露离子类型和有效浓度。

- 选定流：聚丙烯酰胺
- 流属性/单位：质量 / kg
- 数量规则：仅在使用时计入配方聚丙烯酰胺发放质量 / D；披露离子类型和有效浓度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铁精矿，富矿粉（`final_product`）

1 千克

- 选定流：铁精矿，富矿粉 `3d8f36b6-aab1-4687-ac75-00bf966ed458`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：

##### 废物流

##### 基本流

### 过程：公用工程、尾矿与水管理（`site_services`）

#### 输入

##### 产品流

###### 交流电（`site_electricity`）

以 MJ 计量的可归属电量 / D；匹配 1–35 kV 消费边界。采矿、磨矿、浮选、过滤、泵送和处理仅在本场址台账计入一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：以 MJ 计量的可归属电量 / D；匹配 1–35 kV 消费边界。采矿、磨矿、浮选、过滤、泵送和处理仅在本场址台账计入一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 柴油（`site_diesel`）

消耗柴油 kg / D；体积记录用批次密度换算，保留设备分配依据。供应方燃料生产与现场燃烧分开。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：消耗柴油 kg / D；体积记录用批次密度换算，保留设备分配依据。供应方燃料生产与现场燃烧分开。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 工艺用水（`purchased_water`）

外部供应时购入已处理工艺用水质量 / D；不得再把供应商取水记为现场直接取水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：外部供应时购入已处理工艺用水质量 / D；不得再把供应商取水记为现场直接取水。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

###### 熟石灰（`neutralization_lime`）

仅在中和使用熟石灰时计入 Ca(OH)2 产品发放质量 / D；记录纯度。

- 选定流：熟石灰
- 流属性/单位：质量 / kg
- 数量规则：仅在中和使用熟石灰时计入 Ca(OH)2 产品发放质量 / D；记录纯度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 废物流

##### 基本流

###### 河水（`river_withdrawal`）

存在时直接河水取用 m3 / D；排除内部循环。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 / m3
- 数量规则：存在时直接河水取用 m3 / D；排除内部循环。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 地下水（`groundwater_withdrawal`）

存在时直接地下水取用（包括矿山疏干）m3 / D；区分回用、排放和消耗部分。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 / m3
- 数量规则：存在时直接地下水取用（包括矿山疏干）m3 / D；区分回用、排放和消耗部分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 矿产开采场址占用（`mine_land_occupation`）

采矿及废物管理占用面积乘占用时长 / D；声明土地类型，避免面积重叠。

- 选定流：矿产开采场址占用
- 流属性/单位：面积×时间 / m2*a
- 数量规则：采矿及废物管理占用面积乘占用时长 / D；声明土地类型，避免面积重叠。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`
- 来源：

#### 输出

##### 产品流

##### 废物流

###### 铁矿山废水（`offsite_wastewater`）

仅场外处理时转移未处理或部分处理废水湿质量 / D；链接接收处理，不与场内排放重复。

- 选定流：铁矿山废水
- 流属性/单位：质量 / kg
- 数量规则：仅场外处理时转移未处理或部分处理废水湿质量 / D；链接接收处理，不与场内排放重复。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 铁矿山水处理污泥（`water_treatment_sludge`）

污泥干质量 / D，并记录含水率和去向；处理与尾矿区分。

- 选定流：铁矿山水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：污泥干质量 / D，并记录含水率和去向；处理与尾矿区分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 二氧化碳（化石源）（`direct_fossil_co2`）

现场燃料及爆破直接排入空气的化石 CO2 kg / D；采用实测或有据的燃料碳平衡，不计电力供应方排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：现场燃料及爆破直接排入空气的化石 CO2 kg / D；采用实测或有据的燃料碳平衡，不计电力供应方排放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 颗粒物 (PM2.5)（`direct_pm25`）

治理后采矿、破碎、装运及燃烧排入空气的实测 PM2.5 kg / D；捕集粉尘不作为已排放 PM2.5。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：治理后采矿、破碎、装运及燃烧排入空气的实测 PM2.5 kg / D；捕集粉尘不作为已排放 PM2.5。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 氮氧化物，排入空气（`direct_nox`）

发动机及爆破存在排放时的实测 NOx 质量（以 NO2 计）/ D；记录测量基准。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：发动机及爆破存在排放时的实测 NOx 质量（以 NO2 计）/ D；记录测量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 水，排入地表水（`effluent_water`）

场内处理后排放水 m3 / D；保留接收流域和排放点，与转交处理供应方的废水区分。

- 选定流：水，排入地表水
- 流属性/单位：体积 / m3
- 数量规则：场内处理后排放水 m3 / D；保留接收流域和排放点，与转交处理供应方的废水区分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

###### 铁，排入淡水（`effluent_iron`）

最终排水处实测溶解铁或总铁负荷 kg / D；指定分析组分，避免同一负荷重复。

- 选定流：铁，排入淡水
- 流属性/单位：质量 / kg
- 数量规则：最终排水处实测溶解铁或总铁负荷 kg / D；指定分析组分，避免同一负荷重复。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | 多个可销售产出 | 首先考察过程细分或系统扩展。优先采用实测过程特定归属；扩展系统结果须保持相应标识。无法避免时采用有据的潜在物理关系，其次采用经济价值等有记录的其他关系。 | `eu-ef-2021` |
| allocation_ore_grades | 块矿、粉矿及精矿 | 不得自动按含铁量分配共同采矿负荷。经济分配有据时，share_i = dry_mass_i * price_i / sum(dry_mass_j * price_j)；采用可比出口净价、同一期间和水分基准，披露价格敏感性，产品特定成品处理负荷直接归属。 | `eu-ef-2021` |
| allocation_waste | 尾矿、覆盖土及废石 | 待处置材料不得仅因具有质量就视为可销售共产品。保留可归属装运和处理负荷。已证明可销售的回收产品须有独立身份、规格、买方证据和合理分配；不得加入无依据的避免生产抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | finishing | 可销售产出与水分 | 称重及化验 | 批次；湿质量 W；湿基含水率 w；干基 Fe 分数 f；粒度；杂质；库存；出口单据 | 经校准地磅或皮带秤；匹配批次的水分取样及实验室化验。采用 ISO 3087 或披露经验证的等效方法；ISO 公开范围不提供完整实验室操作程序。 | kg; kg/kg | 每批次 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_mining | mining | 矿石、炸药、覆盖土及废石 | 矿山生产记录 | 采坑或采场；矿石吨数；水分；炸药发放；废石或土壤体积；密度；库存变化；去向 | 核对矿山测量、校准称重、钻孔爆破及领用记录；测量体积采用所采材料密度换算。 | kg | 每班及每次爆破 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_beneficiation | beneficiation | 给矿、精矿、磨矿介质及尾矿 | 选矿厂质量平衡 | 给料和产品重量；水分；Fe 化验；介质补加及库存；尾矿浆质量；固体分数 | 匹配给矿与产品取样、称重和矿浆密度或固含量测试；循环中矿单独计量。 | kg; kg/kg | 每班及混合样 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_flotation | flotation | 浮选给矿、产品、药剂及排弃物 | 药剂及工厂记录 | 化学名称；CAS；配方；浓度；发放质量；期初期末库存；精矿和尾矿固体 | 核对安全数据表及领用记录；逐项称重或计量药剂；核对阶段质量及化验。 | kg | 每批次及每班 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_utilities | site_services | 电力及柴油 | 公用工程计量及燃料库存台账 | 电表 kWh；电压；柴油质量或升数；密度；收货；库存；设备小时；归属比例 | 独立电表及燃料记录；场址总量与可归属活动核对，排除服务供应数据已包含的承包商燃料。 | MJ; kg | 每日，按月核对 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_water | site_services | 取水、购入水、回用及排水 | 水平衡 | 来源；流域；流入；购入水；回用水；排水；蒸发；产品及尾矿携带水；库存变化 | 水源及排口计量并标识流域；保留独立内部循环台账。 | m3; kg | 每日及季节核对 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_waste | site_services | 废物去向及处理 | 处理及处置台账 | 尾矿固体；湿质量；硫酸盐及硫化物表征；中和剂；污泥；去向；堆存；闭矿计划 | 称重、矿浆测量、处理记录及接收联单；分别记录场内管理清单及经评估未来需求。 | kg | 每次转移及月度平衡 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_emissions | site_services | 直接空气及水排放 | 监测或有据计算 | 排放源；物质；介质；浓度；气液流量；运行时间；治理设施；燃料碳；因子来源；检出限 | 代表性烟囱、无组织及排口测量；负荷 = 浓度 × 匹配流量 × 时间，明确单位换算。燃料碳估计须有实测组成及氧化假设。 | kg | 运行周期及许可监测计划 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |
| cp_land | site_services | 土地占用 | 测量及许可图件 | 地块；土地类型；面积；时长；重叠边界；复垦状态 | GIS 或测量地块及矿山计划；区分占用与转化，每种转化土地类型另行记录。 | m2*a | 每年及土地变化时 | 同一声明报告期 | 声明矿山或选矿厂；排除无关生产 | 每 1 kg 参考流 | 校准、原始记录、不确定性及核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| dry_mass | 产品及中间固体 | dry_mass = W * (1 - w)；D = 可销售干质量之和；w 为湿质量上的水分分数，0 <= w < 1。核对生产量 = 发运量 + 期末库存 - 期初库存 + 已识别损失。 | W; w; cp_product | dry_mass; D | `iso-moisture-2020` |
| normalize_period | 所有清单行 | 归一化交换 = 报告期可归属交换量 / D；D 为正的可销售产出干质量，单位 kg；final_product = 1 kg 干基产品。批次强度不得未经质量加权直接平均。 | period totals; D; allocation shares | exchange per 1 kg reference flow |  |
| fe_recovery | 选矿及浮选 | 含铁质量 = 固体干质量 × 干基 Fe 分数；Fe 回收率 = 回收产品中 Fe / 消耗给矿中 Fe，核对库存变化及所有出口。 | dry masses; Fe assays; stocks | contained Fe; recovery |  |
| water_reconcile | 场址水台账 | 外部流入 = 排水 + 蒸发 + 产品或废物带出水 + 储水增加；内部回用水抵消。不得将总取水等同净消耗。 | cp_water; moisture; stocks | water balance residual | `ifc-mining-2007` |
| energy_conversion | site_electricity; site_diesel | 电力 MJ = 电表 kWh × 3.6；柴油 kg = 实测升数 × 批次密度 kg/L；场内发电投入计入一次，内部发电不作为购入电网电力。 | cp_utilities; density | MJ; kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_period | 所有采集协议 | 采用同一代表性报告期，本 PCR 采集设计通常采用完整运行年；较短周期须说明原因、季节性及产能。 | 期间登记及运行小时 |
| quality_identity | 每项交换 | 核对流类型、化学身份、产品形态、介质、参考属性及双语正式名称；待定身份须在发布前解决。 | 供应商规格及身份记录 |
| quality_uncertainty | 平衡及估计 | 保留称重或仪表校准、化验代表性、密度、因子来源及不确定性；用实测不确定性解释平衡残差，不采用通用固定容差。 | 校准、化验及平衡表 |
| quality_missing | 未测量的条件流 | 区分不存在、未测量、模型估计及排除交换；提供估计及来源，或列明覆盖缺口，不得无依据赋零。 | 完整性登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考与成品 | 要求产品 UUID 及形态匹配、1 kg 干基、全部限定信息、正的 D 和匹配水分及 Fe 化验。湿质量供应流须明确换算。 |  |
| validate_balance | 所有阶段 | 结合库存变化及不确定性核对干固体、含铁量及水平衡；回收分数须在零与一之间，否则必须用有据的平衡校正解决差异。 |  |
| validate_double_count | 公用工程、中间品及废物 | 抵消内部矿石、精矿及水转移；核对唯一公用工程台账。废物输出匹配一种管理去向并纳入处理负荷；供应方排放不作为场址直接排放。 |  |
| validate_coverage | 数据集交付 | 报告已执行及跳过检查、缺失测量、待定身份、遗漏阶段及上游覆盖。存在错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明铁矿产品的场址特定前景出口清单 |
| downstream_use | 覆盖及质量评估后的 secondary_dataset；background_dataset |
| allowed_use | 向下游准备或炼铁供应匹配矿物原料；单独标识的仅选矿用途 |
| excluded_use | 未限定品位、形态或路线的比较；球团或钢生产；上游覆盖不完整时的从摇篮到出口宣称 |
| required_metadata | 全部参考限定信息；清单基准；路线；出口；过程覆盖；供应数据集；库存处理；分配比例；地域；时间；土地及废物管理范围 |
| required_quality_disclosure | 实测及模型覆盖；待定身份；不确定性；平衡残差；水源及流域；化学配方；排放介质；遗漏及长期处理 |
| update_trigger | 矿体或品位、路线、回收率、药剂配方、公用工程供应、废物去向、出口或报告期代表性变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epa-iron-1994 | official_guidance | US EPA, EPA 530-R-94-030 (1994), Volume 3: Iron, §§1.4–1.5. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/iron.pdf | 历史物理过程描述：开采、分选及尾矿。不用于当前市场份额、消耗因子、法规限值或通用品位。 |
| ifc-mining-2007 | official_guidance | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Mining (10 December 2007), §1.1 Water Use. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿山水平衡及回用水区分；不提供铁矿专属 LCA 消耗范围。 |
| iso-moisture-2020 | standard | ISO 3087:2020, Iron ores — Determination of the moisture content of a lot, public scope/catalogue. https://www.iso.org/standard/72159.html | 批次水分测定对天然及加工铁矿石的适用性。详细实验室方法需取得标准正文或采用经验证等效方法。 |
| eu-ef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I §4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 一般多功能过程处理层级；引用不宣称全面符合 PEF。 |
