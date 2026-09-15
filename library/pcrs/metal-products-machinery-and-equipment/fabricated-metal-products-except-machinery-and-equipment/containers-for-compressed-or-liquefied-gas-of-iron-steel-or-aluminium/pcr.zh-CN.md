---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.containers-for-compressed-or-liquefied-gas-of-iron-steel-or-aluminium
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁或铝制压缩气体或液化气体容器

## 1. 范围与适用性

本 PCR 适用于盛装压缩气体、液化气体或溶解气体的空置铁制、钢制或铝制压力容器的从摇篮到工厂大门生产。所涵盖产品包括可重复充装或不可重复充装的气瓶、管式容器、压力桶及类似金属压力贮器，但其主要承压壳体必须由铁、钢或铝制成。

前景边界始于制造场址接收并验收金属坯料及其他外购投入，止于合格空容器在工厂大门处放行。边界涵盖壳体成形、路线适用的连接、规定的热处理、机械加工及开口加工、清洗和表面精整、制造商实施的压力与力学试验、不合格品处置和最终放行。气体生产与充装、作为独立产品供应的阀门制造、配送、使用、定期检验或重新鉴定、维修及寿命终止阶段不在本 PCR 范围内。

承载结构并非以铁、钢或铝为主的复合材料压力容器、气雾剂罐、小型气筒，以及非用于压缩或液化气体的固定式储罐或贮槽均予排除。数据集必须声明容器类别、可重复充装性、材料与合金、制造路线、水容积、工作压力、试验压力、适用的设计/制造标准、所含附件、表面处理、地理范围和报告期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.containers-for-compressed-or-liquefied-gas-of-iron-steel-or-aluminium |
| classification_refs | CPC 3.0：42220（精确分类语境） |
| covered_products | 盛装压缩气体、液化气体或溶解气体的空置铁制、钢制或铝制压力贮器，包括气瓶、管式容器、压力桶及类似金属容器 |
| excluded_products | 已充装气体的包装；主要承载结构非金属的复合容器；气雾剂罐；小型气筒；固定式非气体储罐；独立供应的阀门；使用、重新鉴定、维修和寿命终止服务 |
| representative_product | 已通过所声明制造符合性试验的空置可重复充装钢制或铝制气瓶 |
| production_route | 以钢坯或钢管为原料的无缝钢路线；以钢板为原料的焊接钢路线；以合金铝坯为原料的无缝铝路线；路线特定的热处理、精整、试验与放行 |
| market_state | 空置、完工、经检验和压力试验、按要求标记并可在制造工厂大门处发运 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够在所声明工作条件下盛装指定压缩气体、液化气体或溶解气体的空置金属压力贮器 |
| How much | 制造工厂大门处 1 kg 合格空容器产品 |
| How well | 符合所声明的材料、水容积、工作压力、试验压力、制造路线、检验计划及适用设计/制造标准 |
| How long or cycle | 一次工厂大门产品输出；下游使用应声明使用寿命及重复充装循环，但不在本从摇篮到工厂大门参考流中建模 |
| reference_flow_link | 1 kg 合格空容器净质量；不含另行供应的气体和附件，除非声明的产品系统明确纳入 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钢铁或铝制压缩气体或液化气体空容器 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 容器类别；可重复充装性；承压壳体材料及合金；投入坯料形态；无缝或焊接路线；水容积；工作压力；试验压力；气体介质相容性；设计/制造标准；检验和试验计划；所含附件；表面处理；空容器净质量；生产地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中的每一项均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息即表示参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及基于质量的材料、废物和排放行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的净质量。除非所声明产品系统明确纳入，否则排除所盛装气体、试验用水、可移除运输包装和另行供应的附件。 |
| `energy_conversion` | 电力和燃料 | 用于能量报告的低位发热量 | MJ | 保留实测采购单位和换算因子。按 1 kWh = 3.6 MJ 将电力报告为 MJ；燃料采用供应商或实验室特定的低位发热量并予披露。 |
| `gas_volume_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 每项体积记录均须声明温度、绝对压力、气体组成和压缩因子约定；汇总前将全部记录换算至同一声明基准状态。 |
| `water_mass_conversion` | 工艺用水和试验用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量计量；若测量体积，则采用测量温度下有记录的密度，并保留原始体积和换算记录。水循环使用时仅计净补水。 |
| `piece_to_mass` | 按件记录的容器 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准的单件或批次称量，将合格件数换算为空容器净产品质量；保留件数、皮重定义、抽样覆盖和变异性。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址收料口已验收的铁、钢或铝坯料及其他外购投入 |
| starting_condition_role | 前景制造从外购材料和能源载体的上游生产及交付完成后开始 |
| product_classification_scope | 定义功能为盛装压缩气体、液化气体或溶解气体的空置金属容器 |
| recursive_input_rule | 若已制造的同范围气体容器作为投入消耗，应将其记录为具有独立上游数据集的外购产品；不得在本前景过程中递归重建其制造清单 |
| upstream_dataset_requirement | 每项外购产品、能源和废物处理服务均须连接地理和技术代表性适当的上游或处理数据集；披露替代项及数据缺口 |
| disclosure | 声明纳入的作业、路线、材料/合金、投入坯料形态、试验标准、不合格品处理、表面精整路线、所含附件、截断、分配、地理范围和时间范围 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景制造 | 纳入从验收坯料到工厂大门处合格空容器的全部场址作业，包括成形、适用的连接和热处理、机械加工、清洗/精整、压力试验、检验、不合格品以及可直接归属的公用工程、废物和排放。 | `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `sb_upstream_links` | 外购投入及服务 | 外购投入生产和外部废物处理保留在前景大门之外，但每项跨界流均须连接适当的上游或处理数据集。 | `ec-pef-method-2021` |
| `sb_exclusions` | 下游阶段 | 排除气体充装、配送、使用、定期检验/重新鉴定、维修和寿命终止；若更广泛研究纳入这些阶段，须作为独立下游过程添加。 | `un-cpc-3-0-structure-2025` |
| `sb_cutoff_disclosure` | 完整性 | 不采用自动的质量、能量或环境显著性截断。量化并论证每项被排除的跨界流，并披露累计遗漏。 | `ec-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_and_shell_forming` | 材料准备与承压壳体成形 | required |  | 前景壳体生产 | 合格成形壳体质量及路线特定金属平衡 |
| `pressure_shell_joining` | 承压壳体接缝及附件连接 | conditional | 声明设计采用焊接或钎焊承压壳体，或合格接头采用药芯焊时纳入 | 前景连接 | 已连接壳体质量及合格接头记录 |
| `heat_treatment` | 路线特定热处理 | conditional | 声明的合金、成形路线或制造标准要求正火、淬火、回火、固溶处理、时效、消除应力或其他热循环时纳入 | 前景材料调质 | 热处理壳体质量及记录的炉次循环 |
| `machining_cleaning_and_finishing` | 机械加工、清洗与表面精整 | required |  | 前景精整 | 已精整壳体表面及试验前合格容器质量 |
| `inspection_pressure_test_and_release` | 检验、压力试验、标记与放行 | required |  | 前景符合性及产品放行 | 放行合格空容器净质量 |

### 过程：材料准备与承压壳体成形（`material_preparation_and_shell_forming`）

#### 输入

##### 产品流

###### 非合金钢坯投入（`steel_billet`）

仅在采用此坯料形态的合格无缝钢路线中记录外购钢坯。保留牌号、炉号、供应商、交付状态和所分配批次。

- 选定流：钢坯 `7de70586-42d8-40bb-a687-e0e0c05722e4`
- 流属性/单位：Mass / kg
- 数量规则：投入所声明生产批次的已验收钢坯实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 无缝钢管投入（`seamless_steel_tube`）

仅在气瓶路线以合格圆形无缝钢管为起始坯料时记录。经审计候选为管线管、非圆形管、有缝管或其他金属产品，因此 Tiangong UUID 尚未解决。

- 选定流：压力气瓶制造用圆形无缝钢管
- 流属性/单位：Mass / kg
- 数量规则：投入所声明生产批次的已验收无缝钢管实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 钢板投入（`steel_plate`）

仅对声明的焊接钢路线记录承压壳体钢板。保留牌号、厚度、炉号、供应商和批次归属。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：投入所声明焊接容器批次的已验收钢板实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 铝合金坯料投入（`aluminium_alloy_billet`）

仅对合格无缝铝路线记录可追溯铝合金坯料。合金、铸次、热处理批次、供应商及交付状态是必需前景限定信息；基于质量的 Tiangong UUID 尚未解决。

- 选定流：无缝气瓶制造用铝合金坯料
- 流属性/单位：Mass / kg
- 数量规则：投入所声明生产批次的已验收铝合金坯料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 成形用电力（`forming_electricity`）

记录分配给切割、加热、挤压、拉拔、旋压、压制及其他壳体成形设备的计量电力，不得包含热处理或下游精整用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于材料准备和壳体成形的计量或核算电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成形壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

###### 氧燃料准备工序用氧气（`cutting_oxygen`）

仅在本过程实际采用氧燃料切割、加热或坡口准备时记录氧气。氧气须与空气和保护气体分开记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：可归属于声明准备路线的计量或气瓶平衡氧气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成形壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢成形废料（`forming_steel_scrap`）

记录离开本过程的已分拣钢制边角料、切屑和不合格成形钢壳材料。不得计入合格产品质量，也不得计入未跨越过程边界而在内部重熔的废料。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开壳体成形过程并与钢材平衡核对的钢废料称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成形钢壳输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

###### 铝成形废料（`forming_aluminium_scrap`）

记录离开本过程的已分拣铝制边角料、切屑和不合格成形铝壳材料。保留合金及污染状态。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：离开壳体成形过程并与铝材平衡核对的铝废料称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成形铝壳输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

##### 基本流

### 过程：承压壳体接缝及附件连接（`pressure_shell_joining`）

#### 输入

##### 产品流

###### 药芯焊丝（`flux_cored_wire`）

仅对实际使用药芯焊丝的合格焊接工艺记录。保留焊材牌号、批次、熔敷金属相容性和接头归属。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：合格承压壳体及附件接头的领用质量减经核实退回的未使用焊丝质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格连接壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_consumables`
- 来源：

###### 连接用电力（`joining_electricity`）

记录为所声明容器路线的合格焊接和钎焊设备计量或分配的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于承压壳体及附件连接的计量或核算电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格连接壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：路线特定热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 炉窑燃烧用天然气（`heat_treatment_natural_gas`）

仅对实际消耗气态天然气的热处理设备记录。声明气体组成、基准状态、低位发热量和炉窑归属。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：合格热处理循环消耗的计量或供应商核对天然气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格热处理壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

###### 炉窑燃烧用柴油（`heat_treatment_diesel`）

仅在柴油是实际热处理燃料时记录。与移动设备柴油分开，并声明牌号、生物源比例和低位发热量。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：合格热处理循环消耗的储罐平衡或发票核对柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格热处理壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

###### 热处理用电力（`heat_treatment_electricity`）

记录分配给所声明热处理循环的电阻加热、感应加热、控制、泵和风机用电。不得与已通过外购热力表示的电力重复计算。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于合格热处理循环的计量或核算电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格热处理壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

###### 淬火补充水（`quench_water`）

仅记录跨越热处理边界的新鲜工艺补水。循环水不得重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配给合格淬火作业并扣除回流或循环水的计量补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格热处理壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 直接化石源二氧化碳（`heat_treatment_co2`）

记录分配给热处理的场内天然气或柴油燃烧所直接排放的化石源二氧化碳。排除上游电力排放，且不得将烟道实测结果与燃料平衡计算重复计入。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据采集的燃料消耗量和经核实的化石碳含量计算，或采用经验证的烟道测量；同一报告期只选择一种方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格热处理壳体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：机械加工、清洗与表面精整（`machining_cleaning_and_finishing`）

#### 输入

##### 产品流

###### 水系清洗用氢氧化钠（`cleaning_sodium_hydroxide`）

仅在氢氧化钠作为所声明清洗或预处理化学品跨越前景边界时记录。保留溶液浓度和供应状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据领用溶液质量与实测浓度计算活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 压力试验前合格精整容器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_chemicals`
- 来源：

###### 清洗用水投入（`cleaning_water`）

记录洗涤、漂洗和水系表面准备所用工艺用水。仅计净补水，并与压力试验用水分开。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配给所声明精整路线的计量清洗和漂洗净补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 压力试验前合格精整容器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：

###### 粉末涂层投入（`powder_coating`）

仅在采用粉末涂层时记录。保留树脂化学组成、颜色、批次、固化膜规范和回收粉末管理方式。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass / kg
- 数量规则：领用涂层质量减经核实退回库存的可复用粉末质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 压力试验前合格粉末涂装容器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_chemicals`
- 来源：

###### 精整用电力（`finishing_electricity`）

记录本过程内分配给机械加工、清洗、干燥、涂层施涂、涂层回收和固化的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于机械加工、清洗和精整的计量或核算电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 压力试验前合格精整容器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

记录离开水系清洗和漂洗过程、进入场内或场外处理前的废水。保留 pH、主要污染物、处理状态和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：跨越过程边界的计量或质量平衡清洗废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 压力试验前合格精整容器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：

###### 未回收粉末涂装残余物（`powder_coating_waste`）

仅记录作为废物离开本过程的废粉和未回收过喷粉末。在过程内部回收并返回施涂系统的粉末不得计入。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass / kg
- 数量规则：从精整过程发运处置的粉末涂装废弃物称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 压力试验前合格粉末涂装容器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_chemicals`
- 来源：

##### 基本流

### 过程：检验、压力试验、标记与放行（`inspection_pressure_test_and_release`）

#### 输入

##### 产品流

###### 水压试验用水（`pressure_test_water`）

记录水压试验的新鲜工艺补水。重复使用的试验用水留在过程内部，不得再次计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：报告期内扣除回收水后的计量新鲜试验补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：

###### 试验与放行用电力（`test_electricity`）

记录分配给已放行容器的压力泵、试验控制、干燥、标记、搬运和最终检验用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于检验、压力试验、干燥、标记和放行的计量或核算电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格空置金属气体容器（`reference_product`）

本流为在制造工厂大门处放行的合格空置压力容器。Tiangong 产品流 UUID 尚未解决；本行仍采用质量基准，并由所声明产品规范完整限定。

- 选定流：钢铁或铝制压缩气体或液化气体空容器
- 流属性/单位：Mass / kg
- 数量规则：通过全部规定检验和试验的容器经校准测得的空容器净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格空容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_product_and_tests`
- 来源：

##### 废物流

###### 不合格钢制容器废料（`rejected_steel_container`）

记录作为废料离开本过程的不合格钢制容器或破坏性钢制试样净质量。不得与成形废料重复计算。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：从最终检验环节发运的已称量不合格钢制容器及破坏性试验废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格空置钢制容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_and_tests`
- 来源：

###### 不合格铝制容器废料（`rejected_aluminium_container`）

记录作为废料离开本过程的不合格铝制容器或破坏性铝制试样净质量。不得与成形废料重复计算。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：从最终检验环节发运的已称量不合格铝制容器及破坏性试验废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格空置铝制容器输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_and_tests`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | 共用制造作业 | 应先采用分表计量、批次归属、设备时间、装炉量、表面积、接头长度或其他因果物理记录避免分配，再采用分配因子。 | `ec-pef-method-2021` |
| `al_shared_utilities` | 服务多个产品的公用工程 | 仅使用有记录的因果驱动量分配剩余共用量。只有当质量代表资源需求时才可采用质量；否则采用机器时间、热负荷、表面积或其他经论证驱动量，并披露敏感性检查。 | `ec-pef-method-2021` |
| `al_scrap` | 金属废料输出 | 钢废料和铝废料在离开前景过程时作为废物流报告。不得从前景清单中扣除避免生产原生金属的信用；任何回收替代应归入明确声明的下游方法。 | `ec-pef-method-2021` |
| `al_rework` | 内部返工 | 未跨越过程边界的返工保留在批次平衡内，其增量能源和材料使用归属于最终合格输出。离开系统的材料仅作为废物记录一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | material_preparation_and_shell_forming | 每项金属坯料投入及每项分拣金属废料输出 | 批次领用、称量、退料、废料及库存记录 | row_id；材料/合金；炉次/铸次；供应商；期初库存；收料；领用质量；退回质量；合格在制品；废料质量；批次；单位 | 按材料和 row_id 核对经校准秤、库存台账、生产领料及废料发运记录 | kg | 每批次并按月结算 | 完整报告期 | 全部范围内成形作业 | 仅汇总分配至该行和批次的记录；防止废料重复归属；按合格输出归一化 | 秤校准；材质证明；炉次/铸次追溯；库存核对；废料联单 |
| `cp_welding_consumables` | pressure_shell_joining | 药芯焊丝 | 焊材领用与退回记录 | row_id；焊材牌号；批次；期初库存；收料；领用质量；退回质量；接头/工单；合格输出 | 针对每项合格焊接工艺核对库房和工单记录 | kg | 每批次并按月结算 | 完整报告期 | 范围内连接承压壳体及附件 | 净消耗等于领用减经核实的未使用退料；按合格连接壳体质量归一化 | 焊材证明；合格工艺；库房核对；工单 |
| `cp_energy_and_fuel` | material_preparation_and_shell_forming; pressure_shell_joining; heat_treatment; machining_cleaning_and_finishing; inspection_pressure_test_and_release | 单项电力、天然气、柴油或氧气行 | 计量表、发票、储罐或气瓶记录 | row_id；计量表/来源 id；期初/期末读数或库存；收料；退回；基准状态；发热量；设备/过程；批次；分配驱动量 | 分别按各载体和 row_id 读取经校准计量表或核对供应及库存记录 | MJ；kWh；kg；m3 | 每批次或每月，并按报告期结算 | 完整报告期 | 全部直接控制的范围内设备 | 采用声明的单位换算及因果分配；不得合并载体；按过程或参考输出归一化 | 校准；发票；储罐/气瓶台账；燃料规范；分配工作表 |
| `cp_water_balance` | heat_treatment; machining_cleaning_and_finishing; inspection_pressure_test_and_release | 单项工艺用水投入或清洗废水输出 | 计量及循环水平衡 | row_id；计量表 id；期初/期末读数；补水；循环量；排放量；转移量；温度；密度；过程；批次 | 核对进水、回用、库存和排水计量表；废水跨界时对组成取样 | kg；m3 | 每批次或每月，并按报告期结算 | 完整报告期 | 范围内淬火、清洗、漂洗和水压试验系统 | 投入仅计净补水，输出仅计跨界废水；以有记录密度将体积换算为质量 | 计量表校准；水平衡；密度记录；废水分析；排放或转移记录 |
| `cp_surface_chemicals` | machining_cleaning_and_finishing | 氢氧化钠、粉末涂层和粉末涂装废弃物分别记录 | 化学品领用、浓度、回收、退回及废物记录 | row_id；化学品/产品；浓度；批次；期初库存；收料；领用；回收；退回；期末库存；废物质量；去向 | 使用经校准质量记录和实测浓度分别核对每种具名化学品 | kg | 每批次并按月结算 | 完整报告期 | 所声明清洗和涂装路线 | 单独计算活性氢氧化钠；净投入和废物均排除可复用回收粉末；按合格精整输出归一化 | 供应商规范；浓度试验；秤校准；库存平衡；废物联单 |
| `cp_direct_emissions` | heat_treatment | 场内燃料燃烧的化石源二氧化碳 | 燃料碳平衡或经验证烟道测量 | row_id；燃料量；燃料碳含量；生物源比例；氧化基准；烟道结果；监测期；所分配炉窑输出 | 每项排放和报告期采用一种声明方法；如两类数据均存在则核对但不得重复计量 | kg | 每炉批次并按年度/报告期结算 | 完整报告期 | 范围内燃料燃烧热处理设备 | 应用 `cr_fossil_co2`；仅分配已归属燃料或实测烟道质量；按合格热处理输出归一化 | 燃料分析或供应商规范；经校准计量表；烟道 QA 记录；核对工作表 |
| `cp_final_product_and_tests` | inspection_pressure_test_and_release | 合格产品及不合格钢制或铝制容器行 | 试验、检验、称量、标记及不合格记录 | row_id；序列号/批次；材料；路线；空容器质量；水容积；工作压力；试验压力；试验方法；结果；不合格原因；废料质量；放行日期 | 将经校准称量及规定检验/试验记录链接至每个序列号或生产批次 | kg；件；声明的压力单位 | 每件或规定批次 | 完整报告期 | 全部范围内放行或不合格容器 | 汇总合格空容器净质量作为分母；不合格材料按材质仅归属一次；全部行按合格质量归一化 | 秤和压力表校准；试验证书；材料追溯；放行授权；不合格处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalization` | 每项清单行 | 归一化量 = 同一产品系统和报告期内该行数量 / 放行合格空容器净质量。 | 行数量；合格参考产品质量；产品和期间归属 | 每 1 kg 参考产品的数量 |  |
| `cr_active_sodium_hydroxide` | cleaning_sodium_hydroxide | 活性氢氧化钠质量 = 溶液质量 × 实测氢氧化钠质量分数；当载体水具有实质性时，将其保留在水平衡中。 | 领用溶液质量；实测浓度 | kg 活性氢氧化钠 |  |
| `cr_fossil_co2` | heat_treatment_co2 | 化石源 CO2 质量 = 化石燃料质量 × 化石碳质量分数 × 氧化分数 × 44/12，或根据标准状态气体体积作等效计算；不得叠加表示同一排放的烟道结果。 | 燃料量；基准状态或密度；化石碳含量；氧化分数 | kg 化石源二氧化碳 |  |
| `cr_metal_balance` | 钢和铝材料行 | 对每种材料和批次：投入质量 = 合格在制品质量 + 退回可复用坯料 + 已报告废料/废物 + 有记录库存变化；调查并披露残差。 | 材料领用；退回；合格输出；废料；库存变化 | 分材料核对及归一化流 |  |
| `cr_recovered_powder` | powder_coating; powder_coating_waste | 粉末净投入 = 领用粉末 − 未使用退料；废物输出 = 发运处置的收集残余物；过程内部回收复用的粉末既非新增投入，也非跨界废物。 | 领用；未使用退料；回收复用；废物发运 | kg 粉末投入和 kg 粉末涂装废弃物 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保持材料/合金、制造路线、水容积、工作压力、试验压力、适用标准、所含附件、空容器质量与放行状态之间的序列号或批次级链接。 | 产品规范；图纸；材质证明；试验和放行记录 |
| `dq_primary_data` | 前景过程 | 对直接控制的材料、能源、水、废物、试验和排放流，在一个有代表性的完整报告期采用场址特定记录；解释缺失记录和替代项。 | 计量及库存核对；发票；生产台账；数据缺口日志 |
| `dq_temporal` | 全部行 | 分子和合格输出分母采用相同报告期；异常停机、投产调试或试生产应排除，除非单独披露。 | 生产日历；计量日期；批次映射；例外日志 |
| `dq_measurement` | 实测数量 | 使用适合该数量的经校准设备，并保留原始读数、单位、换算因子、基准状态和更正记录。 | 校准证书；原始读数；换算工作表；QA 批准 |
| `dq_completeness` | 全部边界跨越 | 核对材料、水、燃料和产品平衡；记录每项排除及其累计显著性，不依赖自动截断。 | 平衡工作表；排除项登记；完整性审查 |
| `dq_upstream_matching` | 关联数据集 | 按材料牌号/状态、能源载体、地理范围、技术和参考单位匹配上游数据集；披露代理及未解决身份。 | 供应商规范；数据集元数据；代理论证 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | 参考产品 | 数据包若缺少容器类别、可重复充装性、壳体材料/合金、坯料形态、无缝/焊接路线、水容积、工作压力、试验压力、适用标准、所含附件、表面处理、地理范围、报告期或空容器净质量，则予拒绝。 | `un-cpc-3-0-structure-2025`; `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `vr_route_consistency` | 过程清单 | 每项报告流和过程须与声明路线一致。条件行仅在该作业或材料可证明不适用时方可缺省；不得以零替代缺失数据。 | `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `vr_test_traceability` | 检验与放行 | 按所声明标准规定频次提供可追溯检验及压力/力学试验证据，并从合格输出中排除试验失败容器。 | `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `vr_mass_balance` | 金属和成品 | 钢和铝平衡须分别在场址有记录测量不确定度内闭合；调查残差，并防止成形废料、破坏性试样和不合格容器重复计量。 |  |
| `vr_energy_no_double_count` | 电力和燃料 | 将过程级能源与设施总量核对，并拒绝成形、连接、热处理、精整、试验、外购热力和上游电力排放之间的重叠。 |  |
| `vr_emission_no_double_count` | 直接化石源二氧化碳 | 同一来源和期间可接受经验证燃料碳计算或代表性烟道结果中的一种；若两者均存在，只采用一种，另一种保留作核对。 |  |
| `vr_cutoff_and_allocation` | 完整性和共用作业 | 要求披露排除项、分配驱动量、剩余共用量；当分配选择可能实质影响结果时须披露敏感性。 | `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 空置铁制、钢制或铝制压缩气体或液化气体容器的从摇篮到工厂大门前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与所声明容器设计、材料、路线、工作条件、地理范围、所含附件和工厂大门边界相匹配的产品 LCA、供应链模型、采购比较及生命周期模型 |
| excluded_use | 未独立建立气体/充装模型的已充装气体包装；范围外复合容器；使用阶段安全或寿命声明；定期重新鉴定；维修；寿命终止；或未作功能调整而比较压力工况实质不同的容器 |
| required_metadata | canonical PCR id；CPC 语境；容器类别；可重复充装性；材料/合金；坯料形态；路线；水容积；工作压力；试验压力；标准；检验计划；附件；表面处理；空容器质量；地理范围；报告期；分配；截断；来源及数据集版本 |
| required_quality_disclosure | 初级数据覆盖；计量表和秤校准；材料和试验追溯；材料/水/能源核对；不合格品处理；直接排放方法；分配驱动量；排除项；代理；未解决 UUID；不确定性及代表性 |
| update_trigger | 合金或坯料形态、成形/连接/热处理路线、容器设计或压力等级、试验标准、表面处理、所含附件、场址能源或水系统、分配、地理范围或代表性报告期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-06-23；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 产品分类身份及与非压力储罐的区分 |
| `us-dot-49-cfr-178-37` | 标准（`standard`） | 美国交通部，49 CFR 178.37，DOT 3AA 和 3AAX 无缝钢制气瓶规范，https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-178/subpart-C/section-178.37（访问于 2026-09-05） | 无缝钢范围、材料追溯、制造、热处理、检验、压力试验及不合格记录 |
| `us-dot-49-cfr-178-46` | 标准（`standard`） | 美国交通部，49 CFR 178.46，DOT 3AL 无缝铝制气瓶规范，https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-178/subpart-C/section-178.46（访问于 2026-09-05） | 无缝铝范围、可追溯坯料、反向挤压、固溶热处理和时效、压力试验及力学试验 |
| `us-dot-49-cfr-178-50` | 标准（`standard`） | 美国交通部，49 CFR 178.50，DOT 4B 焊接或钎焊钢制气瓶规范，https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-178/subpart-C/section-178.50（访问于 2026-09-05） | 焊接钢范围、连接、材料追溯、压力试验及力学试验 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，《关于采用环境足迹方法的委员会建议（EU）2021/2279》，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32021H2279（访问于 2026-09-05） | 功能单位框架、系统边界与截断披露、前景数据质量及分配层级 |
