---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-carded-wool-or-of-carded-fine-animal-hair-containing-85-or-more-by-wei-f89379c7
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 含羊毛或动物细毛的重量达85%或85%以上的粗梳羊毛或粗梳动物细毛机织织物

## 1. 范围与适用性

本 PCR 适用于以粗梳羊毛纱、粗梳动物细毛纱或二者组合制造、且羊毛和动物细毛合计至少占织物质量 85% 的机织织物厂门生产。范围包括纱线准备、织造、路线适用的湿法或热力整理以及最终检验。前景边界始于合格纱线进入织物工厂，止于制造完成且在厂门放行的织物。

本 PCR 不包括精梳羊毛或精梳动物细毛织物、羊毛和动物细毛含量低于 85% 的织物、针织或簇绒织物、服装制造、动物养殖、原毛洗涤、梳毛、纺纱、分销、使用和生命末期。除非报告数据包明确把包装计入所声明的产品状态，并将每个包装组件分别建模，否则包装不属于参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-carded-wool-or-of-carded-fine-animal-hair-containing-85-or-more-by-wei-f89379c7 |
| classification_refs | CPC 3.0：26520（exact） |
| covered_products | 以粗梳羊毛或粗梳动物细毛制成、且羊毛和动物细毛合计质量分数至少为 85% 的机织织物 |
| excluded_products | 精梳羊毛或精梳动物细毛机织织物；羊毛或动物细毛含量低于 85% 的织物；在所声明产品类别之外分类的针织、钩编、簇绒、涂层、层压或服装产品 |
| representative_product | 羊毛或动物细毛合计质量分数至少为 85% 的粗梳羊毛或粗梳动物细毛整理机织织物 |
| production_route | 合格粗梳羊毛或粗梳动物细毛纱进厂；经纱和纬纱准备；织造；适用的整理；检验和厂门放行 |
| market_state | 织物工厂厂门处的已制造成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以粗梳羊毛或粗梳动物细毛制成的机织织物 |
| How much | 按所声明交付含湿状态计的 1 kg 合格织物 |
| How well | 羊毛和动物细毛合计至少占质量的 85%；采用粗梳而非精梳纱线路线；产品符合所声明的组织、整理和质量规格 |
| How long or cycle | 厂门放行的一个生产批次；不表示使用阶段的服务期限 |
| reference_flow_link | 过程 `finishing_and_inspection` 的输出 `final_fabric_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 含羊毛或动物细毛的重量达85%或85%以上的粗梳羊毛或粗梳动物细毛机织织物 `d5a61944-e4b9-4a9c-9b26-b2f2b413d7d0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 羊毛和动物细毛质量分数；纤维物种；粗梳纱路线；织物组织和织法；幅宽和单位面积质量；颜色和整理；交付含湿状态；生产场址；生产期间；湿法整理路线；热力整理路线；包装纳入情况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品和材料交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化到按所声明交付含湿状态计的 1 kg 合格织物；保留实测毛重、合格产品质量，并披露任何水分修正。 |
| `composition_threshold` | 产品身份和纱线输入 | Mass fraction | % by mass | 通过物料清单、供应商记录或批次检测记录证明羊毛和动物细毛合计至少占质量的 85%；不得仅根据产品名称推断符合性。 |
| `area_mass_conversion` | 织物面积记录 | Mass per area and area | kg, m2, kg/m2 | 按面积或长度记录生产量时，使用实测合格面积和批次特定的单位面积质量计算质量；保留幅宽、长度和检测记录。 |
| `energy_unit_separation` | 电力、蒸汽和燃料 | Energy | kWh or MJ | 按计量或发票单位分别记录电力、外购蒸汽和每种燃料；以共同能源单位报告时保留换算因子及其来源。 |
| `water_balance_units` | 工艺水和废水 | Volume or Mass | m3 or kg | 保留实测水和废水单位；质量与体积相互换算时，披露所用密度和温度基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有成分证据的合格粗梳羊毛或粗梳动物细毛纱进入织物工厂厂门 |
| starting_condition_role | 上游产品输入；动物生产、洗毛、梳毛和纺纱负荷由上游数据集表示，不在本前景系统中重复计算 |
| product_classification_scope | 经审查的语义范围与 CPC 3.0 代码 26520 完全一致的机织织物 |
| recursive_input_rule | 当输入已经是同一产品类别的机织织物时，将其记录为单独引用的上游产品流，从披露的织物状态开始前景核算，并在接收过程核算中排除重叠的纱线准备和织造操作。 |
| upstream_dataset_requirement | 每项外购纱线或同类别织物输入都需要上游数据集，并披露其产品身份、纤维成分、粗梳路线、地域、期间和分配基准。 |
| disclosure | 披露外购输入状态、纳入的单元过程、湿法和热力整理路线、外包操作、排除的操作、包装处理、水分基准以及任何同类别递归输入。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_yarn_to_mill_gate` | 前景系统 | 从合格纱线进厂至厂门放行，纳入纱线准备、织造、所声明产品路线适用的全部整理、检验以及相关公用工程、工艺化学品、废物和直接排放。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_route_disclosure` | 过程选择 | 记录是否发生上浆、洗涤、缩绒、染色、干燥、热处理或化学整理；不得添加未发生的过程，也不得遗漏对合格产品有贡献的过程。 | `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | 前景记录 | 按装置和路线所支持的详细程度维护投入产出清单，覆盖纺织材料、每种工艺化学品、水、能源、废水、废气以及固体或液体废物。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | 经纱和纬纱准备 | required | 纳入合格纱线进厂后实施的准备，包括络筒、整经和路线适用的上浆。 | 将外购合格纱线转化为可上机织造的经纱和纬纱。 | 可上机纱线的 kg |
| `weaving` | 织造 | required | 纳入形成机织织物的全部织机操作。 | 生产坯布并记录纱线损失和织机电力。 | 坯布的 kg |
| `finishing_and_inspection` | 整理和最终检验 | required | 每项产品均纳入最终检验；湿法或热力整理操作仅在所声明路线实际发生时纳入。 | 生产厂门合格织物，并记录路线特定的水、化学品、热、燃料、废水和直接排放。 | 1 kg 合格织物 |

### 过程：经纱和纬纱准备（`yarn_preparation`）

#### 输入

##### 产品流

###### 合格粗梳羊毛或动物细毛纱（`carded_wool_yarn_input`）

该外购纱线建立所声明的起始条件。批次记录必须证明粗梳路线，且所得织物中羊毛和动物细毛合计含量至少为 85%。

- 选定流：Carded wool or carded fine animal hair yarn containing at least 85% wool or fine animal hair
- 流属性/单位：Mass / kg
- 数量规则：投入纱线准备批次的合格纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可上机纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_mass`
- 来源：`unsd-cpc-3-0`

###### 纱线准备用中压电力（`electricity_yarn_preparation`）

仅在本过程中记录络筒、整经、适用时的上浆设备、通风和过程控制所消耗的计量电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：纱线准备批次的计量或分摊电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可上机纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可上机经纱和纬纱（`prepared_yarn_output`）

该内部产品流记录准备后获准进入织造的纱线。

- 选定流：Prepared warp and weft yarn of carded wool or carded fine animal hair
- 流属性/单位：Mass / kg
- 数量规则：转移至织造的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个纱线准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_mass`
- 来源：`eu-textiles-bat-2022`

##### 废物流

###### 粗梳羊毛或动物细毛纱废料（`wool_yarn_waste_output`）

将织造前产生的纱头、损坏纱线和不可用纱线作为该独立废物流收集。

- 选定流：Carded wool or fine-animal-hair yarn waste
- 流属性/单位：Mass / kg
- 数量规则：离开纱线准备过程的纱线废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可上机纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_mass`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：织造（`weaving`）

#### 输入

##### 产品流

###### 可上机经纱和纬纱（`prepared_yarn_input`）

该内部输入是从纱线准备转入的实测可上机纱线。

- 选定流：Prepared warp and weft yarn of carded wool or carded fine animal hair
- 流属性/单位：Mass / kg
- 数量规则：投入织造批次的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_mass`
- 来源：`eu-textiles-bat-2022`

###### 织造用中压电力（`electricity_weaving`）

通过场址计量方法记录织机、适用时归属于织机的压缩空气制备、局部通风和织造控制用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：织造批次的计量或分摊电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 坯布（`grey_fabric_output`）

该内部产品流是织造后、路线适用整理前的织物。

- 选定流：Grey woven fabric of carded wool or carded fine animal hair containing at least 85% wool or fine animal hair
- 流属性/单位：Mass / kg
- 数量规则：转移至整理和检验的合格坯布实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个织造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_mass`
- 来源：`unsd-cpc-3-0`; `eu-textiles-bat-2022`

##### 废物流

###### 机织织物边角料（`wool_fabric_offcuts_output`）

将布边、开机布、损坏机织物和修剪损失记录为一个成分特定的固体废物流；不得与纱线废料或废水合并。

- 选定流：Woven-fabric offcuts of carded wool or carded fine animal hair
- 流属性/单位：Mass / kg
- 数量规则：离开织造过程的织物边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_mass`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：整理和最终检验（`finishing_and_inspection`）

#### 输入

##### 产品流

###### 进入整理的坯布（`grey_fabric_finishing_input`）

该输入是从织造转入的坯布。其质量和批次身份保持与纱线成分及粗梳路线的关联。

- 选定流：Grey woven fabric of carded wool or carded fine animal hair containing at least 85% wool or fine animal hair
- 流属性/单位：Mass / kg
- 数量规则：进入整理和检验批次的坯布实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_mass`
- 来源：`unsd-cpc-3-0`; `eu-textiles-bat-2022`

###### 湿法整理用工艺水（`process_water_finishing`）

仅当所声明产品路线发生洗涤、缩绒、染色、漂洗或其他水相整理步骤时记录工艺水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：供给适用整理批次的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`eu-textiles-bat-2022`

###### 整理用外购蒸汽（`steam_finishing`）

当外购蒸汽为缩绒、洗涤、染色、干燥或热力整理供热时单独记录蒸汽。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：输送至适用整理批次的计量或发票蒸汽量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_meter`
- 来源：`eu-textiles-bat-2022`

###### pH 控制用乙酸（`acetic_acid_finishing`）

仅当整理配方使用乙酸控制 pH 时，才将乙酸记录为该独立化学品输入。其他化学品必须在前景数据包中用各自的原子流行表示。

- 选定流：乙酸
- 流属性/单位：Mass / kg
- 数量规则：按批准配方发料并依据化学品库存记录核实的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_issue_mass`
- 来源：`eu-textiles-bat-2022`

###### 整理和检验用中压电力（`electricity_finishing`）

通过场址计量方法记录湿处理设备、烘干机、整理机、检验设备、通风和控制用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：整理和检验批次的计量或分摊电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`eu-textiles-bat-2022`

###### 现场直接供热用天然气（`natural_gas_finishing`）

仅当现场燃烧为适用的整理或干燥操作直接或间接供热时记录天然气；不得与外购蒸汽合并。

- 选定流：Natural gas in the gaseous state
- 流属性/单位：Energy / MJ
- 数量规则：归属于适用整理批次的计量天然气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_meter`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 厂门合格机织织物（`final_fabric_output`）

这是全部适用整理和最终检验后的声明参考产品。

- 选定流：含羊毛或动物细毛的重量达85%或85%以上的粗梳羊毛或粗梳动物细毛机织织物 `d5a61944-e4b9-4a9c-9b26-b2f2b413d7d0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按合格产品质量归一化后的 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 羊毛织物整理废水（`finishing_wastewater_output`）

记录湿法整理后、进入现场或场外处理前的废水。该水流须与未污染冷却水和固体废物分开。

- 选定流：Wool-fabric finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：适用整理批次的计量废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_meter`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 现场天然气燃烧产生的化石二氧化碳（`fossil_carbon_dioxide_output`）

仅当现场发生天然气燃烧且该排放作为前景释放被实测时，才向适用空气隔室记录化石二氧化碳。计算排放需要另行审查的因子和计算规则。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：归属于适用整理批次的化石二氧化碳实测排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emission_mass`
- 来源：`eu-textiles-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用纱线准备、织造和整理操作 | 优先采用计量、批次追踪、配方记录、机器时间或其他可将投入和产出直接归属于声明织物的细分方法，避免分配。 | `iso-14044-2006` |
| `allocation_physical_relationship` | 不可分割的多产品操作 | 无法实施细分时，采用能够反映共享投入或操作随各产出变化的、有文件依据的物理关系；只有在受影响操作证明该关系时才可采用质量分配。 | `iso-14044-2006` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的不可分割共产品 | 经济分配仅可作为最后的研究选择；披露价格、币种、价格期间、计算过程、敏感性以及无法采用物理关系的原因。 | `iso-14044-2006` |
| `allocation_waste_and_recovery` | 纱线废料、织物边角料、废水和回收材料 | 不得仅因废物流被送去回收就将其视为共产品。记录其实测质量和去向；任何避免负荷或再生含量约定须在前景单元过程清单之外披露。 | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_lot_mass` | `yarn_preparation`; `weaving`; `finishing_and_inspection` | yarn, grey fabric, accepted fabric | 地磅、校准秤、生产工单、物料清单、质量放行 | lot_id; material_id; fibre_species; carded_route; wool_fine_hair_fraction; gross_mass; accepted_mass; moisture_condition; timestamp | 将校准质量记录和质量放行与每个生产批次关联。 | kg | 每批 | 完整报告期间 | 全部范围内产线和外包步骤 | 按过程和批次汇总合格、发料、转移和不合格质量，再进行参考流归一化。 | 校准证书；供应商成分证据；批次质量放行；核对记录 |
| `cp_electricity_meter` | `yarn_preparation`; `weaving`; `finishing_and_inspection` | medium-voltage electricity | 分表、生产电表，或带分摊记录的发票 | meter_id; start_reading; end_reading; timestamp; process_id; lot_id; allocation_driver | 有过程分表时读取分表；否则记录场址电表向机器或批次分摊的方法。 | kWh | 每批或每个计量间隔 | 完整报告期间 | 全部范围内设备 | 按过程汇总消耗；仅分摊有文件依据的共表余量。 | 电表校准或电费发票；分摊工作表 |
| `cp_water_meter` | `finishing_and_inspection` | process water | 流量计和湿处理批次记录 | meter_id; start_reading; end_reading; lot_id; operation; reuse_volume; timestamp | 对每个适用湿法整理批次分别记录供水、回用水和循环水。 | m3 | 每批或每个计量间隔 | 完整报告期间 | 全部湿法整理线 | 按批次汇总外部净水输入，不与废水净额相抵。 | 流量计检查；水平衡；批次记录 |
| `cp_steam_meter` | `finishing_and_inspection` | purchased steam | 蒸汽表或供应商发票 | meter_id; delivered_quantity; pressure; temperature; condensate_return; lot_id; timestamp | 测量输送蒸汽，并保留能量换算所用的压力、温度和凝结水返回信息。 | kg or MJ | 每批或每个计量间隔 | 完整报告期间 | 全部范围内用汽设备 | 仅按有文件依据的焓基准换算；按批次汇总。 | 仪表检查；发票；换算工作表 |
| `cp_chemical_issue_mass` | `finishing_and_inspection` | acetic acid | 批准配方、批次单、化学品领退料记录 | chemical_name; supplier_product; concentration; issued_mass; returned_mass; lot_id; operation; timestamp | 将配方投加量与批次净领料量核对，并保留浓度。 | kg | 每批 | 完整报告期间 | 全部适用整理配方 | 仅汇总该化学品的净领料质量；每种其他化学品均建立单独原子记录。 | 配方批准；库存核对；安全数据表 |
| `cp_natural_gas_meter` | `finishing_and_inspection` | natural gas | 燃气表或供应商发票 | meter_id; start_reading; end_reading; energy_basis; lot_id; equipment; timestamp | 使用有文件依据的运行记录，将计量燃料归属于运行设备和批次。 | m3 or MJ | 每批或每个计量间隔 | 完整报告期间 | 全部范围内燃烧设备 | 保留原始体积和热值基准；按批次汇总能量。 | 仪表检查；发票；热值证书 |
| `cp_solid_waste_mass` | `yarn_preparation`; `weaving` | yarn waste and fabric offcuts | 分类废物容器秤和转运记录 | waste_name; composition; container_id; gross_mass; tare_mass; destination; lot_id; timestamp | 称量每项分类废物流，并关联其产生过程和批次。 | kg | 每容器或每次转运 | 完整报告期间 | 全部范围内产线 | 按原子废物身份、过程和去向汇总净质量。 | 秤具检查；废物转移记录；分类记录 |
| `cp_wastewater_meter` | `finishing_and_inspection` | wool-fabric finishing wastewater | 废水流量计和批次日志 | meter_id; flow; pH; temperature; conductivity; lot_id; discharge_route; timestamp | 将受污染整理水流与可回用或未污染水流分开计量。 | m3 | 每批或每个计量间隔 | 完整报告期间 | 全部湿法整理排放点 | 按批次和路线汇总排放；不得从工艺水输入中扣减。 | 仪表检查；水平衡；排放日志 |
| `cp_direct_air_emission_mass` | `finishing_and_inspection` | fossil carbon dioxide to air | 经校准的连续或周期排放测量 | emission_point; compartment; measured_concentration; gas_flow; duration; lot_id; method; timestamp | 使用适用的批准方法测量已识别排放点，仅归属服务于该批次的运行时段。 | kg | 适用测量间隔 | 代表报告期间和运行路线 | 全部相关范围内排放点 | 对归属运行时段内的实测质量流量积分；不得替换为无来源因子。 | 校准；实验室报告；运行日志；方法记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部采集清单行 | 归一化数量 = 采集的过程或批次数量 / 合格最终织物质量 | 采集数量；合格最终织物质量 | 每 1 kg 合格最终织物的数量 | `iso-14044-2006` |
| `fabric_mass_from_area` | 按面积或长度记录的批次 | 织物质量 = 合格长度 × 合格幅宽 × 批次特定单位面积质量 | 合格长度；合格幅宽；实测单位面积质量 | 合格织物质量 | `iso-14044-2006` |
| `process_mass_reconciliation` | 纱线准备、织造和整理 | 将实测产品输入与合格产品输出、单独计量的废物、在制品和有记录的库存变化核对；调查未解释余量，不得强行闭合。 | 输入质量；输出质量；废物质量；在制品；库存变化 | 过程质量平衡发现 | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和纱线输入 | 保留精确产品名称、成分证据、纤维物种、粗梳路线证据、批次身份和已接受的 Tiangong UUID 状态。 | 供应商规格；物料清单；批次检测；UUID 审查状态 |
| `dq_measurement` | 质量、电力、水、蒸汽、燃料、废水和排放 | 使用经校准或受控的仪表和秤具；保留原始读数、单位、换算基准和缺口处理。 | 校准或核查记录；原始仪表日志；发票；计算工作表 |
| `dq_temporal` | 报告期间 | 覆盖所声明期间内全部范围内生产，并识别停机、开机、异常运行和缺失时段。 | 生产日历；仪表覆盖日志；异常清单 |
| `dq_completeness` | 过程清单 | 对每个纳入过程核对材料、水、能源、化学品、废物、废水和相关直接排放记录，不得使用聚合集合流。 | 投入产出清单；水平衡；能量平衡；化学品清单；废物台账 |
| `dq_outsourcing` | 外包纱线准备、织造或整理 | 识别承包方、转移产品状态、纳入操作、初级数据覆盖和任何背景替代。 | 委托加工记录；转移单据；供应商数据集 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认精确参考产品流 UUID、Mass 流属性 UUID、1 kg 参考数量和全部必需限定信息；缺失任何必需限定信息时校验失败。 | `unsd-cpc-3-0` |
| `validate_category_threshold` | 产品和纱线成分 | 确认羊毛和动物细毛合计至少占质量的 85%，且采用粗梳而非精梳路线。 | `unsd-cpc-3-0` |
| `validate_process_route` | 过程图 | 依据实际生产记录确认纱线准备、织造、整理、检验、外包和排除项；每项实际实施的湿法或热力操作均须表示。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_inventory` | 过程清单 | 确认每项交换仅表示一个具体产品、电力或能源载体、化学品、废物或基本流；拒绝集合标签，并拒绝缺乏精确身份依据的 UUID。 | `eu-textiles-bat-2022` |
| `validate_input_output_inventory` | 前景完整性 | 确认适用路线分别记录纺织材料、每种工艺化学品、水、电力、蒸汽、每种燃料、废水、固体废物和相关直接排放。 | `eu-textiles-bat-2022` |
| `validate_mass_reconciliation` | 每个过程和最终参考 | 核对批次投入、产出、废物、在制品和库存变化；报告未解释余量，不得静默强行闭合。 | `eu-textiles-bat-2022` |
| `validate_allocation_disclosure` | 共用和多产品操作 | 确认细分证据或所选分配关系、计算、数据期间和敏感性披露。 | `iso-14044-2006` |
| `validate_data_coverage` | 发布数据集 | 确认时间、场址、路线、外包操作、仪表和记录覆盖，并披露全部缺口或替代。 | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 厂门机织织物前景生产数据集；经审查后可用作 secondary_dataset 或 background_dataset |
| downstream_use | 构建 TianGong `process` 记录以及消费 CPC 26520 机织织物的下游 `lifecyclemodel` 投影 |
| allowed_use | 产品与所声明纤维成分、粗梳路线、组织、整理、地域、期间、水分基准和厂门边界相匹配的研究 |
| excluded_use | 精梳羊毛织物、低于 85% 阈值的织物、针织或簇绒纺织品、服装制造、使用阶段性能，以及在未补充数据集时需要被省略上下游阶段的产品系统 |
| required_metadata | PCR id；精确产品流 UUID；产品和纱线成分；纤维物种；粗梳路线证据；织法和组织；幅宽；单位面积质量；整理；含湿状态；场址；期间；过程路线；外包操作；分配；截断和包装处理 |
| required_quality_disclosure | 初级数据占比；仪表和秤具覆盖；成分和质量检测证据；时间和场址覆盖；缺失记录；替代；未解决 UUID；分配方法；质量平衡发现；水、能源、化学品、废物、废水和直接排放完整性 |
| update_trigger | 纤维成分、粗梳/精梳路线、织法、整理、场址、过程路线、能源或水系统、化学品配方、分配、上游纱线来源、计量系统、参考流身份或重要证据来源发生变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》，CPC 资源与结构，https://unstats.un.org/unsd/classifications/Econ/CPC | 产品类别名称、成分阈值和分类范围 |
| `jrc-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Textiles Industry》，2023 年 1 月发布，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | 织物生产、预处理、染色和整理等纺织过程分解 |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，CELEX 32022D2508，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022D2508 | 投入产出清单、织物生产、上浆、织造、整理、水、能源、化学品、废物、废水和排放采集规则 |
| `iso-14044-2006` | standard | ISO 14044:2006，《Environmental management — Life cycle assessment — Requirements and guidelines》，https://www.iso.org/standard/38498.html | 清单归一化、分配层级、报告和数据质量披露 |
