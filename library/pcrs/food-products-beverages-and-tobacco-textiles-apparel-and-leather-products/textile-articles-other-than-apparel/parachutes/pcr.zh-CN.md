---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.parachutes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 降落伞

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 27170 所含成品降落伞和出厂完整降落伞组件的前景制造数据包。只有在数据包声明实际产品类型与配置时，才涵盖人员、应急、备用、货运、牵引、减速和阻力伞配置。前景边界始于制造场址接收的合格外购材料与部件，止于通过放行并完成包装的出厂产品。

本 PCR 不涵盖滑翔伞、风筝、帆、帐篷、降落伞操作服务、重新打包或维护服务，也不涵盖作为独立产品出售的织物、绳索、织带、背带、容器和五金部件。没有可追溯生产记录时，不得将不同降落伞类型或材料体系平均合并。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.parachutes` |
| classification_refs | CPC 3.0 `27170` Parachutes |
| covered_products | 成品降落伞和出厂完整降落伞组件；在明确声明时包括人员、应急、备用、货运、牵引、减速和阻力伞配置 |
| excluded_products | 滑翔伞；风筝；帆；帐篷；服务；以及作为独立产品出售的织物、绳索、织带、背带、容器或五金部件 |
| representative_product | 出厂的人员用翼型降落伞组件，具有明确的伞衣、悬挂绳、背带/容器和开伞系统配置 |
| production_route | 合格材料与部件接收和检验；排料与裁剪；缝制；适用时进行悬挂绳、织带和五金件集成；最终检验与功能放行；包装 |
| market_state | 工厂门口状态、已完成检验与放行的降落伞，并声明所含附件与包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合所声明类型、设计配置、运行限制和放行要求的成品降落伞 |
| How much | 1 kg 不含包装净产品质量 |
| How well | 已按声明的技术规范、检验计划、功能试验和适用认证或标准放行 |
| How long or cycle | 一个已放行生产批次归一化到 1 kg；声明的使用寿命或退役限制属于元数据，不改变参考数量 |
| reference_flow_link | `parachute_manufacturing` 中的 `reference_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Parachutes `887e7332-42b2-496b-aea3-0e9308ff8f17` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 降落伞用途类别和类型；伞衣几何形状和标称尺寸；伞衣纤维、结构、涂层和整理；悬挂绳材料和类型；绳长调整或声明的绳系配置；织带材料；所含背带、容器、开伞装置和连接五金配置；适用时的最小和最大工作质量；适用时的最大开伞速度；适用认证或标准；放行检验和功能试验；使用寿命或退役限制；所含附件；包装纳入范围和皮重；制造场址；地理范围；生产期；分配基础 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 验收合格的成品降落伞输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量不含包装的合格输出净质量，或用经称量核验的受控 BOM 推导；排除不合格产品、可重复使用运输物和包装皮重。 |
| `bom_mass` | 材料、部件、包装和固体废物交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用接收、领退料、受控 BOM 或校准称量记录中的实际批次数量；不得依据通用降落伞设计推断数量。 |
| `energy_measurement` | 纳入操作使用的场址电力 | Energy | kWh | 使用同一生产期的区间电表或分表记录；一个电表覆盖多个产品时，应记录换算和分配。 |
| `configuration_traceability` | 产品和材料记录 | Mass and configuration record | kg | 保留产品件号、批次、材料规范和配置关联，使记录质量能够与已放行产品核对。 |
| `measurement_period_alignment` | 所有前景交换 | 该交换记录的流属性 | 该交换记录的单位 | 输出、材料、能源、包装和废物使用同一批次或有文件记录的共同生产期；披露任何时间错配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 降落伞制造场址接收的合格外购织物、缝纫线、织带、悬挂绳、连接五金、开伞部件、公用工程和包装 |
| starting_condition_role | 干法制造前景的起始条件；上游纤维、织物、涂层、整理、金属部件、发电和包装生产保留为链接的背景过程，除非在报告场址进行 |
| product_classification_scope | CPC 3.0 `27170` 下的成品降落伞和完整降落伞组件，按所声明的用途类别、伞衣类型、材料体系和所含部件配置区分 |
| recursive_input_rule | 外购成品降落伞或同类别完整组件保留为一个技术领域产品投入并链接供应商数据集；不得在本前景过程中递归重建 |
| upstream_dataset_requirement | 每项外购材料、部件、公用工程和包装交换应链接具有供应商或地理代表性的数据集；相关时披露纺织品预处理、染色、涂层和整理路线 |
| disclosure | 声明哪些操作在场内进行、哪些部件完整外购、所有未纳入的配置要素、场址与时期、纺织品整理/涂层路线、放行依据、包装依据和分配方法 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_foreground_operations` | 纳入接收检验、排料与裁剪、缝制、悬挂绳和织带操作、场内实施的连接五金与开伞部件集成、最终检验、功能放行、包装、直接用电，以及单独计量的材料损耗和不合格品。 | `faa-parachute-rigger-handbook-2015` |
| `boundary_upstream_textiles` | 外购纤维、织物、缝纫线、织带、绳索、染色、涂层和整理作为上游背景链接，除非该操作在报告场址发生；在供应商元数据中保留实际纺织材料和湿法加工路线。 | `jrc-textiles-bref-2023` |
| `boundary_configuration_separation` | 人员、货运、牵引、减速、阻力伞、伞衣形状、纤维体系、涂层/整理和所含组件配置应分开，除非有按产量加权的前景记录支持汇总。 | `faa-parachute-rigger-handbook-2015`; `eu-environmental-footprint-2021` |
| `boundary_downstream_exclusion` | 本制造前景不纳入工厂门口之后的运输、安装、使用前包装、展开、重新打包、服役中检验、维修和生命末期；将运行和使用寿命限制保留为产品元数据。 | `faa-parachute-rigger-handbook-2015` |
| `boundary_same_category_input` | 外购成品降落伞或同类别完整组件记录为单一技术领域投入并披露其所含质量；不得再次计算其内部材料。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `parachute_manufacturing` | 降落伞制造、放行与包装 | `required` | 工厂门口降落伞数据集始终要求 | 合并的前景制造过程 | `reference_output` |

### 过程：降落伞制造、放行与包装（`parachute_manufacturing`）

本过程表示将合格外购材料和部件转化为一个明确声明的已放行降落伞配置所需的场址操作。仅当特定路线交换实际跨越本过程边界时才记录。

#### 输入

##### 产品流

###### 聚酰胺 6.6 伞衣织物（`nylon66_canopy_fabric_input`）

当机织聚酰胺 6.6 降落伞伞衣织物发往声明产品的裁剪工序时，其跨越边界。数量为该生产批次实际领用质量减去受控退料。

- 选定流：Woven polyamide 6.6 parachute-canopy fabric
- 流属性/单位：Mass / kg
- 数量规则：记录合格生产批次的领用质量减去退回的未用织物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 聚酯伞衣织物（`polyester_canopy_fabric_input`）

当机织聚酯降落伞伞衣织物是声明的伞衣材料时，其跨越边界。应与聚酰胺织物分开记录，且仅用于适用配置。

- 选定流：Woven polyester parachute-canopy fabric
- 流属性/单位：Mass / kg
- 数量规则：记录合格生产批次的领用质量减去退回的未用织物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 聚酯缝纫线（`polyester_sewing_thread_input`）

聚酯缝纫线发往接缝、加强和连接操作时跨越边界。质量取自受控领退料记录或核验过的线轴称量记录。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：记录合格生产批次的领用缝纫线质量减去未用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 聚酰胺 6.6 降落伞织带（`nylon66_webbing_input`）

聚酰胺 6.6 降落伞织带在为所声明承载配置裁切和装配时跨越边界。使用实际领用与退料质量，不得使用通用背带估算。

- 选定流：Polyamide 6.6 parachute webbing
- 流属性/单位：Mass / kg
- 数量规则：记录合格生产批次的领用织带质量减去未用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 聚酯悬挂绳（`polyester_suspension_cord_input`）

编织聚酯降落伞悬挂绳为所声明绳系配置裁切、调整和连接时跨越边界。应与 UHMWPE 绳分开记录。

- 选定流：Braided polyester parachute suspension cord
- 流属性/单位：Mass / kg
- 数量规则：记录合格生产批次的领用绳质量减去未用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### UHMWPE 悬挂绳（`uhmwpe_suspension_cord_input`）

当编织超高分子量聚乙烯降落伞悬挂绳用于声明的绳系配置时，其跨越边界。由于材料身份不同，应与聚酯绳分开记录。

- 选定流：Braided ultra-high-molecular-weight polyethylene parachute suspension cord
- 流属性/单位：Mass / kg
- 数量规则：记录合格生产批次的领用绳质量减去未用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 不锈钢连接五金（`stainless_steel_hardware_input`）

成品不锈钢降落伞连接五金安装到所声明配置时跨越边界。记录实际合格五金质量和零件身份。

- 选定流：Finished stainless-steel parachute connector hardware
- 流属性/单位：Mass / kg
- 数量规则：依据受控领料和检验记录，记录已安装质量以及单独记录的不合格件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 铝合金连接五金（`aluminium_hardware_input`）

成品铝合金降落伞连接五金安装到所声明配置时跨越边界。应与不锈钢五金分开记录。

- 选定流：Finished aluminium-alloy parachute connector hardware
- 流属性/单位：Mass / kg
- 数量规则：依据受控领料和检验记录，记录已安装质量以及单独记录的不合格件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`faa-parachute-rigger-handbook-2015`

###### 低压交流电（`low_voltage_electricity_input`）

低于 1 kV 的交流电通过场址电表跨越边界，用于裁剪、缝制、装配、检验和包装。数据包必须识别实际供电组合与地理范围。

- 选定流：Alternating-current electricity, below 1 kV, site consumption mix
- 流属性/单位：Energy / kWh
- 数量规则：记录纳入操作的计量电力，并按 `calc_shared_electricity` 分配共用电表。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 瓦楞纸箱（`corrugated_board_box_input`）

瓦楞纸箱作为所声明产品的销售包装被消耗时跨越边界。记录实际包装质量；除非所有权转移，否则排除可重复使用运输包装。

- 选定流：corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：记录已放行生产批次消耗的纸箱质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚乙烯包装膜（`polyethylene_film_input`）

聚乙烯薄膜作为所声明产品的单项销售包装被消耗时跨越边界。薄膜应与瓦楞纸箱分开记录。

- 选定流：Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：记录已放行生产批次消耗的薄膜质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 废物流

不规定废物投入。若场内处理特定外部产生废物，应将其作为单项原子前景交换加入，并具有独立的身份审查和记录。

##### 基本流

不规定基本流投入。仅当直接计量的基本流在报告场址实际跨越环境边界时才记录。

#### 输出

##### 产品流

###### 参考降落伞输出（`reference_output`）

合格成品降落伞是完成最终检验和功能放行后的定量参考输出。其固定数量是所有其他交换的归一化分母。

- 选定流：Parachutes `887e7332-42b2-496b-aea3-0e9308ff8f17`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 不含包装的合格降落伞净输出。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 聚酰胺 6.6 伞衣织物边角料（`nylon66_fabric_offcuts_output`）

当裁剪损耗未在同一生产期内部复用时，聚酰胺 6.6 机织伞衣织物边角料离开过程。记录其实测质量和实际去向。

- 选定流：Polyamide 6.6 woven parachute-fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部复用后，记录离开过程的分类边角料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 聚酯伞衣织物边角料（`polyester_fabric_offcuts_output`）

当裁剪损耗未在同一生产期内部复用时，聚酯机织伞衣织物边角料离开过程。此废物应与聚酰胺边角料分开记录。

- 选定流：Polyester woven parachute-fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部复用后，记录离开过程的分类边角料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 聚酯缝纫线边角料（`polyester_thread_offcuts_output`）

聚酯缝纫线头和不可用余料作为独立废物交换离开过程。质量由分类称量或有文件记录的领退料平衡确定。

- 选定流：Polyester sewing-thread offcuts
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部复用后，记录离开过程的分类线废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 聚酯悬挂绳边角料（`polyester_cord_offcuts_output`）

聚酯悬挂绳切头和不合格修剪段作为材料特定废物交换离开过程。不得与织物或缝纫线废物合并。

- 选定流：Polyester suspension-cord offcuts
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部复用后，记录离开过程的分类绳索废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 不合格不锈钢连接五金（`rejected_stainless_hardware_output`）

检验不合格且不能退回库存或供应商时，不合格不锈钢降落伞连接五金离开过程。质量应与铝合金五金分开记录。

- 选定流：Rejected stainless-steel parachute connector hardware
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的不合格五金称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 不合格铝合金连接五金（`rejected_aluminium_hardware_output`）

检验不合格且不能退回库存或供应商时，不合格铝合金降落伞连接五金离开过程。应将其记录为独立原子废物交换。

- 选定流：Rejected aluminium-alloy parachute connector hardware
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的不合格五金称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 不含包装的合格降落伞净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

##### 基本流

干法装配不规定默认基本流输出。仅报告在场址直接测量且实际跨越环境边界的排放，每项均作为具有已审查身份的独立交换。

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_avoid` | 优先采用过程细分、专用计量和配置特定材料记录以避免分配。 | `iso-14044-2006`; `eu-environmental-footprint-2021` |
| `allocation_shared_electricity` | 共用电表按实测机器时间、分表负荷或其他有文件记录的因果驱动因素分配；仅在证明因果关系时使用输出质量，并对重要共用负荷报告敏感性检查。 | `iso-14044-2006` |
| `allocation_configuration_families` | 使用保留所声明产品类型和配置的生产记录，在不同配置系列之间分配共用操作；不得对不同降落伞使用无权重平均。 | `eu-environmental-footprint-2021` |
| `allocation_rework_and_scrap` | 返回同一批次的内部返工不是第二产品。可销售共产品应单独记录，并在可行时按有文件记录的物理关系分配；不得在前景清单内应用避免负担抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output_release` | `parachute_manufacturing` | `reference_output` | 放行与称量记录 | product type; part number; lot; configuration; accepted units; net mass; packaging tare; operating limits; inspection status; functional-test status | 校准称量并关联受控放行记录 | kg | 每个已放行批次 | 与清单投入相同批次或所声明生产期 | 报告制造场址 | 仅汇总合格产品净质量 | 校准记录；放行证书；检验与试验记录 |
| `cp_material_bom` | `parachute_manufacturing` | Material and component inputs | BOM、接收、领料、退料和检验记录 | row_id; material or component name; specification; supplier; part number; lot; issued quantity and mass; return quantity and mass; rejected quantity and mass | 核对受控 BOM、仓库领退料和校准质量记录 | kg | 每个生产批次 | 与输出相同批次或所声明生产期 | 报告制造场址 | 领用减未用退料，并保留材料特定行 | 批准 BOM；采购/接收记录；秤校准；批次追溯 |
| `cp_energy_records` | `parachute_manufacturing` | `low_voltage_electricity_input` | 电表与运行记录 | meter id; opening and closing readings; interval; machine or area; machine time; allocation driver; supply mix; geography | 读取专用或共用电表并记录因果分配驱动因素 | kWh | 电表区间和每个报告期 | 覆盖同一声明生产期 | 报告制造场址 | 汇总纳入用电，扣除有记录的非生产负荷，再按 `calc_shared_electricity` 分配 | 电表校准或电费账单；运行日志；分配工作表 |
| `cp_waste_records` | `parachute_manufacturing` | Waste outputs | 分类称量与去向记录 | row_id; material identity; container tare; gross and net mass; lot; internal reuse; return to supplier; destination | 称量每项材料特定废物流并核对内部复用或退回 | kg | 每次废物收集事件 | 与输出相同批次或所声明生产期 | 报告制造场址 | 按 row_id 汇总净质量；排除有记录的同周期内部复用 | 秤校准；废物日志；转移或退回记录 |
| `cp_packaging_records` | `parachute_manufacturing` | Packaging inputs | 包装与材料领用记录 | row_id; packaging specification; quantity; unit mass; total mass; reusable status; ownership transfer; lot | 称量代表性包装部件并将消耗数量与已放行件数核对 | kg | 每个已放行批次 | 与输出相同批次或所声明生产期 | 报告制造场址 | 汇总随产品转移的包装质量；单独报告可重复使用运输物 | 包装规范；秤校准；包装记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有非参考交换 | 归一化数量 = 归属于声明产品的记录数量除以合格的不含包装输出净质量 | 归属后的交换数量；来自 `cp_output_release` 的合格输出质量 | 每 1 kg 参考输出的交换数量 | `iso-14044-2006` |
| `calc_shared_electricity` | `low_voltage_electricity_input` | 归属电量 = 纳入电表总用电量乘以所声明因果驱动份额；记录排除负荷和驱动因素分母 | 电表读数；运行日志；因果驱动总量 | 参考归一化前的归属 kWh | `iso-14044-2006` |
| `calc_material_balance` | 材料和固体废物交换 | 对每个材料族核对领用质量、未用退料、合格产品纳入量、内部复用和外排废物；调查并披露残差 | `cp_material_bom`; `cp_output_release`; `cp_waste_records` | 材料族平衡与残差 | `eu-environmental-footprint-2021` |
| `calc_packaging_normalization` | `corrugated_board_box_input`; `polyethylene_film_input` | 包装数量 = 随产品转移的包装质量除以合格的不含包装输出净质量 | `cp_packaging_records`; `cp_output_release` | 每 kg 参考输出的包装 kg 数 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_configuration` | 参考输出和所有材料行 | 保留已放行产品身份、类型、件号、材料规范和所含配置；不得替换为通用降落伞画像。 | 受控规范；BOM；放行记录；产品标识或等效追溯记录 |
| `dq_uuid_identity` | 含 UUID 的行 | 仅使用经混合检索与 state-100 直读确认具有相同语义流、流类型、参考属性和单位的 UUID；其他 UUID 保持缺失。 | manifest 审查元数据中的 UUID enrichment audit |
| `dq_primary_data` | 前景数量 | 使用所声明生产期的场址记录；披露覆盖度、校准、分配和任何时间错配。 | 上述协议记录和质量证据 |
| `dq_completeness` | 完整过程清单 | 纳入跨越声明边界的每项材料、部件、公用工程、包装部件、废物和场址直接排放；解释确实不存在的路线特定交换。 | 签署的清单完整性审查；材料与能源核对 |
| `dq_mass_balance` | 含质量交换 | 核对材料族投入、合格输出、退料、内部复用和外排废物；调查并披露残差，不得虚构平衡流。 | `calc_material_balance` 工作表 |
| `dq_supplier_links` | 上游纺织品和部件 | 使用具有供应商或地理代表性的上游数据集，并在重要时披露纤维、纺织结构、涂层/整理、金属和部件生产路线。 | 供应商声明；数据集元数据；采购规范 |

## 9. 校验规则

| rule_id | 规则 | severity |
| --- | --- | --- |
| `validate_reference_identity` | 参考输出必须是 Product flow `887e7332-42b2-496b-aea3-0e9308ff8f17`，分类为 CPC 27170，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | error |
| `validate_reference_amount` | 定量参考必须恰好为 1 kg 不含包装的合格降落伞净输出。 | error |
| `validate_required_qualifiers` | 第 3 节每项必需限定信息必须存在，或以产品特定理由明确标为不适用。 | error |
| `validate_scope_and_configuration` | 产品分类、用途类别、类型、配置、所含部件和生产路线必须与所声明数据包一致；不得静默平均不同配置。 | error |
| `validate_atomic_inventory` | 每张清单卡必须表示一个具体原子交换；集合标签、流选择器和合并备选项无效。 | error |
| `validate_foreground_records` | 每项非参考数量必须由所链接的前景采集协议支持；不得以 AI 编写范围或通用默认值替代缺失记录。 | error |
| `validate_boundary_links` | 每项外购材料、部件、公用工程和包装交换必须链接适当上游数据集，或明确记录未解决的数据集缺口；场内与场外操作不得重复计算。 | error |
| `validate_mass_balance` | 材料族平衡必须包括领用质量、退料、合格产品纳入量、内部复用和外排废物，并调查和披露残差。 | error |
| `validate_energy_reconciliation` | 电力必须与电表记录核对；任何共用电表分配必须说明因果驱动因素及其分母。 | error |
| `validate_release_evidence` | 合格输出必须链接所声明产品的放行、检验、功能试验、质量、批次和配置证据。 | error |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个明确声明的降落伞配置、制造场址、地理范围和生产期的前景制造数据包 |
| downstream_use | 经审查的 `process` 和 `lifecyclemodel` 投影以及产品 LCI/LCA 研究的输入 |
| allowed_use | 当范围、材料体系、运行限制、地理范围、时期和分配基础与声明数据集匹配时，用于产品特定或配置系列研究 |
| excluded_use | 无限定的类别级平均；不同降落伞类型或材料体系之间替代；超出声明边界的服务、维护、使用或生命末期主张 |
| required_metadata | PCR id；CPC 代码；参考 UUID；产品类型和配置；材料规范；所含部件；运行和使用寿命限制；认证或标准；检验与试验依据；场址；地理范围；时期；边界；分配；包装依据 |
| required_quality_disclosure | 一手数据覆盖；电表和秤校准；供应商数据集代表性；UUID 缺口；时间错配；分配份额；质量平衡残差；排除操作；路线特定缺失交换 |
| update_trigger | 产品类型、伞衣几何形状、材料或涂层体系、悬挂绳或五金配置、所含组件、制造路线、场址、供电组合、认证依据或生产期代表性发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，*Central Product Classification Version 3.0—Explanatory Notes*，CPC 27170，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方类别身份及其与相邻纺织制品的区分 |
| `faa-parachute-rigger-handbook-2015` | `handbook` | 美国联邦航空管理局，*Parachute Rigger Handbook*，FAA-H-8083-17，Change 1，2015。https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/prh_change1_changes.pdf | 降落伞结构、材料、部件兼容性、运行限制标识、检验、试验、质量控制和放行证据 |
| `jrc-textiles-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Textiles Industry*，2023。https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | 上游纺织品预处理、染色、印花、涂层和整理的边界披露 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，*Environmental management—Life cycle assessment—Requirements and guidelines*；2022 年复审确认。https://www.iso.org/standard/38498.html | 系统边界、分配层级、清单计算和数据质量规则 |
| `eu-environmental-footprint-2021` | `official_guidance` | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | 生命周期数据质量、供应链代表性、类别特异性、核对和报告规则 |
