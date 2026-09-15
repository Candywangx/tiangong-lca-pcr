---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-for-the-goods-of-subclasses-46910-46921-and-46929-electrical-parts-n-e-c-of-machi-15eedd3f
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类 46910、46921 和 46929 所列产品的零件；机器或器具的其他未另分类电气零件

## 1. 范围与适用性

本 PCR 适用于单独供应的电气点火、启动、发电、照明、信号、警报及相关设备零件，这些设备属于 CPC 子类 46910、46921 和 46929；也适用于未归入其他更具体产品类别的机器或器具电气零件。本 PCR 为已声明的零件系列和生产路线规定从摇篮到制造工厂门口的规则。

本 PCR 覆盖产品特定的材料获取、报告工厂实施的部件加工或成型、适用时的清洗和表面处理、装配、出厂测试，以及跨越工厂门边界的销售包装。前景数据包必须识别具体零件，不得把整个 CPC 类别视为同质设计。

完整设备、非电气机械零件、单独分类的电子元件，以及已归入电动机、发电机、变压器、变流器、电感器、配电或控制设备、电池、灯具或其他具名设备之更具体类别的零件不在范围内。配送、安装、宿主设备使用、维护和寿命终止阶段不属于默认边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-for-the-goods-of-subclasses-46910-46921-and-46929-electrical-parts-n-e-c-of-machi-15eedd3f |
| classification_refs | CPC 3.0：46960（精确分类语境） |
| covered_products | 单独供应的 CPC 46910、46921 和 46929 所列产品的零件；机器或器具的其他未另分类电气零件 |
| excluded_products | 完整设备；非电气机械零件；归入其他具体 CPC 子类的电子元件和电气零件 |
| representative_product | 供装入已声明的点火、启动、信号、警报或其他机器/器具应用，符合规格并可销售的电气零件 |
| production_route | 产品特定的金属成形或机械加工、聚合物成型、清洗或表面处理、装配、固化、检验、电气或功能测试及包装组合；声明每个实际采用的路线步骤 |
| market_state | 在制造工厂门口单独供应的成品零件，仅含已声明跨越该边界的包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个单独供应的 CPC 46960 机器或器具电气零件 |
| How much | 制造工厂门口 1 kg 可销售零件输出 |
| How well | 符合已声明的图纸、材料规格、电气额定值、适用时的绝缘或防护等级及出厂验收测试 |
| How long or cycle | 成品零件的一次工厂门交付；不表示其在宿主设备中的使用寿命 |
| reference_flow_link | 由 `reference_product` 表示的已验收可销售输出实测质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 单独供应的 CPC 46960 机器或器具电气零件（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件系列及宿主设备应用；图纸或型号标识；主要材料和物料清单；单件质量；适用时的电气额定值及绝缘或防护等级；加工、表面处理、装配和测试路线；验收准则及不合格品处置；再生含量声明及供应商地域；制造地域及基准期；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有按质量归一化的行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对已验收的可销售输出称量；不含声明市场状态之外的运输包装。将每项清单数量归一化至恰好 1 kg 已验收输出。 |
| `item_to_mass` | 按件计数的生产和包装记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只有使用同期实测平均净质量并保留样本量、批次和测量记录时，才可把件数换算为质量。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表计量的能量单位并披露所有换算系数；记录允许时，应分别保留加工和装配/测试电表数据。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在归一化气体体积前，声明电表参考条件、账单期间及对已声明路线的归属。 |
| `water_mass` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量；按体积换算质量时，记录温度、密度假设和原始读数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入报告工厂的外购金属、聚合物、树脂、化学品、能源、水、部件和包装；适用时逐项声明供应商、牌号、再生含量、地域及交付状态 |
| starting_condition_role | 进入产品特定前景加工、表面处理、装配、测试和包装过程的从摇篮到工厂门背景投入 |
| product_classification_scope | 一个已声明的 CPC 46960 零件系列和市场状态；不含完整设备及归入更具体类别的零件 |
| recursive_input_rule | 外购投入本身若属于 CPC 46960 零件，应以供应商数据集作为上游产品投入记录一次；不得在接收方前景过程中递归重建其制造清单 |
| upstream_dataset_requirement | 对每项外购材料、部件、能源载体、水、化学品和包装采用地域和技术上有代表性的上游数据集；披露代理和未解决身份 |
| disclosure | 声明零件设计、物料清单、实际过程、工厂地域、基准期、成品率和不合格品、内部回收、包装边界、分配、排除项及所有偏离本 PCR 的情况 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | 产品系统边界 | 纳入产品特定的上游投入及直至工厂门口的所有实际现场加工、表面处理、装配、测试和销售包装作业；除非研究明确扩展边界，否则不含配送、安装、使用和寿命终止阶段。 | `ec-product-environmental-footprint-method-2021` |
| `sb_product_specific_records` | 前景数据 | 使用产品特定物料清单和企业特定制造活动数据；只有通过已记录的因果分配归属于已声明零件系列后，才可使用工厂总量。 | `ec-product-environmental-footprint-method-2021` |
| `sb_conditional_routes` | 条件过程和流 | 某条件路线实际用于已声明产品时，纳入该路线及其原子交换；只有具备生产路线证据时才可标记为不适用。 | `ifc-metal-plastic-rubber-ehs-2007` |
| `sb_completeness` | 排除项和截断 | 识别所有材料、能源、水、废物和直接排放交换；任何排除均须论证并量化潜在重要性，不得因 UUID 或范围未解决而省略流。 | `ec-product-environmental-footprint-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_and_finishing` | 部件加工与表面处理 | conditional | 报告工厂为已声明零件实施成形、机械加工、成型、粘接、清洗、热处理或表面处理时纳入。 | 前景材料转化与表面处理 | 可归属于已声明零件系列的实测合格品和不合格品质量 |
| `part_assembly_and_testing` | 零件装配与出厂测试 | required | 始终纳入最终装配；对于单体零件，纳入最终检验和验收测试。 | 前景完工与质量验收 | 实测已验收可销售输出和测试活动 |
| `saleable_packaging` | 工厂门口销售包装 | conditional | 瓦楞纸箱随参考产品跨越工厂门边界，且不是从已声明市场状态中排除的可周转资产时纳入。 | 前景包装 | 发放给已验收产品的包装质量 |

### 过程：部件加工与表面处理（`component_fabrication_and_finishing`）

#### 输入

##### 产品流

###### 铜导体原料（`copper_wire`）

只有铜线材实际装入或用于已声明零件路线时才记录。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass / kg
- 数量规则：可归属于已验收输出及相应不合格品的实测铜线材净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`ec-product-environmental-footprint-method-2021`

###### 低碳钢板（`low_carbon_steel_sheet`）

已声明牌号的低碳钢板用于零件冲压、成形或机械加工时记录；不得以合金钢、不锈钢、镀层波纹板、厚板或杆材 UUID 代替。

- 选定流：低碳钢板（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：可归属于已验收输出及相应不合格品的实测低碳钢板净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`ec-product-environmental-footprint-method-2021`

###### 聚丙烯成型原料（`polypropylene_granulate`）

只有采用成型或其他方式加入 PP 的路线才记录聚丙烯粒料，并声明牌号、添加剂和再生含量。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：可归属于已验收输出及相应不合格品的实测 PP 粒料领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`ec-product-environmental-footprint-method-2021`

###### 环氧粘接或灌封树脂（`epoxy_resin`）

只有已声明的装配、涂覆、灌封或封装路线消耗环氧树脂时才记录；实际使用的固化剂和溶剂应另列原子流行。

- 选定流：环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位：Mass / kg
- 数量规则：可归属于已验收输出和不合格品的实测混合或领用环氧树脂质量，不含另行记录的固化剂或溶剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`ec-product-environmental-footprint-method-2021`

###### 加工用电（`fabrication_electricity`）

记录经计量或因果分配至成形、机械加工、成型、清洗、表面处理、固化及相关控制的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于已声明零件路线的加工和表面处理用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-product-environmental-footprint-method-2021`

###### 工艺用水（`process_water`）

只有供清洗、漂洗、冷却或槽液补充的工艺用水跨越边界时才记录；不得与废水合并。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：可归属于已声明零件路线的实测工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：`ifc-metal-plastic-rubber-ehs-2007`

###### 氢氧化钠清洗剂（`sodium_hydroxide`）

只有碱性清洗、蚀刻或表面处理槽消耗氢氧化钠时才记录；声明供货浓度，并一致地把溶液质量换算成 NaOH 产品质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：已声明路线消耗的外购氢氧化钠产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：`ifc-metal-plastic-rubber-ehs-2007`

###### 工艺热用天然气（`natural_gas`）

只有气态天然气在现场燃烧并为可归属至已声明路线的烘箱、固化、干燥或热处理供热时才记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在有记录参考条件下，为已声明路线燃烧的实测天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`ipcc-stationary-combustion-2006`

#### 输出

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开过程的已分流工业后钢边角料和不合格钢件；跨界前返回的内部闭环材料单独跟踪且不得重复计数。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的实测钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ifc-metal-plastic-rubber-ehs-2007`

###### 铜加工废料（`copper_scrap`）

记录离开过程的已分流铜边角料、线头和不合格铜件，并声明污染情况和处理路线。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的实测铜废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ifc-metal-plastic-rubber-ehs-2007`

###### 聚丙烯成型废料（`polypropylene_waste`）

记录离开过程的 PP 浇道料、清机料、飞边及不合格成型 PP；返回成型工序的内部回用料在物料平衡中跟踪，不计作外部废物输出。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的实测聚丙烯废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ifc-metal-plastic-rubber-ehs-2007`

###### 金属加工和表面处理废水（`metal_finishing_wastewater`）

把已声明清洗、漂洗、切削液、喷砂、去毛刺或表面处理路线产生的废水作为一项路线特定水相废物流记录，并披露处理状态和主要污染物。

- 选定流：金属加工和表面处理废水（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：外部处理前离开已声明前景路线的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-metal-plastic-rubber-ehs-2007`

##### 基本流

###### 天然气燃烧直接排放的化石源二氧化碳（`fossil_carbon_dioxide`）

仅记录分配给已声明工艺热过程的现场天然气燃烧直接化石源 CO2；上游电力和燃料供应排放保留在背景数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据已记录天然气消耗量及与地域、燃料和技术相适用的有据排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_records`
- 来源：`ipcc-stationary-combustion-2006`

### 过程：零件装配与出厂测试（`part_assembly_and_testing`）

#### 输入

##### 产品流

###### 装配和测试用电（`assembly_test_electricity`）

记录装配设备、未在加工过程计量的固化、检验以及电气或功能测试所用外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于已验收输出和不合格品的装配及出厂测试用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-product-environmental-footprint-method-2021`

#### 输出

##### 产品流

###### 已验收参考产品（`reference_product`）

仅记录符合已声明图纸、电气或功能要求及出厂验收准则的零件。不合格零件应归入其组成材料废物流行或新增一项原子废物流行。

- 选定流：单独供应的 CPC 46960 机器或器具电气零件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：恰好 1 kg 实测已验收可销售输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ec-product-environmental-footprint-method-2021`

### 过程：工厂门口销售包装（`saleable_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_boxes`）

只有瓦楞纸箱随参考产品离开工厂时才记录；排除作为工厂资产保留的可周转箱，其他包装组件应另列原子流行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：发放给已验收可销售输出的实测瓦楞纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`ec-product-environmental-footprint-method-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用过程和设备 | 尽可能通过细分生产步骤，并采用产品特定电表、领料记录、机器工时、测试循环和废物记录来避免分配。 | `ec-product-environmental-footprint-method-2021` |
| `allocation_physical_relation` | 剩余共用负荷 | 无法细分时，按有记录的物理因果关系分配，例如机器工时、能源需求、加工质量或测试持续时间；只有质量份额能合理反映负荷驱动因素时才使用简单质量分配。 | `ec-product-environmental-footprint-method-2021` |
| `allocation_scrap_boundary` | 废料和内部回收 | 按实际处理路线报告跨越前景边界的废料。在物料平衡中跟踪内部回用料或重熔循环；除非另行声明的下游方法要求并记录，否则不得计入避免负荷。 | `ec-product-environmental-footprint-method-2021` |
| `allocation_rejects` | 不合格零件 | 将不合格生产的材料、能源、水和处理负荷归入已验收参考产品；只有不合格材料成为具有单独论证功能和分配方法的共产品时方可例外。 | `ec-product-environmental-footprint-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging_records` | `component_fabrication_and_finishing`; `saleable_packaging` | 铜线材、钢板、PP 粒料、环氧树脂和瓦楞纸箱 | 采购、仓库领用、退料和库存记录 | 材料身份；牌号；供应商；批次；期初库存；入库；领用；退料；期末库存；再生含量 | 将产品特定仓库领用及库存变动与已声明路线核对 | kg | 每批，按月汇总 | 至少 12 个有代表性的月份或完整生产周期 | 报告工厂生产已声明零件的所有产线 | 净消耗 = 期初库存 + 入库 - 期末库存 - 有记录退料；按已验收输出归一化 | 采购文件、批次单、库存核对和物料清单 |
| `cp_energy_records` | `component_fabrication_and_finishing`; `part_assembly_and_testing` | 外购电力 | 分表、公用工程电表和设备记录 | 电表编号；期初和期末读数；单位；产线；运行小时；零件系列输出 | 优先分表；否则按经验证的因果驱动因素分配 | 电表计量能量单位 | 连续或每班，按月汇总 | 与输出记录相同期间 | 所有适用的加工、装配和测试设备 | 扣除有记录的非生产负荷，将归属电量按已验收输出归一化 | 电表校准、公用工程账单核对和分配工作表 |
| `cp_water_and_chemical_records` | `component_fabrication_and_finishing` | 工艺用水和氢氧化钠 | 电表、配槽、采购和浓度记录 | 水表读数；化学品质量；浓度；槽号；补加；排槽；路线 | 计量用水并将化学品领用与槽液日志核对 | kg；浓度分数 | 每批或每班，按月汇总 | 与输出记录相同期间 | 每条适用的清洗或表面处理线 | 仅归属路线特定消耗，明确换算溶液/产品基准，并按已验收输出归一化 | 校准电表、槽液日志、安全数据表、采购记录和核对表 |
| `cp_fuel_records` | `component_fabrication_and_finishing` | 天然气和直接化石源 CO2 | 燃气表、账单、烘箱日志和排放因子记录 | 燃气体积；参考条件；低位发热量；设备；运行时间；因子；因子地域和年份 | 将电表与账单核对，并按设备实测使用情况归属 | m3；kg CO2 | 连续或每个账单期 | 与输出记录相同期间 | 适用的现场烘箱、干燥和热处理设备 | 将燃料归属至路线；按 `cr_stationary_combustion_co2` 计算 CO2；二者均按已验收输出归一化 | 电表/账单核对和有据因子溯源 |
| `cp_waste_records` | `component_fabrication_and_finishing` | 钢废料、铜废料和聚丙烯废料 | 容器称重、转移和处理记录 | 废物身份；皮重；毛重；净重；污染；内部回用；去向；处理 | 称量每项已分流废物并核对转移记录 | kg | 每次外运或每批，按月汇总 | 与输出记录相同期间 | 所有可归属于路线的废物收集点 | 仅计入跨越边界的废物；按已验收输出归一化 | 校准地磅单、转移单和内部回用台账 |
| `cp_wastewater_records` | `component_fabrication_and_finishing` | 金属加工和表面处理废水 | 流量计、槽罐、分批排放和分析记录 | 体积或质量；密度；路线；处理状态；排放时间；主要污染物 | 连续排放用流量计，分批排放逐批测量；保留有代表性的分析 | kg | 连续或每次排放，按月汇总 | 与输出记录相同期间 | 每条适用的清洗和表面处理线 | 必要时用有据密度换算体积，并将外部处理前质量按已验收输出归一化 | 仪表校准、排放日志、实验室报告和处理记录 |
| `cp_saleable_output_records` | `part_assembly_and_testing` | 已验收参考产品和不合格品 | 生产、称重、检验和测试记录 | 型号；批次；生产件数；合格件数；不合格件数；净质量；测试结果；处置 | 称量已验收输出，并与检验和测试处置核对 | kg | 每批，按月汇总 | 与所有投入记录相同期间 | 报告工厂生产已声明零件的所有产线 | 仅汇总合格净质量；将不合格品与废物或返工记录核对 | 秤具校准、生产工单、检验报告和测试记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize_reference` | 每项清单行 | 归一化数量 = 可归属路线的行数量 / 已验收参考产品质量。 | 行数量；`cp_saleable_output_records` 的已验收质量 | 每 1 kg 已验收参考产品的数量 | `ec-product-environmental-footprint-method-2021` |
| `cr_net_material_use` | 材料和包装投入 | 净用量 = 期初库存 + 入库 - 期末库存 - 有记录退料；将结果与产品、废物、排放和库存变化核对。 | `cp_material_and_packaging_records` 的库存和领用字段 | 净投入质量 | `ec-product-environmental-footprint-method-2021` |
| `cr_stationary_combustion_co2` | `fossil_carbon_dioxide` | 直接 CO2 = 归属燃料消耗 × 相容且有据的 CO2 排放因子；仅在记录低位发热量和参考条件时把体积换算为能量。 | 天然气消耗；必要时的低位发热量；适用 CO2 因子 | kg 化石源 CO2 | `ipcc-stationary-combustion-2006` |
| `cr_mass_balance` | 加工和装配 | 对每种主要材料核对：投入 = 合格产品含量 + 外部废物 + 有记录排放 + 期末在制品 - 期初在制品；调查未解释差额。 | 材料记录；已验收输出；废料；排放；在制品 | 材料特定平衡及未解释差额 | `ec-product-environmental-footprint-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别一个零件系列、型号或图纸、宿主设备应用、材料规格、适用额定值、测试准则、路线和市场状态。 | 图纸、物料清单、规格、检验记录和数据集元数据 |
| `dq_primary_data` | 前景制造 | 对物料清单和制造活动使用产品或路线特定的一手数据；记录从工厂共用总量进行的每项分配。 | 电表、领料记录、生产工单、分配工作表及责任人批准 |
| `dq_temporal_alignment` | 所有前景行 | 投入、输出、废物和已验收生产使用相同代表期间，通常至少 12 个月或完整生产周期；解释停产和异常批次。 | 期间核对和生产日历 |
| `dq_completeness` | 清单 | 核对完整物料清单，并为上述共同行未表示的每项其他实际材料、部件、化学品、包装、废物或直接基本流增加一项原子流行。 | 物料清单交叉表、流台账、物料平衡和有据排除项 |
| `dq_representativeness` | 上游数据集和因子 | 记录技术、地域和时间代表性，并披露每项代理、未解决 UUID、因子来源和处理状态假设。 | 数据集元数据、来源记录、代理理由和数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 零件系列、型号或图纸、宿主应用、规格、适用额定值、路线、市场状态、已验收输出质量或包装状态缺失时，校验失败。 | `un-cpc-3-structure-2025`; `un-cpc-3-explanatory-notes-2025` |
| `validation_inventory_completeness` | 物料清单和过程清单 | 确认每项实际物料、能源、水、化学品、包装、废物和直接排放交换均有一项原子行，且排除项有据。 | `ec-product-environmental-footprint-method-2021` |
| `validation_route_conditions` | 条件过程和流 | 确认每个条件行均有生产证据支持或明确不适用；不得默默省略表面处理、燃烧、废水、废料或包装。 | `ifc-metal-plastic-rubber-ehs-2007` |
| `validation_balances` | 材料和活动数据 | 对同一期间的已验收输出、不合格品、在制品、主要材料、燃料和共用仪表分配进行核对；调查材料未解释差额及账单/电表差额。 | `ec-product-environmental-footprint-method-2021` |
| `validation_combustion` | 天然气和直接化石源 CO2 | 燃烧天然气时，要求相容排放因子、低位发热量或直接质量/体积基准、设备归属，以及相匹配的直接化石源 CO2 行。 | `ipcc-stationary-combustion-2006` |
| `validation_uuid_integrity` | Tiangong 身份 | 仅使用经直接审计的 state-100 精确 UUID；`reference_product`、`low_carbon_steel_sheet` 和 `metal_finishing_wastewater` 在获得分类、状态、属性、单位及双语均一致的精确记录前保持未解决。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个单独供应的 CPC 46960 电气零件之产品及路线特定、从摇篮到制造工厂门口的清单数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 把已声明零件建模为宿主设备投入；或在边界一致时比较功能和技术等效零件的生产情景 |
| excluded_use | 表示完整设备；推断配送、使用、寿命、维护或寿命终止；在未另行论证功能等效性的情况下比较不同零件系列或电气功能 |
| required_metadata | 规范 PCR id 及发布后的版本；零件系列和图纸/型号；宿主应用；单件质量；材料规格和物料清单；额定值和测试准则；路线；工厂和供应商地域；基准期；合格率和不合格品；分配；上游数据集；包装状态；未解决身份和代理 |
| required_quality_disclosure | 一手数据占比；电表和秤具覆盖率；时间、技术和地域代表性；物料平衡结果；分配驱动因素；缺失流；数据缺口；不确定性；因子溯源；内部回收和外部废物处理 |
| update_trigger | 零件设计、物料清单、供应商或再生含量、生产或表面处理路线、测试制度、工厂能源或供水系统、分配驱动因素、包装、因子、上游数据集或重要数据质量缺口发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 46960 正式身份及所引用子类标题 |
| `un-cpc-3-explanatory-notes-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版解释性说明，2025-06-30，子类 46960，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-09-05） | 产品边界身份及分类解释 |
| `ifc-metal-plastic-rubber-ehs-2007` | `official_guidance` | 世界银行集团/IFC，《金属、塑料和橡胶制品制造业环境、健康与安全指南》，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf（检索日期：2026-09-05） | 材料加工范围；成形、清洗、表面处理、废水、废料和直接排放过程分解 |
| `ec-product-environmental-footprint-method-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，附件一《产品环境足迹方法》，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索日期：2026-09-05） | 声明单位、产品特定物料清单、企业特定活动数据、边界完整性、细分、分配、一手数据采集和数据质量 |
| `ipcc-stationary-combustion-2006` | `method_factor` | IPCC，《2006 年国家温室气体清单指南》，第 2 卷第 2 章“固定燃烧”，https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf（检索日期：2026-09-05） | 根据燃料消耗量和相容排放因子计算固定燃烧直接 CO2 |
