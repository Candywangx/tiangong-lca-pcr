---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.padlocks-and-locks-of-base-metal-clasps-and-frames-with-clasps-incorporating-locks-of-b-058f6573
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 贱金属制挂锁和锁；带锁的贱金属制搭扣及搭扣框；贱金属制钥匙及其零件；家具、门、鞍具及类似物品用贱金属配件

## 1. 范围与适用性

本 PCR 适用于工厂大门处交付的贱金属制锁闭和配件五金产品的前景生产：挂锁和锁、带锁的搭扣及搭扣框、钥匙和锁具零件，以及家具、门、鞍具、橱柜和类似用途的贱金属配件。本 PCR 适用于机械产品；对于机电产品，仅在电子组件单独识别时适用于其中的金属五金部分。

前景边界始于外购金属坯料、铸件、零部件、表面处理化学品、水、能源和包装进入报告组织的收货大门，止于经检验并完成包装的成品五金离开工厂大门。成形、机加工、清洗、热处理、表面处理、装配、检验和包装如由报告组织实施，或由其为声明产品委托的受控来料加工方实施，均应纳入。

完整的门、家具、鞍具和门禁系统，动力门操作器，独立电子控制模块，安装、配送、使用、维护和寿命终止阶段，以及不带锁的服装或鞋类搭扣不在本 PCR 范围内。扩展研究可将被排除的生命周期阶段作为单独过程加入，但不得改变本从门到门参考流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.padlocks-and-locks-of-base-metal-clasps-and-frames-with-clasps-incorporating-locks-of-b-058f6573 |
| classification_refs | CPC 3.0：42992（精确的分类语境；映射接受另行治理） |
| covered_products | 贱金属制挂锁、锁、带锁的搭扣及搭扣框、钥匙、锁具零件，以及家具、门、鞍具、橱柜和类似物品用配件成品 |
| excluded_products | 完整宿主产品；动力门操作器；独立电子控制器；不带锁的服装和鞋类搭扣；非金属配件；仅提供安装的服务 |
| representative_product | 可销售的贱金属制锁或配件成品，包括通常随产品供应的整体零件和已声明附件 |
| production_route | 外购金属坯料或铸造件；按适用情况进行成形和机加工；可选热处理；可选清洗和表面处理；最终装配、检验和包装 |
| market_state | 制造大门处已完工并包装；声明产品子类、主要合金、表面处理、尺寸、安防或性能等级、附件和包装配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并提供满足已声明锁闭、门禁、紧固、运动控制或配件功能的贱金属制锁具或配件五金成品 |
| How much | 工厂大门处成品净质量 1 kg；同时声明每 kg 产品件数及每件产品质量 |
| How well | 满足已声明的产品规范、性能或安防等级、尺寸、表面处理和质量验收准则 |
| How long or cycle | 一个完整制造批次归一化至 1 kg 成品；不表示使用阶段的服役期 |
| reference_flow_link | 已声明五金成品流 1 kg，不含外包装，但包含整体零件和通常随产品供应的附件 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 贱金属制的锁和挂锁，贱金属制的锁钩和带钩环框，贱金属制的钥匙及其零件，家具、门、鞍具及类似用品的贱金属配件 `5cf66c20-e740-4088-a8a8-4a1afca932b2` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 五金子类和预期功能；主要金属和合金牌号；产品质量和每 kg 件数；尺寸；机械或机电配置；表面处理和涂层体系；适用时的性能、安防或防火等级；随附紧固件、钥匙和附件；包装配置；生产路线和外包操作；制造场址和地域；报告期；工厂大门处状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量可销售五金成品，包含整体零件和通常随产品供应的附件；不含外包装，各包装材料另行记录。 |
| `unit_to_mass_conversion` | 产品计数 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每种配置记录产品件数和有代表性的单件称量质量；计算每 kg 件数。除非披露按产量加权的方法，不得合并不同配置。 |
| `electricity_conversion` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留以 kWh 表示的仪表读数，并按 1 kWh = 3.6 MJ 换算为 MJ；声明电网地域、电压等级及是否包含下游损耗。 |
| `water_mass_conversion` | 工艺用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量记录；按体积计量时，使用实测密度和温度，或记录有依据的密度换算。 |
| `chemical_supply_state` | 表面处理化学品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告交付溶液或水合物的质量，并声明浓度、水合状态及槽液初配与补加；不得混用有效成分质量和供应产品质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_rule_1` | 前景制造 | 纳入工厂大门前改变声明产品的每项操作，包括受控来料加工；披露制造地点和实际采用的过程顺序。 | us-epa-locking-devices-1995; ul-builders-hardware-pcr-2019 |
| `sb_rule_2` | 包装 | 将每种包装材料作为单独投入记录，并披露其类型、组成、复用状态和处置假设；不得使用合并的包装材料行。 | ul-builders-hardware-pcr-2019 |
| `sb_rule_3` | 排除的生命周期阶段 | 配送、安装、使用、维护和寿命终止阶段不纳入本从门到门数据集。扩展研究如加入这些阶段，应将其作为单独过程报告且不得重复制造投入。 | ul-builders-hardware-pcr-2019 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购金属坯料、外购铸件或离散零部件、表面处理化学品、工艺用水、能源和包装在报告组织的大门处接收，并声明供应商、牌号、状态和上游数据集引用。 |
| starting_condition_role | 贱金属制锁闭和配件五金成品从门到门制造的上游产品投入 |
| product_classification_scope | 贱金属制锁、锁具零件、钥匙、带锁搭扣和贱金属配件成品；分类引用用于定位类别，不能替代产品限定信息。 |
| recursive_input_rule | 会递归到同一类别的外购锁、钥匙、配件或锁具零部件仅作为产品投入记录一次并链接其上游数据集；其先前制造不得在前景过程中重复展开。 |
| upstream_dataset_requirement | 优先使用供应商特定数据集；否则使用地域和技术具有代表性的上游数据，并披露合金牌号、再生料含量、产品状态和交付边界。 |
| disclosure | 声明哪些成形、热处理、表面处理和装配操作在场内或外包；声明金属和涂层体系、化学品供应状态、能源地域、水源、废物去向、包装组成、报告期及任何被排除操作。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 金属零部件成形与机加工 | conditional | 当坯料或铸件在声明前景内或由受控来料加工方进行切割、弯曲、成形、钻孔、铣削、攻丝、压铸、冲压或其他加工时纳入。 | 前景生产 | 送至下一已纳入操作的加工零部件 kg |
| `heat_treatment` | 零部件热处理 | conditional | 当最终装配前通过热处理获得硬度、强度、弹性或尺寸稳定性时纳入。 | 前景调质 | 热处理零部件 kg |
| `surface_finishing` | 清洗与表面处理 | conditional | 纳入声明路线中在场内或受控实施的每项清洗、抛光、电镀、转化膜、粉末涂装或清漆操作。 | 前景表面处理 | 表面处理后零部件 kg |
| `assembly_packaging` | 最终装配、检验与包装 | required | 始终纳入最终产品验收和工厂大门输出；如存在装配和包装，则记录装配及每种包装材料。 | 前景生产与大门输出 | 成品净质量 1 kg |

### 过程：金属零部件成形与机加工（`component_fabrication`）

#### 输入

##### 产品流

###### 碳钢薄板坯料（`carbon_steel_sheet`）

仅当碳钢薄板为声明产品跨越加工边界时记录；声明牌号、涂层状态、厚度和再生料含量。

- 选定流：碳钢薄板
- 流属性/单位：质量 / kg
- 数量规则：实测可归属于该批次的购入或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-locking-devices-1995`

###### 不锈钢棒材（`stainless_steel_bar`）

仅对使用该坯料形态的产品配置记录不锈钢棒材；声明牌号、直径或截面、表面状态和再生料含量。

- 选定流：不锈钢棒材
- 流属性/单位：质量 / kg
- 数量规则：实测可归属于该批次的购入或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-locking-devices-1995`

###### 黄铜坯料（`brass_stock`）

铜锌合金坯料被加工成声明五金时，记录公开状态码 100 的“铜锌合金”流（分类代码 CPC 41512），并声明合金牌号和坯料形态。

- 选定流：铜锌合金 `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- 流属性/单位：质量 / kg
- 数量规则：实测可归属于该批次的购入或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-locking-devices-1995`

###### 锌压铸合金（`zinc_die_casting_alloy`）

仅在声明零部件采用压铸时记录锌压铸合金；声明合金牌号、原生或再生料含量以及交付锭料状态。

- 选定流：锌压铸合金
- 流属性/单位：质量 / kg
- 数量规则：实测炉料质量扣除有记录的内部回炉料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-locking-devices-1995`

###### 切削液（`cutting_fluid`）

记录机加工消耗的公开状态码 100“切削液”流（分类代码 CPC 35499）新鲜补加量；排除已处于前景循环内的循环液。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 / kg
- 数量规则：购入量或槽液补加量减去有记录的未使用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-locking-devices-1995`

###### 零部件加工用电力（`electricity_component`）

记录可计量或分配至成形、铸造、机加工、去毛刺和过程内物料搬运的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：过程计量电力，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_energy`

##### 废物流

不预设废物投入。接受用于再制造的废物应作为其自身的具体废物投入另行增加。

##### 基本流

本过程不预设基本流投入。

#### 输出

##### 产品流

不预设单独产品输出；加工后的零部件保留在前景产品系统内。

##### 废物流

###### 工业后钢制机加工废料（`steel_scrap`）

记录离开过程进行回收或处理的已分选含铁边角料、切屑和车屑；声明污染情况和去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：离开前景过程的称量废料，扣除内部重熔或直接回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-locking-devices-1995`

##### 基本流

加工过程的直接排放如跨越环境边界，应增加为各自独立的实测基本流行。

### 过程：零部件热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理用气态天然气（`natural_gas_heat`）

仅当现场炉为声明零部件燃烧天然气时记录；声明参考条件和燃料组成。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：在已声明参考条件下计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment`
- 来源：`us-epa-locking-devices-1995`

###### 热处理用电力（`electricity_heat`）

路线纳入时，记录炉、控制装置、淬火设备和热处理辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：过程计量电力，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment`

##### 废物流

不预设废物投入。

##### 基本流

不预设基本流投入。

#### 输出

##### 产品流

不预设单独产品输出；热处理后的零部件保留在前景产品系统内。

##### 废物流

任何废淬火介质或处理残渣离开前景边界时，应分别增加为具体废物流行。

##### 基本流

###### 天然气燃烧直接排放的化石源二氧化碳（`co2_fossil_heat`）

根据实测化石天然气和供应商或燃料分析的碳数据计算直接烟气二氧化碳；不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：根据实测燃料用量、碳含量和有记录的氧化假设计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment`

### 过程：清洗与表面处理（`surface_finishing`）

#### 输入

##### 产品流

###### 表面处理用电力（`electricity_finish`）

记录声明路线中清洗、抛光、电镀整流器、泵、通风、粉末涂装、固化或清漆涂覆的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：过程计量电力，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`us-epa-locking-devices-1995`

###### 清洗和漂洗用工艺用水（`process_water_finish`）

记录跨越过程边界的补加水和漂洗水；循环水在离开循环前不重复记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量供水，必要时换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`us-epa-locking-devices-1995`

###### 碱性清洗或处理用氢氧化钠（`sodium_hydroxide_finish`）

仅当声明的清洗或废水处理路线消耗氢氧化钠时记录供应产品，并声明溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：可归属于该批次的交付溶液或固体补加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`

###### 酸洗或槽液控制用盐酸（`hydrochloric_acid_30_finish`）

仅当声明路线使用 30% 供应浓度时记录；其他浓度须单独解析流并披露浓度。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：质量 / kg
- 数量规则：可归属于该批次的 30% 交付溶液补加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`

###### 镀镍槽液补加用硫酸镍（`nickel_sulfate_finish`）

仅对镀镍路线记录硫酸镍；声明水合状态、纯度和供应产品浓度。

- 选定流：硫酸镍
- 流属性/单位：质量 / kg
- 数量规则：可归属于该批次的购入槽液初配和补加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`us-epa-locking-devices-1995`

##### 废物流

不预设废物投入。

##### 基本流

不预设基本流投入。

#### 输出

##### 产品流

不预设单独产品输出；表面处理后的零部件保留在前景产品系统内。

##### 废物流

###### 金属表面处理废水（`metal_finishing_wastewater`）

记录离开清洗、漂洗或电镀过程送往处理的水性废物；声明 pH、主要溶解金属、处理去向及水是否内部循环。

- 选定流：金属表面处理废水
- 流属性/单位：质量 / kg
- 数量规则：送往场内或场外处理的计量或称量废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`us-epa-locking-devices-1995`

###### 表面处理废水处理产生的金属氢氧化物污泥（`metal_hydroxide_sludge`）

记录金属表面处理废水处理产生的脱水污泥；声明干固体、主要金属、危险废物分类和去向。

- 选定流：金属氢氧化物污泥
- 流属性/单位：质量 / kg
- 数量规则：离开处理过程的湿污泥称量质量，并保留干固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`us-epa-locking-devices-1995`

##### 基本流

将每种实测直接大气或水体排放作为单独化学物种流增加，不得使用合并排放行。

### 过程：最终装配、检验与包装（`assembly_packaging`）

#### 输入

##### 产品流

###### 装配和包装用电力（`electricity_assembly`）

记录可归属于声明产品的装配设备、检验、测试和包装用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：过程计量电力，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_packaging`

###### 瓦楞纸箱（`corrugated_boxes`）

记录随产品出货的成形瓦楞纸箱；声明纸板等级、再生料含量和复用状态。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：领用于出货产品的包装实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_packaging`
- 来源：`ul-builders-hardware-pcr-2019`

###### 聚乙烯薄膜包装（`polyethylene_film`）

仅当声明的包装配置使用聚乙烯薄膜时记录；声明聚合物牌号、厚度和再生料含量。

- 选定流：聚乙烯 `1ff32f1d-77ac-4a6f-b91c-67b08b13e55a`
- 流属性/单位：质量 / kg
- 数量规则：领用于出货产品的薄膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_packaging`
- 来源：`ul-builders-hardware-pcr-2019`

##### 废物流

不预设废物投入。

##### 基本流

不预设基本流投入。

#### 输出

##### 产品流

###### 贱金属制锁闭或配件五金成品（`finished_hardware`）

仅记录工厂大门处经检验的可销售产品。产品件数、单件质量、整体附件以及净质量与含包装质量必须可追溯。

- 选定流：贱金属制的锁和挂锁，贱金属制的锁钩和带钩环框，贱金属制的钥匙及其零件，家具、门、鞍具及类似用品的贱金属配件 `5cf66c20-e740-4088-a8a8-4a1afca932b2`
- 流属性/单位：质量 / kg
- 数量规则：将可销售产品净质量称量输出归一化至恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：成品净质量 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_packaging`
- 来源：`un-cpc-3-0-2025`; `ul-builders-hardware-pcr-2019`

##### 废物流

被拒收零部件和包装废料离开前景边界时，应按材料分别记录。

##### 基本流

不预设直接基本流输出；存在实测排放时分别增加。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 多产品和生产线 | 在技术可行时，通过细分仪表、材料领用、批次记录和废物记录至声明产品配置来避免分配。 | ul-builders-hardware-pcr-2019 |
| `allocation_rule_2` | 剩余共享负荷 | 无法细分时，按产品净质量分配共享制造负荷。只有在记录依据并一致应用时，方可采用其他物理关系。 | ul-builders-hardware-pcr-2019 |
| `allocation_rule_3` | 金属废料和回收材料 | 离开前景的废料作为废物输出记录，本从门到门数据集内不计避免生产收益。任何回收收益或替代应在下游模型中单独报告，并披露方法和去向。 | us-epa-locking-devices-1995 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | 金属坯料、切削液和钢废料 | 采购、领用、退料和称量记录 | 材料身份、牌号、供应质量、退料质量、内部循环、废料质量、批次 id | 用经校准秤和批次流转单核对采购及仓储记录 | kg | 每批；每月核对 | 声明的有代表性报告期或生产期 | 每个加工场址和受控来料加工方 | 按产品配置汇总净投入和输出，再按成品净质量归一化 | 发票、成分证书、秤校准、材料核对和废料转移记录 |
| `cp_component_energy` | `component_fabrication` | 电力 | 仪表或设备能源日志 | 起止读数、kWh、生产小时、产品质量、分配驱动量 | 使用分表数据；共享时按有记录的设备时间或其他物理驱动量分配 | kWh 和 MJ | 每批或每月 | 与产品输出相同期间 | 每个加工场址 | 有证据时扣除非生产基荷，将 kWh 换算为 MJ，并按成品净质量归一化 | 仪表校准、账单和运行日志 |
| `cp_heat_treatment` | `heat_treatment` | 天然气、电力和直接化石源二氧化碳 | 燃气表、电表和燃料分析记录 | 燃气体积、参考条件、kWh、碳含量、氧化假设、处理质量 | 读取已纳入炉的仪表，并保留供应商燃料规范或分析 | m3、kWh、MJ 和 kg | 每个热处理生产期；每月核对 | 与处理输出相同期间 | 每个炉场址或受控来料加工方 | 先按炉批细分，再按处理质量分配；根据采集燃料数据计算直接 CO2 | 仪表校准、燃料发票、供应商规范和炉日志 |
| `cp_surface_finishing` | `surface_finishing` | 电力、水、每种化学品、废水和污泥 | 仪表、槽液、采购和废物转移记录 | kWh、水体积或质量、化学品身份和浓度、补加质量、废水质量、污泥湿质量和干固体、批次 id | 用采购和废物联单核对仪表及槽液日志 | kg、m3、kWh 和 MJ | 每次槽液初配和每批；每月核对 | 与表面处理零部件相同期间 | 每条表面处理线和废水处理单元 | 每种化学品和废物流保持分开；扣除有记录的内部循环；按成品净质量归一化 | 仪表校准、槽液分析、SDS 或证书、发票、联单和污泥固含量测试 |
| `cp_assembly_packaging` | `assembly_packaging` | 电力、每种包装材料和成品 | 仪表、物料清单、领用、计数、称量和出货记录 | kWh、包装身份和质量、产品件数、单件净质量、拒收件、出货质量、批次 id | 用经校准产品秤和出货记录核对装配及包装领用 | kg、item、kWh 和 MJ | 每批；每月核对 | 声明的有代表性报告期或生产期 | 每个最终装配和包装场址 | 仅汇总等效产品配置；披露按产量加权的平均；归一化至 1 kg 成品净质量 | 秤和仪表校准、检验放行、物料清单和出货记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 每个清单行 | 归一化数量 = 可归属行数量 / 可销售产品净质量 | 可归属流数量；可销售产品净质量 | 每 1 kg 成品净质量的流数量 |  |
| `calc_count_mass` | 产品计数换算 | 产品净质量 = 验收产品件数 × 有代表性的单件称量质量；汇总前对不同配置分层 | 验收件数；单件称量质量；配置 id | 可销售产品净质量 kg 和每 kg 件数 | ul-builders-hardware-pcr-2019 |
| `calc_electricity_mj` | 电力行 | 电力 MJ = 计量 kWh × 3.6 | 计量 kWh | 电力 MJ |  |
| `calc_water_mass` | 工艺用水行 | 水质量 = 计量体积 × 声明条件下有记录的密度 | 水体积；密度；温度 | 工艺用水 kg |  |
| `calc_co2_fossil` | 天然气直接燃烧 | 根据实测燃气体积、参考条件、供应商或分析的碳含量和有记录的氧化假设计算化石源 CO2；不使用上游电力排放 | 燃气体积；参考条件；碳含量；氧化假设 | 二氧化碳（化石源）kg |  |
| `calc_material_balance` | 金属加工和成品输出 | 核对外购金属 + 同类别零部件 = 成品净金属 + 已分选金属废料 + 其他实测含金属残渣 ± 库存变化 | 金属投入、产品输出、废料、残渣、在制品变化 | 已披露的金属质量平衡闭合 | us-epa-locking-devices-1995 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和所有交换 | 保留供应商身份、牌号或配方、产品状态、UUID 解析及批次或批号关联。不得用更宽泛流替代未解决的精确身份。 | 供应商规范、证书、SDS、UUID 直读审核和批次记录 |
| `dq_measurement` | 质量、能源、水和计数数据 | 使用适合所测数量的经校准秤和仪表；记录换算、共享仪表分配和被排除的基荷。 | 校准记录、仪表日志和计算工作簿 |
| `dq_temporal` | 前景数据集 | 覆盖声明的报告期或生产期，证明其时间代表性，并披露实质性的季节或产量变化。 | 生产日历、批次清单和差异审查 |
| `dq_completeness` | 过程图和清单 | 核对产品、金属和包装记录；即使本 PCR 未预列，也应将每种路线特定化学品、燃料、废物和实测排放作为自身原子交换增加。 | 质量平衡、采购核对、废物联单和完整性检查表 |
| `dq_geography_technology` | 场址和上游数据 | 声明制造地域、设备路线、外包操作、电力组合、水源和废物去向；说明缺失上游数据所用替代的理由。 | 场址说明、供应商地域和数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考流 | 验证归一化后成品净输出为 1 kg，并已声明产品子类、单件质量、每 kg 件数、合金、表面处理、性能等级、附件、场址、期间和大门状态。 | un-cpc-3-0-2025; ul-builders-hardware-pcr-2019 |
| `validation_rule_2` | 过程路线 | 每个已纳入过程图行必须有采集清单；每个被省略的条件过程必须有不适用声明，包括外包操作。 | us-epa-locking-devices-1995 |
| `validation_rule_3` | 原子流和 UUID | 验证每行仅有一个物理、化学、废物或能源交换，方向和流类型正确，属性与单位兼容，并在最终数据集发布前具有精确的 state-100 UUID。 |  |
| `validation_rule_4` | 金属质量平衡 | 调查金属投入与成品净质量、已分选废料、其他含金属残渣及在制品变化之间未解释的差额，并披露核对结果。 | us-epa-locking-devices-1995 |
| `validation_rule_5` | 表面处理水和废物 | 纳入表面处理时，核对供水、内部循环水、废水、蒸发和带出，并将处理污泥与废物转移记录核对，不得合并废水与污泥。 | us-epa-locking-devices-1995 |
| `validation_rule_6` | 包装 | 确认随产品出货的每种包装材料均单独记录，且成品净质量不含外包装。 | ul-builders-hardware-pcr-2019 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 方法学审查、精确流解析和数据集校验完成后，可作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 贱金属制锁、钥匙、锁具零件和配件的前景过程模型；需要工厂大门五金投入的产品 LCA 和生命周期模型 |
| allowed_use | 用于已声明的产品子类、合金、表面处理、生产路线、地域、技术和报告期；或在有记录的代表性评估后使用。 |
| excluded_use | 不得表示完整的门、家具、鞍具或门禁系统、非金属配件、安装或使用性能；未经调整不得表示实质不同的合金、表面处理、安防等级或制造路线。 |
| required_metadata | canonical PCR id；产品子类和功能；参考流 UUID；单件净质量和每 kg 件数；材料组成；表面处理；性能等级；随附附件；包装；过程图；场址和地域；外包操作；报告期；分配；上游数据；未解决流的处置 |
| required_quality_disclosure | 初级数据份额；仪表和秤覆盖；时间覆盖；产品分组和加权；质量平衡闭合；UUID 审核状态；替代数据；被排除操作；水和废物核对；不确定性和已知局限 |
| update_trigger | 产品设计、主要合金、表面处理体系、制造路线、场址、供应商组合、能源组合、包装或分配方法发生实质变化，年度投入或输出发生实质变化，或未解决的精确流得到解析时重新评估。 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05；缓存内容 SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | CPC 42992 的精确分类身份和层级语境 |
| `us-epa-locking-devices-1995` | 官方指南（`official_guidance`） | Jendrucko, R. J.; Hurst, B. T.; Looby, G. P.《锁闭装置制造商污染预防评估》。美国环境保护署，EPA/600/S-95/013，1995 年 8 月。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003VJ0.TXT（检索日期 2026-09-05） | 锁闭装置过程分解、金属坯料、机加工、清洗、热处理、表面处理、装配、包装、废料和废水处理污泥路径 |
| `ul-builders-hardware-pcr-2019` | 标准（`standard`） | UL Environment，《建筑相关产品和服务 PCR：建筑五金 EPD 要求》，2019。https://www.ul.com/sites/g/files/qbfpbp251/files/2019-07/ULE_PCR_Builder_Hardware_PartB_6-19-19.pdf（检索日期 2026-09-05） | 建筑五金范围、产品件数和质量披露、系统边界披露、制造地点披露、包装组成和路径披露 |
