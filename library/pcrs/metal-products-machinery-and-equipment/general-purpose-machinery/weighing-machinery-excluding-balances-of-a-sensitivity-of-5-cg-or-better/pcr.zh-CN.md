---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.weighing-machinery-excluding-balances-of-a-sensitivity-of-5-cg-or-better
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 称重机械（感量为5厘克或更精密的天平除外）

## 1. 范围与适用性

本 PCR 适用于主要功能为通过称量确定质量、以完整设备形式供应的手动、非自动和自动称重机械从摇篮到制造商工厂门的前景数据包。适用产品包括商用秤、台秤、案秤、地磅、车辆衡、皮带秤、自动检重秤、重量检查秤、称重贴标机、重力式装料衡器、累计衡器及类似称重机械。

不包括感量为5厘克或更精密的天平、单独销售的砝码和零件、实验室精密天平子组件、客户现场安装、分销、使用阶段电力、投入使用后的校准、维护及生命末期。研究若纳入上述阶段，必须将其作为单独声明的过程建模，不得暗中并入本工厂门规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.weighing-machinery-excluding-balances-of-a-sensitivity-of-5-cg-or-better |
| classification_refs | CPC 3.0: 43922，精确分类语境 |
| covered_products | 低于被排除精密天平边界的完整称重机械，包括非自动和自动衡器 |
| excluded_products | 感量为5厘克或更精密的天平；单独销售的衡器砝码；单独销售的零件和子组件；非称重测量仪器 |
| representative_product | 具有承载器、载荷传递装置和示值装置并完成出厂测试的完整称重机械；装有电子控制装置时将其纳入 |
| production_route | 购入材料和组件接收；在场址实施时的金属部件制造；有条件的碱性水洗；最终装配；校准与功能测试；出厂包装 |
| market_state | 完整、已校准或已完成出厂测试、经包装并可在制造商工厂门发运的设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在已声明运行条件下确定载荷质量的完整称重机械 |
| How much | 1 kg 完整称重机械净质量 |
| How well | 声明自动或非自动模式、额定最小和最大秤量、分度值或检定分度值、适用时的准确度等级、承载器配置、电源以及预期被称产品或用途 |
| How long or cycle | 生产至包装后的工厂门状态；使用寿命和称量循环次数作为元数据声明，但不在清单边界内 |
| reference_flow_link | 输出行 `weighing_machine_output`，按 1 kg 产品净质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 称重机械（感量为5厘克或更精密的天平除外）；Tiangong UUID 未解决 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 衡器自动化模式；额定最小和最大秤量；分度值或检定分度值；适用时的准确度等级；承载器类型；机械式、机电式或电子式架构；电源；预期被称产品或用途；产品净质量；所含附件；工厂地域；生产年份 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和归一化分母 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在出厂测试后、外部运输包装前确定完整机器净质量。托盘和运输箱不计入参考产品质量，应作为单独投入记录。 |
| `electricity_energy` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表读数和换算记录。按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；场内发电与外购电力不得合并而不作单独披露。 |
| `gas_volume_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或仪表参考温度和压力报告计量体积并披露这些条件；不得把不同气体合并为一个公用工程行。 |
| `mass_input_output_consistency` | 材料、组件、包装、废钢和废碱液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 购入投入采用入厂状态质量，输出采用实测发运质量；在归一化前对同一报告期内的库存变化进行核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 位于制造场址门口的外购金属、组件、工艺化学品、包装、燃料、气体、电力和水 |
| starting_condition_role | 以上游生产及交付数据集链接表示的从摇篮到场址门投入 |
| product_classification_scope | 第1和第2节所述语义边界内的完整称重机械，不受单一销售型号或额定秤量限制 |
| recursive_input_rule | 若将购入的完整称重机械集成到另一台机器中，则仅作为产品投入记录一次并链接单独上游数据集，不在本 PCR 下递归展开 |
| upstream_dataset_requirement | 每项购入产品或能源投入均需链接地域和技术具有代表性的上游数据集；经核实的供应商特定数据优先 |
| disclosure | 声明自制或外购边界、纳入的制造和清洗步骤、共用设施分配、外包过程、包装配置、工厂地域、报告期以及任何被排除材料或排放 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部前景过程 | 纳入投入接收与库存变化、场内金属制造、有条件的部件清洗、装配、校准、功能测试及包装，直至包装后的工厂门输出。 | `un-cpc-3-0-structure-2025` |
| `boundary_outsourced_operations` | 外包制造、表面处理或组件装配 | 通过购入组件或处理服务数据集表示外包作业，并防止前景场址对同一材料、能源、废物或排放重复计量。 |  |
| `boundary_instrument_architecture` | 自动和非自动衡器 | 声明衡器架构和额定运行条件限定信息；只有测量功能和额定条件相容的产品变型方可比较。 | `oiml-r76-1-2006`; `oiml-r51-1-2006`; `eu-directive-2014-32` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 金属部件制造 | conditional | 当承载器、机架、外壳、杠杆、支架或其他结构金属部件在报告场址制造时纳入；否则应披露自制或外购边界，并在已完成数据包中分别记录各购入成品组件 | 前景生产 | 转入装配的合格制造部件质量 |
| `alkaline_parts_cleaning` | 水基碱性部件清洗 | conditional | 仅当在前景边界内运行氢氧化钠水洗槽时纳入 | 前景整备 | 转入装配的清洁金属部件质量 |
| `assembly_calibration_packaging` | 最终装配、校准、功能测试及包装 | required | 对完整工厂门产品始终纳入 | 前景生产与放行 | 在工厂门放行的合格包装称重机械质量 |

### 过程：金属部件制造（`component_fabrication`）

#### 输入

##### 产品流

###### 制造结构件用碳钢薄板（`steel_sheet_input`）

记录为场内制造而跨越场址边界的碳钢薄板。前景记录应保留牌号、涂层状态、厚度、再生含量声明、供应商和地域。

- 选定流：碳钢薄板；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：报告期内实测接收量加期初库存，减期末库存和有凭证的退货量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

###### 制造用外购电力（`electricity_fabrication`）

记录切割、成形、机加工、焊接、通风及直接归属制造辅助设备所消耗的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按合格部件输出分配的实测制造电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_meters`

###### 场内热加工用气态天然气（`natural_gas_fabrication`）

仅当制造热源在前景边界内燃烧天然气时记录；否则将本行标为不适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于制造的实测天然气体积，并声明仪表参考条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_meters`

###### 氧燃料切割用工业氧气（`industrial_oxygen_fabrication`）

仅记录在前景边界内实施氧燃料切割所用的工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：分配至氧燃料切割的供应交付量或仪表体积，并声明纯度和参考条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_meters`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 制造过程分离出的废钢（`scrap_steel_output`）

记录离开制造过程送往回收或处理的含铁边角料和不合格钢部件，并保留牌号、污染、去向及接收方是否付费等信息。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：实测发运质量加废钢期末积存量减期初积存量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

##### 基本流

###### 场内天然气燃烧产生的化石源二氧化碳（`carbon_dioxide_fossil_output`）

仅记录前景过程天然气燃烧直接排放的化石源二氧化碳；不得在此加入上游电力或燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据实测天然气用量和适用的经审查燃料碳含量或排放因子计算，并保留因子来源、氧化假设和计算记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`

### 过程：水基碱性部件清洗（`alkaline_parts_cleaning`）

#### 输入

##### 产品流

###### 碱性清洗槽工艺用水（`process_water_cleaning`）

场内运行本过程时，记录清洗槽初始加水和补充水，并声明水源、水质及密度换算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的清洗系统加水量和补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alkaline_cleaning_batches`

###### 碱性清洗槽用氢氧化钠（`sodium_hydroxide_cleaning`）

记录为配槽或补充而跨越前景边界的氢氧化钠，并声明产品浓度和供应状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：以供应状态计量加入的溶液或固体质量；按干活性质量计算时保留浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alkaline_cleaning_batches`

###### 碱性清洗用外购电力（`electricity_cleaning`）

记录槽液加热、泵送、抽排和可直接归属清洗设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电能，或有记录的设备功率乘以运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alkaline_cleaning_batches`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的废碱性清洗槽液（`waste_alkaline_liquor_output`）

记录从清洗系统排出并送往处理的废槽液，并声明成分、金属负荷、危险废物分类、去向及所含水分。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：报告期内实测发运质量加期末储存质量减期初储存质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alkaline_cleaning_batches`

##### 基本流

### 过程：最终装配、校准、功能测试及包装（`assembly_calibration_packaging`）

#### 输入

##### 产品流

###### 已装联的电子控制组件（`electronic_control_assembly_input`）

仅对电子式称重机械记录已装联控制器组件。无电子控制器的机械式产品将本行标为不适用；不得以未装联印制线路板代替。

- 选定流：称重机械用已装联电子控制组件；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：实测或供应商声明的合格组件消耗质量，并按库存变化和退货调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_and_packaging_records`

###### 装配、校准和测试用外购电力（`electricity_assembly`）

记录装配工具、衡器通电、校准台、功能测试及可直接归属包装设备所消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电能，或有记录的设备功率乘以运行时间，并分配至合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_and_packaging_records`

###### 出厂包装用瓦楞纸箱（`corrugated_board_boxes_input`）

记录为发运产品供应的瓦楞纸箱。已完成的前景数据包应将其他包装组件分别作为原子流记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格发运机器消耗的实测或供应商声明纸箱质量，并按包装库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_and_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门完整称重机械（`weighing_machine_output`）

仅记录通过所声明出厂校准或功能测试并获准发运的合格完整称重机械。产品 UUID 尚未解决；质量流属性和单位组已经确认。

- 选定流：称重机械（感量为5厘克或更精密的天平除外）；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：以 1 kg 完整机器净质量作为参考输出；保留实际合格输出总质量作为归一化分母
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 完整称重机械输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_and_packaging_records`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用前景作业 | 采用过程细分、专用仪表、批次记录和直接归属后再实施分配。 |  |
| `allocation_physical` | 无法避免的共用制造、清洗、装配、校准或包装负荷 | 采用导致负荷的物理驱动量：设备用电采用机器工时，气体采用计量体积，清洗采用槽液处理量，材料搬运采用实测质量。记录驱动量并测试材料替代的影响。 |  |
| `allocation_scrap` | 废钢和废碱液 | 在废物离开前景过程处报告各废物流。不得在前景清单中扣除原生材料避免负荷；下游回收应按研究目标一致建模。 |  |
| `allocation_no_sales_default` | 不同完整称重机械型号 | 不得默认采用销售收入在秤量、架构或准确度不同的型号间分配。物理分配不可行时，应披露经济数据期间并提供敏感性结果。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `component_fabrication` | 钢投入和废钢输出 | 采购、库存、生产和废物发运记录 | 材料身份；牌号；期初库存；接收；退货；期末库存；合格转移质量；废钢期初库存；废钢发运；废钢期末库存 | 将签署的库存记录与经校准衡器和制造批次核对 | kg | 每次接收和发运；每月核对 | 至少连续12个有代表性的月份或完整生产活动期 | 生产适用金属部件的全部场址作业 | 同期计算净消耗和废钢产生量；核对后方可分配 | 衡器校准；采购和发运凭证；盘点；批次追溯 |
| `cp_energy_and_gas_meters` | `component_fabrication` | 制造电力、天然气和工业氧气 | 公用工程仪表、分表、气瓶、散装交付和运行记录 | 期初期末读数；交付量；仪表系数；参考条件；纯度；设备；运行时间；停机时间；分配输出 | 优先使用校准分表，否则核对场址总量和有记录的设备驱动量 | 电力 MJ；气体 m3 | 连续或逐批；每月核对 | 至少连续12个有代表性的月份或完整生产活动期 | 制造设备及直接归属辅助设备 | 扣除无关和空载负荷，采用有记录的物理分配后归一化 | 仪表校准；发票；交付单；运行日志；分配工作表 |
| `cp_direct_combustion_emissions` | `component_fabrication` | 化石源二氧化碳 | 燃料仪表和经审查因子计算记录 | 燃料体积；参考条件；气体组成或因子；因子单位；氧化假设；因子来源；计算排放量 | 使用适用的经审查因子，根据核对后的前景燃料用量计算 | kg | 每个报告期 | 与燃料清单相同期间 | 仅前景燃烧设备 | 汇总各源排放并除以合格输出质量 | 燃料核对；因子来源；计算审查 |
| `cp_alkaline_cleaning_batches` | `alkaline_parts_cleaning` | 水、氢氧化钠、电力和废碱液 | 配槽、补充、仪表、维护和废物转移记录 | 批次；加水量；氢氧化钠质量和浓度；电力；部件处理量；槽液寿命；排出槽液质量；成分；去向 | 核对批次单、化学品领用、分表、储存废物和转移凭证 | 材料和废物 kg；电力 MJ | 每次配槽、补充和排放 | 代表期内全部批次 | 处理适用部件的清洗设备 | 汇总适用批次；无法直接归属时才按清洗部件质量分配 | 批次单；仪表检查；化学品证书；废物联单；质量平衡审查 |
| `cp_assembly_and_packaging_records` | `assembly_calibration_packaging` | 电子控制组件、电力、瓦楞纸箱和合格输出 | 物料清单、库存、分表、测试、包装和放行记录 | 型号；序列或批次；控制器质量和数量；纸箱质量和数量；电力；测试时间；不合格品；返工；净输出质量 | 将已领用组件和包装与放行记录及分表或工程电力记录核对 | kg 和 MJ | 逐批或逐生产订单；每月核对 | 至少连续12个有代表性的月份或完整生产活动期 | 适用最终装配、出厂校准、测试和包装 | 纳入返工负荷；从分母排除不合格输出；按放行产品净质量归一化 | 批准物料清单；供应商声明；仪表记录；校准和测试结果；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_period_normalization` | 除固定参考输出外的每个采集清单行 | 归一化数量 = 归属于适用合格产品的核对数量 / 同期放行的适用合格产品净质量 | 核对后的行数量；需要时的分配份额；放行产品净质量 | 每 1 kg 参考流的行数量 |  |
| `calc_electricity_conversion` | 以 kWh 记录的电力行 | 电力（MJ）= 实测电力（kWh）× 3.6 | kWh 电表读数 | MJ 电力 |  |
| `calc_stock_balance` | 购入材料、组件、化学品和包装 | 消耗量 = 期初库存 + 接收量 - 退货量 - 期末库存，并按有凭证的转移和盘点更正调整 | 已签署库存和接收字段 | kg 消耗质量 |  |
| `calc_direct_fossil_co2` | `carbon_dioxide_fossil_output` | 化石源 CO2 = 核对后的天然气数量 × 适用的经审查碳含量或排放因子 × 因子未含氧化时所声明的氧化调整 | 天然气记录；因子；因子单位；氧化处理 | 每报告期及每参考流 kg 化石源 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留型号或系列、架构、自动或非自动模式、额定秤量范围、分度值或检定分度值、适用时的准确度等级、预期用途、净质量和附件。 | 产品规格；物料清单；型式或合格评定文件；放行记录 |
| `dq_temporal_representativeness` | 全部前景行 | 使用至少连续12个月的同一代表期，完整活动期较短时除外；说明停机、异常批次、缺失数据和替代。 | 有日期的仪表、库存、生产和废物记录 |
| `dq_mass_completeness` | 材料、组件、包装、产品和废物流 | 核对期初库存、接收、退货、转移、合格输出、不合格输出、废物和期末库存；放行前调查不平衡。 | 签署的质量平衡工作表及原始凭证 |
| `dq_route_completeness` | 有条件过程和行 | 对每项有条件过程或行作适用或不适用判定并保留证据；不得暗中遗漏外包表面处理、额外包装、其他燃料、其他化学品、其他废物或直接排放。 | 路线声明；过程图；供应商和场址记录 |
| `dq_meter_quality` | 电力和气体行 | 记录仪表身份、读数日期、校准或检定状态、体积参考条件、估算方法及不确定性或限制。 | 仪表证书；发票；读数日志；估算审查 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_exclusion` | 参考产品 | 确认输出为 CPC 43922 内的完整称重机械，且不是感量为5厘克或更精密的天平、单独砝码或单独销售的零件。 | `un-cpc-3-0-structure-2025` |
| `validate_metrological_qualifiers` | 参考产品元数据 | 要求自动化模式、最小和最大秤量、分度值或检定分度值、适用时的准确度等级、承载器类型、电源以及预期被称产品或用途；标记功能或运行条件不相容的比较。 | `oiml-r76-1-2006`; `oiml-r51-1-2006`; `eu-directive-2014-32` |
| `validate_reference_mass` | 归一化 | 确认分母为已放行机器净质量，运输包装单独记录；归一化后输出数量必须恰为 1 kg。 |  |
| `validate_inventory_accounting` | 前景清单 | 校验同期库存核对、质量平衡、公用工程核对、返工纳入、不合格输出从分母排除，以及每项有条件行均有明确适用性判定。 |  |
| `validate_no_double_counting` | 外包和场内作业 | 确认购入组件或处理服务与前景作业未重复表示同一材料、能源、废物或排放。 |  |
| `validate_direct_emissions` | `carbon_dioxide_fossil_output` | 要求直接燃烧源、核对后的燃料数量、经审查的因子身份和单位及氧化处理；拒绝把上游排放作为直接基本流录入。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 对功能、架构、秤量、准确度、工厂地域、技术和生产期间相容的指定称重机械型号或一致产品系列进行从摇篮到工厂门建模 |
| excluded_use | 达到被排除感量的精密天平；单独销售的零件或砝码；使用阶段或生命末期声明；称重功能或额定条件不相容的比较；记录不具代表性的场址或系列 |
| required_metadata | PCR id 和版本；型号或系列；自动化模式；计量限定信息；产品净质量；附件；自制或外购边界；过程适用性；工厂地域；技术；期间；分配驱动量；上游数据集；包装 |
| required_quality_disclosure | 前景数据和估算占比；仪表和库存覆盖；质量平衡结果；缺失流；UUID 缺口；因子限制；代表性；分配敏感性；被排除或外包作业 |
| update_trigger | 架构、额定功能、物料清单、供应路线、工厂过程、能源结构、清洗路线、包装、分配方法、法规、计量规范或代表数据期间发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-06） | CPC 43922 类别身份及排除措辞 |
| `oiml-r76-1-2006` | standard | OIML R 76-1:2006，Non-automatic weighing instruments，https://www.oiml.org/en/files/pdf_r/r076-1-e06.pdf（检索日期 2026-09-06） | 非自动衡器范围、质量单位、秤量、分度值、准确度和试验条件限定信息 |
| `oiml-r51-1-2006` | standard | OIML R 51-1:2006，Automatic catchweighing instruments，https://www.oiml.org/en/files/pdf_r/r051-1-e06.pdf（检索日期 2026-09-06） | 自动检重衡器范围、用途类别、准确度和性能限定信息 |
| `eu-directive-2014-32` | official_guidance | 欧盟指令 2014/32/EU，附件 VIII（MI-006），http://data.europa.eu/eli/dir/2014/32/oj（检索日期 2026-09-06） | 自动衡器定义以及额定秤量、电源、机械、气候和被称产品特征限定信息 |
