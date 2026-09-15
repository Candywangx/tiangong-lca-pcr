---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fire-extinguishers-spray-guns-and-similar-appliances-steam-or-sand-blasting-machines-an-c73ef8b9
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 灭火器；喷枪及类似器具；蒸汽喷射或喷砂机器及类似喷射机器；用于喷射、喷散或喷洒液体或粉末的机械器具，但农业或园艺用器具除外

## 1. 范围与适用性

本 PCR 适用于完整灭火器、喷枪及类似器具、蒸汽喷射或喷砂机器及类似喷射机器，以及用于喷射、喷散或喷洒液体或粉末的其他机械器具的工厂制造。边界涵盖制造场址大门处、按声明配置交付且可投放市场的成品器具；只有在灭火剂或工艺介质随产品一并供应时，才将其充装量计入。

农业和园艺用喷洒器具、单独供应的零部件、不含器具而单独销售的灭火制剂，以及配送、安装、使用、维护、再充装和报废阶段不在本 PCR 范围内。数据生产者应选择并声明一个产品型号或按产量加权的产品系列；不得以宽泛的分类标题将功能不同的器具合并平均而不披露产品组合。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fire-extinguishers-spray-guns-and-similar-appliances-steam-or-sand-blasting-machines-an-c73ef8b9 |
| classification_refs | CPC 3.0: 43923（`un-cpc-3-0-structure-2025`） |
| covered_products | 完整灭火器；喷枪及类似器具；蒸汽喷射或喷砂机器及类似喷射机器；其他用于喷射、喷散或喷洒液体或粉末的非农业、非园艺机械器具 |
| excluded_products | 农业或园艺用喷洒器具；单独供应的零部件；不含器具的灭火制剂；配送、使用、再充装、维护和报废服务 |
| representative_product | 范围内一个已声明的成品器具型号，或一个披露加权方式的按产量加权产品系列 |
| production_route | 外购材料和部件接收；按路线适用的制造与连接；按路线适用的水基清洗；装配、可选充装、功能或耐压试验及销售包装 |
| market_state | 制造场址大门处经检验合格、可投放市场的成品器具，并声明随附充装物、附件和销售包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够完成其所声明喷射、喷散、喷洒、灭火、蒸汽喷射或喷砂功能的成品器具 |
| How much | 1 kg 可投放市场的成品器具 |
| How well | 符合所声明的产品规范，并按供应配置通过制造商适用的验收试验 |
| How long or cycle | 一次工厂门交付；使用寿命和使用循环不属于本质量归一化制造参考，开展下游功能比较时应另行声明 |
| reference_flow_link | 参考流严格等于 `finished_appliance_output` 所记录 CPC 43923 成品器具输出的 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 灭火器，喷枪及类似器具，喷气或喷砂机及类似喷射机器，液体或粉末投射、弥散或喷射用机械设备，农业或园艺用器具除外 `3efb484d-b04a-455f-97df-130b2ed8724f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型和型号；拟喷射介质；额定容量或处理量；适用时的工作压力；适用产品规范；验收试验方法和结果；随附充装物和附件；是否包含包装；生产地域；制造技术；报告期；适用时的产品系列加权方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考器具 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 应按声明的供应配置一致计量成品净质量。只有在声明包含时才计入充装物、附件和销售包装；不得在同一个分母中混合包含和不包含这些项目的配置。 |
| `energy_conversion` | 电力清单 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 原始记录保留电表单位；仅在计算时按 1 kWh = 3.6 MJ 换算，并保留原始读数和换算过程。 |
| `gas_volume_basis` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量参考条件或供应商结算基准。未经换算和披露，不得合并温度或压力条件有实质差异的体积。 |
| `water_mass_basis` | 工艺用水和清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量，或以有据可查的密度和参考条件将实测体积换算为质量；发生换算时保留原始体积。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、部件、气体、化学品、水、电力和包装以供应商交付状态跨越制造场址边界 |
| starting_condition_role | 进入器具制造前景系统的上游产品投入 |
| product_classification_scope | 经审查的 CPC 3.0 代码 43923 语义边界内的完整器具 |
| recursive_input_rule | 若外购的完整 CPC 43923 器具被装入所声明产品，应以其自身数据集作为上游产品投入记录一次，不得在本前景系统内递归重建其制造过程 |
| upstream_dataset_requirement | 每项外购投入均应采用地域和技术具有代表性的上游数据集；当质量和边界有据可查时，优先采用供应商特定数据 |
| disclosure | 声明产品型号或加权产品系列、供应配置、制造场址、已纳入的路线条件过程、处理责任、包装状态、截断及任何排除的生产阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | 纳入从材料接收到工厂门的制造、适用时的清洗、装配、随产品供应时的充装、验收试验以及随产品供应时的销售包装；排除配送、安装、使用、再充装、维护和报废。 | `un-cpc-3-0-structure-2025` |
| `boundary_route_condition` | route_specific_processes | 只有当生产记录表明某条件过程和原子交换适用于已声明型号或加权系列时才将其纳入；对于有证据证明确未发生的交换，应记录为不适用而不是零消耗。 |  |
| `boundary_capital_goods` | capital_goods | 默认从前景清单中排除资本设备和建筑物；若研究目标明确要求纳入，应披露纳入情况及其分配基准。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `parts_fabrication` | 零件制造与连接 | required | 始终纳入适用于所声明产品并由场址控制的切割、成形、机加工、焊接和连接作业；外购成品部件仅在跨越场址边界的位置记录 | 前景生产 | 每 1 kg 成品参考器具 |
| `aqueous_cleaning` | 部件水基清洗 | conditional | 当场址控制范围内发生水基清洗、脱脂或漂洗时纳入 | 前景调理 | 每 1 kg 成品参考器具 |
| `assembly_test_pack` | 装配、充装、试验与包装 | required | 始终纳入装配和验收试验；只有在充装物和销售包装随所声明产品供应时才纳入相应行 | 前景最终生产 | 1 kg 可投放市场的成品参考器具 |

### 过程：零件制造与连接（`parts_fabrication`）

#### 输入

##### 产品流

###### 钢板材投入（`steel_sheet_input`）

当外购钢板材用于场址控制的器具壳体、框架、压力容器、防护件或罩壳制造并跨越前景边界时，记录该投入。

- 选定流：银板材 `13082a6a-e820-45ec-89f5-3c2c3650495b`
- 流属性/单位：Mass / kg
- 数量规则：所声明生产输出的实测领用质量减去有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 铝板材投入（`aluminium_sheet_input`）

仅当产品型号在场址内对铝板材进行制造加工时记录该外购投入。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：所声明生产输出的实测领用质量减去有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 制造用电（`fabrication_electricity`）

记录场址控制的切割、成形、机加工、焊接和连接设备所消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：制造生产期的分表电量或分配后的厂级电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 热加工用气态天然气（`natural_gas_input`）

仅当气态天然气用于场址控制的加热、切割、钎焊或其他热加工设备时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或经发票核对、可归属至适用制造设备的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：

###### 切割或连接用工业氧气（`industrial_oxygen_input`）

仅当场址控制的氧燃料切割、钎焊或连接过程消耗工业氧气时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：可归属至适用制造作业的供应商交付体积或汇流排计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 制造产生的钢废料（`steel_scrap_output`）

记录以钢废料形式离开前景过程的分类收集含铁边角料、切屑和报废钢制零件。

- 选定流：钢废料 `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- 流属性/单位：Mass / kg
- 数量规则：实测外运废料质量加库存变化，不含内部返工材料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：

##### 基本流

###### 现场天然气燃烧产生的化石源二氧化碳（`fossil_co2_emission`）

仅记录本过程所纳入设备燃烧天然气后直接排入空气的化石源二氧化碳；不得加入上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据实测天然气消耗量和前景研究采用的经审查燃料碳因子或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：部件水基清洗（`aqueous_cleaning`）

#### 输入

##### 产品流

###### 清洗工艺用水（`cleaning_process_water`）

当采用水基清洗、脱脂或漂洗路线时，记录进入过程的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量补充水加实测批次添加量，减去有记录的回流至同一过程边界内的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：

###### 清洗用氢氧化钠（`sodium_hydroxide_input`）

仅当氢氧化钠加入所纳入的碱性清洗槽时记录产品质量，并在支持记录中报告溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：可归属至所声明生产输出的氢氧化钠产品净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：

###### 清洗用电（`cleaning_electricity`）

记录所纳入清洗、泵送、加热、通风和干燥设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：所纳入清洗路线的分表电量或分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater_output`）

记录从所纳入水基清洗过程转移至场内或场外处理的废水，记录点位于所声明过程边界外的处理之前。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或将体积换算为质量，并按槽罐库存变化和有记录的内部回用进行调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：

##### 基本流

### 过程：装配、充装、试验与包装（`assembly_test_pack`）

#### 输入

##### 产品流

###### 装配与试验用电（`assembly_electricity`）

记录装配工具、压缩机、充装设备、验收试验台和包装设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：生产期内装配、充装、试验和包装过程的分表电量或分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 随产品供应的二氧化碳充装物（`carbon_dioxide_charge`）

仅当二氧化碳被充入并随成品器具供应时记录产品质量；除非发生实测释放，否则不得将其报告为基本流排放。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：根据充装记录和成品质量核验确定充装质量，并扣除已捕集和退回气体
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_charge_records`
- 来源：

###### 水压试验用工艺用水（`hydrotest_process_water`）

仅当场址控制范围内开展水压或水介质验收试验时，记录试验用水补充量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测试验回路补充量加批次添加量，减去回到同一边界内的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：

###### 瓦楞纸箱（`corrugated_box_input`）

仅当这种销售包装随参考器具供应时记录瓦楞纸箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：可归属至所声明成品输出的瓦楞纸箱净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可投放市场的成品器具（`finished_appliance_output`）

记录制造场址大门处按声明供应配置交付且通过验收试验的成品器具。

- 选定流：灭火器，喷枪及类似器具，喷气或喷砂机及类似喷射机器，液体或粉末投射、弥散或喷射用机械设备，农业或园艺用器具除外 `3efb484d-b04a-455f-97df-130b2ed8724f`
- 流属性/单位：Mass / kg
- 数量规则：固定参考输出为 1 kg；按该分母缩放实测生产总量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 可投放市场的成品参考器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared_operations | 对产品系列和路线特定作业，优先划分过程并直接计量或使用材料领用记录。 |  |
| `allocation_physical` | residual_shared_inputs | 无法划分时，采用能够反映实际使用情况的有据物理驱动因素分配剩余共享能源和耗材，例如机器工时、实测能源、加工质量或试验循环；不得无理由默认按收入分配。 |  |
| `allocation_scrap` | recyclable_scrap | 在钢废料离开前景边界时报告。除非研究明确采用并对所有比较产品一致披露系统扩展方法，否则不得在本 PCR 内计入避免生产原生材料的抵扣。 |  |
| `allocation_mass_balance` | material_balance | 核对材料投入与成品、实测废物、质量相关排放和库存变化；发布前调查无法解释的差额。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `parts_fabrication` | 钢板材和铝板材投入 | 采购接收、仓库领用、退料和库存记录 | 材料身份；牌号；期初库存；接收量；领用质量；退料质量；期末库存；产品型号 | 将受控仓库记录与生产订单核对 | kg | 每次领用并每月核对 | 有代表性的连续 12 个月或完整的较短生产期 | 开展所纳入制造过程的全部场址 | 净消耗质量除以合格成品质量 | 已签署库存核对；校准秤记录；材料规范；生产订单 |
| `cp_energy_records` | 所有适用过程 | 电力投入 | 公用电表、分表、账单、设备日志和生产记录 | 期初读数；期末读数；电表倍率；共享用量分配；停机时间；合格输出 | 优先采用分表；否则核对厂级电表并按有据物理驱动因素分配 | 原始保留 kWh；报告 MJ | 至少每月，有条件时按生产期 | 与生产输出相同的报告期 | 范围内全部制造场址 | 净电量按 3.6 MJ/kWh 换算后除以合格输出质量 | 电表校准或公用事业账单；分配工作表；生产日志 |
| `cp_gas_records` | `parts_fabrication` | 气态天然气和工业氧气投入 | 计量表、钢瓶或散装交付、库存和设备日志 | 气体身份；期初库存；交付；退回；期末库存；计量条件；作业 | 核对交付量和库存；有条件时使用设备计量表 | 声明条件下的 m3 | 每次交付并每月核对 | 与适用作业相同的报告期 | 使用相应气体的全部场址 | 在同一声明参考条件下的净消耗体积除以合格输出质量 | 供应商说明；计量记录；钢瓶核对；参考条件记录 |
| `cp_waste_mass` | `parts_fabrication` | 钢废料输出 | 废料磅单、容器日志、库存和生产记录 | 废物身份；毛重；皮重；去向；期初与期末库存；返工回用 | 核对称量外运废料和库存变化 | kg | 每次外运并每月核对 | 与生产输出相同的报告期 | 产生钢废料的全部场址 | 外运净质量加期末减期初废物库存，再除以合格输出质量 | 秤校准；废物转移记录；核对工作表 |
| `cp_direct_emissions` | `parts_fabrication` | 直接化石源二氧化碳 | 燃料记录和经审查因子记录 | 燃料量；成分或净热值；因子；因子单位；氧化假设 | 仅计算所纳入燃料燃烧产生的直接场址排放 | kg | 每个报告期计算 | 与燃料使用相同的报告期 | 全部所纳入燃烧源 | 汇总各排放源后除以合格输出质量 | 燃料记录；数据集中的因子引文；计算工作表；审查签字 |
| `cp_water_records` | 水基清洗和 `assembly_test_pack` | 工艺用水投入 | 计量表、批次表、槽罐日志和生产记录 | 期初读数；期末读数；批次添加量；回收返回量；发生换算时的密度 | 核对专用计量表或批次补水与回收量 | 原始保留 kg 或 m3 | 每批或至少每月 | 与适用过程相同的报告期 | 使用工艺用水的全部场址 | 跨越各过程边界的净用水量除以合格输出质量 | 计量表校准；批次日志；密度来源；回收核对 |
| `cp_chemical_records` | `aqueous_cleaning` | 氢氧化钠投入 | 化学品领用、采购、槽液配制、浓度和库存记录 | 产品身份；浓度；期初库存；添加量；退回量；期末库存 | 核对产品质量添加量和库存；单独保留浓度 | kg 产品 | 每次添加并每月核对 | 与清洗相同的报告期 | 全部所纳入清洗线 | 净产品消耗质量除以合格输出质量 | 供应商规范；领用记录；浓度检测；库存核对 |
| `cp_wastewater_records` | `aqueous_cleaning` | 清洗废水输出 | 排放计量表、槽罐转移、处理记录和库存日志 | 体积或质量；密度；来源过程；pH；去向；期初与期末库存；内部回用 | 在外部处理前核对排放、槽罐库存变化和回用量 | 原始保留 kg 或 m3 | 每次排放并每月核对 | 与清洗相同的报告期 | 全部所纳入清洗线和处理转移点 | 离开清洗边界的净废水除以合格输出质量 | 计量表或秤校准；转移记录；处理记录；质量平衡检查 |
| `cp_charge_records` | `assembly_test_pack` | 二氧化碳产品充装物 | 充装批次、钢瓶、回收和成品记录 | 气体身份；充装质量；回收质量；退回质量；不合格件；合格件 | 将净充装质量与合格带充装物产品核对 | kg | 每个充装批次 | 与带充装物产品相同的报告期 | 全部所纳入充装线 | 合格产品内净供应充装物除以合格输出质量 | 校准充装秤；批次记录；泄漏或回收日志；产品规范 |
| `cp_packaging_mass` | `assembly_test_pack` | 瓦楞纸箱投入 | 包装物料清单、领用、退料和生产记录 | 纸箱身份；单位质量；领用数量；退回数量；报废数量；合格输出 | 核验单位质量并核对净领用数量 | kg | 每个生产订单并每月核对 | 与包装产品相同的报告期 | 全部所纳入包装线 | 纸箱净质量除以合格输出质量 | 包装规范；校准单位质量检查；领用记录；核对表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all inventory rows | 归一化数量 = 报告期内可归属于合格产品的数量 / 按声明配置计量的合格成品质量 | 可归属流数量；合格成品质量 | 每 1 kg 参考器具的流数量 |  |
| `calc_electricity_mj` | electricity rows | 报告 MJ = 实测 kWh × 3.6；保留原始 kWh，且不得在前景数量中施加上游排放因子 | 实测 kWh | 电力 MJ |  |
| `calc_inventory_change` | materials and wastes | 消耗或输出 = 接收或转移量，并按同一边界内的期初库存、期末库存、有记录退回和内部回用进行调整 | 接收、领用、退回、回用、期初和期末库存记录 | 跨越边界的净质量或体积 |  |
| `calc_direct_co2` | `fossil_co2_emission` | 直接化石源 CO2 = 实测天然气量 × 与其体积、质量或能量基准兼容的经审查因子；在产出数据集中保存因子引文和基准 | 天然气记录；经审查因子；参考条件或能量换算 | kg 化石源 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | 产品型号、材料牌号、气体或化学品身份、废物身份及供应配置应可追溯至规范和生产记录。 | 产品规范；物料清单；供应商记录；废物转移记录 |
| `dq_temporal` | all foreground records | 对全部前景记录采用同一有代表性的报告期；披露停产、启动、异常生产以及任何较短生产期。 | 带日期的计量、库存和生产记录 |
| `dq_completeness` | all mapped processes | 将生产订单与合格输出核对，并记录每个适用过程、排除过程、零值和不适用判定。 | 过程图签字确认；生产核对；异常日志 |
| `dq_measurement` | measured quantities | 有条件时采用已校准或公用事业控制的计量表和秤；记录估算、分配、密度换算和参考条件。 | 校准证书；账单；计算工作表 |
| `dq_product_mix` | product-family datasets | 按合格生产质量对各型号加权并披露型号占比；不得将功能有实质差异的产品系列合并而不声明下游限制。 | 型号级输出记录；加权工作表；数据集元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_flow | 确认 UUID、Mass 属性、kg 单位、产品型号或系列、随附充装物、附件、包装状态和工厂门市场状态。 |  |
| `validate_process_coverage` | process_map | 确认纳入全部场址控制的制造和最终装配或试验，并确认每个条件清洗、气体、充装和包装行都有发生证据或不适用证据。 |  |
| `validate_atomic_flows` | process_inventory | 确认每行仅代表一种物理、化学、废物或能量交换，且电力、每种气体、水、化学品、包装组件、废物和排放均保持分列。 |  |
| `validate_mass_balance` | material_balance | 核对材料投入和随附充装物与成品、废物、适用的直接质量排放和库存变化；记录并审查无法解释的差额。 |  |
| `validate_energy` | electricity_rows | 核对计量总量和分配，验证 3.6 MJ/kWh 换算，并确保上游电力排放未作为直接基本流重复计入。 |  |
| `validate_bilingual` | localized_inventory | 确认中英文文件保留相同的行 ID、UUID、受控值、规则 ID 顺序和过程顺序，并对每个带 UUID 的流采用 Tiangong 公开直读的准确中文 baseName。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；只有对所声明器具型号或已披露产品组合和地域具有代表性时，才可作为 `background_dataset` |
| downstream_use | 需要质量归一化工厂门器具投入的制造阶段过程数据集和 lifecyclemodel 投影 |
| allowed_use | 所声明技术、地域、时期和供应配置内的产品特定制造清单，或按产量透明加权的制造清单 |
| excluded_use | 未按使用性能归一化而对不同器具类型进行功能比较；农业或园艺用喷洒器具；无附加规则的配送、使用、再充装、维护或报废建模 |
| required_metadata | 产品型号或系列占比；拟喷射介质；容量或处理量；适用时的工作压力；适用规范；验收试验；充装物、附件和包装状态；场址；地域；技术；时期；上游数据集选择；分配；截断 |
| required_quality_disclosure | 初级数据覆盖；计量表和秤质量；分配份额；质量平衡结果；数据缺口；估算；路线特定排除；未解决范围证据；代表性限制 |
| update_trigger | 产品设计、物料清单、充装物、工艺路线、场址、能源供应、分配驱动因素、包装、验收试验或报告期发生足以实质改变清单的变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；检索日期 2026-09-06；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | 已核验原文的 CPC 43923 分类身份、纳入器具类型以及农业或园艺用途排除项 |
