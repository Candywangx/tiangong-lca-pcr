---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 装有马达驱动的风扇或鼓风机的铁或钢制非电热的空气加热器及热空气分配器

## 1. 范围与适用性

本规则适用于工厂门口状态的铁或钢制非电热空气加热器及热风分配器，其空气由电动风扇或鼓风机推动，热量来自热水换热器或燃气燃烧器。风扇电机用电不等于电加热。代表产品为钢制机壳、风扇和热水换热器组成的完整设备；燃气路线按明确列出的条件行处理。排除电阻加热器、无风扇的散热器、独立锅炉、现场安装、使用及报废处理。来源见 `un-cpc-3-2025`、`kampmann-tip4-epd-2026` 和 `nist-tn1975r2`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949 |
| classification_refs | CPC 3.0:44824 |
| covered_products | 钢制机壳且配有电动风扇的热水或燃气供热空气加热器成品 |
| excluded_products | 电阻加热器；无风扇散热器；独立锅炉；未装配部件 |
| representative_product | 钢制机壳、热水换热器及电动风扇组成的完整设备 |
| production_route | 钢板加工、部件装配、出厂试验及包装；按热水或燃气路线声明 |
| market_state | 一台经验收、去除运输包装的完整出厂设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台完整、经验收的钢铁制非电热空气加热设备，配有电动风扇 |
| How much | 一台，实测净质量为 M kg |
| How well | 声明供热路线、风量性能、机壳材料及电机配置 |
| How long or cycle | 出厂产品；不规定使用年限 |
| reference_flow_link | finished_heater |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 装有马达驱动的风扇或鼓风机的铁或钢制非电热的空气加热器及热空气分配器 `bab3c9c3-6018-402d-835f-c56ee7db029c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 供热路线；机壳钢材状态；风扇/电机配置；验收状态；净质量测量记录 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 前景制造 | 纳入外购材料及部件接收、钢板加工、装配、出厂试验、包装直至成品验收；使用与报废另行建模。 | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `boundary_route` | 适用产品 | 仅纳入钢铁制、配电动风扇且非电加热的空气加热器；热水和燃气组件按实际路线选择。 | `un-cpc-3-2025`; `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `boundary_upstream` | 外购投入 | 将外购部件及材料作为产品投入，并连接上游数据集；不得在本前景过程重复计算供应商制造。 | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收已明确品种与状态的钢板、风扇及路线专用换热部件 |
| starting_condition_role | 前景制造起点 |
| product_classification_scope | CPC 3.0:44824 成品；分类码不决定上游部件的归属 |
| recursive_input_rule | 若外购投入本身属于该产品类别，仅作为单独的外购产品流记录一次，不递归并入同一制造过程 |
| upstream_dataset_requirement | 每项外购投入应连接可区分边界的上游数据集；缺失时披露 |
| disclosure | 披露路线、型号、机壳钢材状态、场址、时段、M 的测量及共享能耗分配 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `heater_manufacturing` | 空气加热设备制造、测试与包装 | required | 所有适用路线；条件行按实际路线启用 | 前景制造 | 每台验收成品设备；参考产品 M kg |

### 过程：空气加热设备制造、测试与包装（`heater_manufacturing`）

#### 输入

##### 产品流

###### 用于机壳的镀锌钢板（`galvanized_sheet`）

纳入条件：镀锌机壳路线。本行仅表示一个具体交换。

- 选定流：森吉米尔法镀锌钢板
- 流属性/单位：Mass / kg
- 数量规则：仅在采用镀锌机壳板材时，记录所接收板材的装机质量及下料边角料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`kampmann-tip4-epd-2026`

###### 用于机壳的冷轧钢板（`cold_rolled_sheet`）

纳入条件：未镀锌冷轧机壳路线。本行仅表示一个具体交换。

- 选定流：冷轧钢板
- 流属性/单位：Mass / kg
- 数量规则：燃气或其他已声明路线使用此板材时记录所接收的冷轧机壳钢板质量；排除已计入 galvanized_sheet 的板材。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`nist-tn1975r2`

###### 外购电动风扇组件（`fan_motor`）

纳入条件：所有适用路线。本行仅表示一个具体交换。

- 选定流：电动空气循环风扇组件
- 流属性/单位：Mass / kg
- 数量规则：按每台验收设备的配置记录装入的外购风扇及电机组件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`kampmann-tip4-epd-2026`; `nist-tn1975r2`

###### 水媒换热器组件（`hydronic_exchanger`）

纳入条件：热水供热路线。本行仅表示一个具体交换。

- 选定流：铜铝水媒空气换热器组件
- 流属性/单位：Mass / kg
- 数量规则：仅在热水供热路线记录所装入的外购铜铝水媒换热器组件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`kampmann-tip4-epd-2026`

###### 燃气换热管组件（`gas_exchanger`）

纳入条件：燃气路线。本行仅表示一个具体交换。

- 选定流：镀铝钢制燃气换热管组件
- 流属性/单位：Mass / kg
- 数量规则：仅在燃气路线记录装入的镀铝钢制换热管组件质量；不含燃烧器质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`nist-tn1975r2`

###### 燃气燃烧器组件（`gas_burner`）

纳入条件：燃气路线。本行仅表示一个具体交换。

- 选定流：空气加热设备用天然气燃烧器组件
- 流属性/单位：Mass / kg
- 数量规则：仅在燃气路线记录装入的燃气燃烧器组件质量；不含换热管。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`nist-tn1975r2`

###### 工厂交流电（`factory_electricity`）

纳入条件：所有适用路线。本行仅表示一个具体交换。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量每台验收成品设备对应的钣金加工、装配、测试和包装交流电用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`kampmann-tip4-epd-2026`

###### 出厂点火试验用天然气（`test_natural_gas`）

纳入条件：实施出厂点火试验的燃气路线。本行仅表示一个具体交换。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：仅在燃气设备出厂前进行点火试验时记录计量的气态天然气用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas`
- 来源：`nist-tn1975r2`

###### 瓦楞运输纸箱（`corrugated_box`）

纳入条件：使用瓦楞纸箱时。本行仅表示一个具体交换。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：称量每台验收成品设备发运所用的瓦楞纸箱质量；运输包装不计入验收设备。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`kampmann-tip4-epd-2026`; `nist-tn1975r2`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收成品非电热空气加热器（`finished_heater`）

纳入条件：所有适用路线。本行仅表示一个具体交换。

- 选定流：装有马达驱动的风扇或鼓风机的铁或钢制非电热的空气加热器及热空气分配器 `bab3c9c3-6018-402d-835f-c56ee7db029c`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`; `kampmann-tip4-epd-2026`; `nist-tn1975r2`

##### 废物流

###### 钢板加工废料（`steel_scrap`）

纳入条件：机壳加工产生废钢时。本行仅表示一个具体交换。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：称量归属于每台验收成品设备的机壳加工钢质边角料和不合格件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线或产品特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`kampmann-tip4-epd-2026`; `nist-tn1975r2`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | 直接投入与废物 | 按型号物料清单与称重记录将直接材料、包装和废钢归属到验收成品；不把回收替代收益抵扣前景生产。 | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `allocation_shared_energy` | 共享电力 | 优先采用分表计量；无法分表时，以有记录的设备运行时间和功率归属，并披露分配依据及未覆盖用量。 | `kampmann-tip4-epd-2026` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `heater_manufacturing` | 参考产品 | 验收记录及校准秤称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每台或每批 | 代表性生产年度并披露起止日期 | 实际生产场址 | 每台验收净质量 | 计量校准、发票、批次及验收记录 |
| `cp_bom` | `heater_manufacturing` | 材料及部件投入 | 物料清单、进料与称重记录 | 型号；配置；部件号；材料状态；投入质量；验收数量 | 对同一配置逐项核对实装质量，并按热水或燃气路线分别汇总。 | kg | 每台或每批 | 代表性生产年度并披露起止日期 | 实际生产场址 | 每台验收成品设备 | 计量校准、发票、批次及验收记录 |
| `cp_electricity` | `heater_manufacturing` | 交流电 | 电表记录 | 电表边界；读数；单位；时段；验收数量；分配依据 | 读取可追溯电表，按已记录的生产归属分配；如原表为 kWh，按 3.6 MJ/kWh 换算并保留原读数。 | MJ | 每台或每批 | 代表性生产年度并披露起止日期 | 实际生产场址 | 分配电量 / 验收设备数量 | 计量校准、发票、批次及验收记录 |
| `cp_gas` | `heater_manufacturing` | 出厂试验天然气 | 燃气计量及试验记录 | 气体状态；表读数；单位；试验批次；验收数量 | 仅将本场址出厂点火试验实测的气态天然气归属于对应燃气设备。 | m3 | 每台或每批 | 代表性生产年度并披露起止日期 | 实际生产场址 | 每台验收成品设备 | 计量校准、发票、批次及验收记录 |
| `cp_packaging` | `heater_manufacturing` | 瓦楞纸箱 | 发料及称重记录 | 纸箱型号；单箱质量；用箱数；验收数量 | 逐台核对随设备发运的瓦楞纸箱，运输包装不计入 M。 | kg | 每台或每批 | 代表性生产年度并披露起止日期 | 实际生产场址 | 纸箱质量 / 验收设备数量 | 计量校准、发票、批次及验收记录 |
| `cp_scrap` | `heater_manufacturing` | 废钢 | 废钢称重与去向记录 | 材料状态；废钢质量；批次；处置去向；验收数量 | 称量可归属的钢质边角料和不合格件，核对内部返工与外运废物，避免重复计数。 | kg | 每台或每批 | 代表性生产年度并披露起止日期 | 实际生产场址 | 外运废钢质量 / 验收设备数量 | 计量校准、发票、批次及验收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `unit_mass_relation` | `finished_heater` | M = 每台验收完整设备的实测净质量；按 cp_mass 记录，投入按每台汇总。 | M; cp_mass | M kg | `kampmann-tip4-epd-2026` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all inventory rows | 所有行对应同一型号、配置与验收批次；记录热水或燃气路线。 | 物料清单及验收单 |
| `dq_completeness` | all inventory rows | 逐项核对部件、计量能源、包装和废物流；未覆盖的具体交换应另建原子行，不能汇总成其他材料。 | 计量台账、采购及废物联单 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品识别 | 核对机壳为铁或钢、存在电动风扇、热源非电热且路线已声明。 | `un-cpc-3-2025` |
| `validate_mass` | 参考流与质量 | 确认 cp_mass 的同配置验收净质量 M 大于零，包装不计入；参考产品与 finished_heater 行均为 M kg。 | `kampmann-tip4-epd-2026` |
| `validate_inventory` | 原子清单 | 确认适用路线的每个投入、能源、包装和废物为单独具体交换，且与物料清单及计量记录一致。 | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `validate_allocation` | 共享负荷 | 确认共享电力的计量或分配依据已记录，废钢去向单独披露，不以回收收益冲减制造投入。 | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一台验收成品设备的前景制造数据集 |
| downstream_use | 用于构建 process 和 lifecyclemodel，并链接上游材料及部件数据集 |
| allowed_use | 具备实测 M、实际路线及完整原子清单的配置 |
| excluded_use | 未经补充路线专用清单时，不用于电热设备或其他热源变型 |
| required_metadata | 型号；配置；热源；场址；时段；产量；质量与分配记录 |
| required_quality_disclosure | 缺失上游数据、未确认 UUID、无可比范围及任何分配假设 |
| update_trigger | 材料、热源路线、风扇配置或制造工艺发生实质变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | CPC Version 3.0 Structure (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品类别边界 |
| `kampmann-tip4-epd-2026` | dataset | Unit heater: TIP - size 4, EPD-IES-0028786:001 (15 June 2026), https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/7d618de6-69a2-4a59-77f1-08de6ec010de/Documents | 热水路线部件、制造过程和出厂参考 |
| `nist-tn1975r2` | literature | Building Industry Reporting and Design for Sustainability (BIRDS) Commercial Database Technical Manual: Update, NIST Technical Note 1975 Revision 2 (September 2019), https://doi.org/10.6028/NIST.TN.1975r2 | 燃气路线部件识别；该建模案例不作为行业数量范围 |
