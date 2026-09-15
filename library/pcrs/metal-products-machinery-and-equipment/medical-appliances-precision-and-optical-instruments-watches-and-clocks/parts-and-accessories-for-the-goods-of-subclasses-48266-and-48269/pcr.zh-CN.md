---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48266-and-48269
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 48266和48269子类商品的零件及附件

## 1. 范围与适用性

本 PCR 适用于专门为以下商品设计的可销售零件、分总成、备件或附件：（a）液压或气动自动调节或控制仪器及装置；（b）未另列明的其他测量、检验、调节或控制仪器、器械和机器。前景制造边界从接收材料和外购组件开始，包括部件制造、适用的表面处理或电子装配、最终检验以及销售单元包装，止于工厂门口。

生产者应声明主机商品子类、零件或附件功能、设计版本、物料清单、制造路线、表面处理、电子内容、合格产品单位质量、销售单元包装、生产地域和参考期。本 PCR 不包括完整主机仪器或装置、尚未制成专用零件的通用材料、归入 CPC 4828 其他子类的零件、报告场址以外的主机装配、分销、使用、维护和寿命终止。

由于本类别高度异质，本 PCR 不规定默认产品配方或通用数值清单。前景数据包应将实际物料清单中的每项交换以及实际路线特定交换逐项记录为原子流。下列清单为共同的最低模式，各行仅在其规定条件成立时适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48266-and-48269 |
| classification_refs | CPC 3.0：48284（精确分类语境） |
| covered_products | CPC 48266或CPC 48269商品专用的机械、液压、气动、电气或电子零件、分总成、备件和附件 |
| excluded_products | CPC 48266或48269完整商品；其他CPC 482子类商品的零件；通用原材料；安装、修理、校准、分销、使用和寿命终止服务 |
| representative_product | 具有产品特定物料清单和制造路线的一种已声明且检验合格的可销售零件或附件配置 |
| production_route | 产品特定的成形、机加工或模塑组合；条件性表面处理；条件性电子装配；必需的最终检验和包装 |
| market_state | 经检验并按声明包装的工厂门口未使用可销售零件或附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为CPC 48266或48269中的一个已识别主机设计提供具有规定配合、形状、接口以及控制或测量支持功能的零件或附件 |
| How much | 工厂门口1 kg检验合格的可销售零件或附件输出 |
| How well | 符合生产者声明的图样版本、材料规范、尺寸公差、接口要求和最终验收试验 |
| How long or cycle | 一个工厂门口生产参考期；使用寿命不在本从摇篮到工厂门口参考流范围内 |
| reference_flow_link | 已声明产品配置的合格输出质量，不含不合格品，并归一化至1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 48266和48269子类商品的零件及附件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主机商品子类（48266或48269）；零件/附件名称和功能；产品和图样版本；材料牌号和供货形态；合格产品单位质量；制造路线和过程所有权；适用时的表面处理及槽液/涂层化学品；适用时的电子内容和已装配线路板内容；验收试验；所含销售单元包装；生产地域；技术；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

参考产品 UUID 尚未解决。生产者不得以完整仪器、CPC 48281零件或分类不同的敏感元件作为替代 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品以及按质量计量的材料、废物和包装行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明产品和材料规范一致地使用净干质量或接收状态质量。合格输出与不合格品应分别称量，并将所有清单数量归一化至1 kg合格输出。 |
| `mu_piece_to_mass` | 仅有件数或销售单元记录的生产和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一产品版本和销售单元配置的有记录代表性实测单件质量换算件数，并保留样本量、秤分辨率和抽样日期。 |
| `mu_electricity` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始读数，并按1 kWh = 3.6 MJ换算；不得将购入电力与燃料或购入热量合并。 |
| `mu_gas_volume` | 工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明供应商或仪表的参考温度和压力；汇总前将所有气体体积换算至同一已声明基准。 |
| `mu_solution_mass` | 氢氧化钠溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和浓度；按已声明氢氧化钠产品基准报告，禁止无说明地将溶液质量换算为纯NaOH。 |

## 5. 系统边界

前景边界始于规定材料、外购零件和消耗品越过报告场址大门，止于合格零件或附件及已声明销售单元包装到达工厂门口。应纳入实际发生的成形、机加工、模塑、清洗、表面处理、涂装、电子装配、最终检验、测试和包装。购入材料、组件、电力、水、气体、化学品和包装的上游生产应连接具有代表性的上游数据集。除非研究目标明确要求并披露扩展，否则不包括资本设备。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告场址大门接收的规定原材料、外购组件或分总成、消耗品和包装 |
| starting_condition_role | 产品特定前景制造的上游产品投入 |
| product_classification_scope | CPC 48266或CPC 48269商品专用零件及附件；不包括完整主机商品及归入CPC 4828其他子类的零件 |
| recursive_input_rule | 若外购投入本身属于本PCR类别，则作为一个产品投入记录供应商身份、数量和上游数据集；不得在接收过程中递归重建其制造 |
| upstream_dataset_requirement | 每项购入投入均应使用地域、技术、产品状态和时间具有代表性的上游数据集，并披露替代数据和未解决身份 |
| disclosure | 声明过程所有权、外包步骤、材料牌号、供货形态、表面化学、电子内容、包装状态、分配、排除项以及偏离共同过程模式之处 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_product_specific_route` | 全部前景过程 | 仅纳入已声明产品版本实际采用的操作，并保留路线和过程所有权证据。 | `eu-pef-method-2021` |
| `sb_complete_inventory` | 全部纳入的前景过程 | 分别记录所有已知材料、水、能源、产品、废物和基本流交换；不得用伞形行隐藏路线特定交换。 | `eu-pef-method-2021` |
| `sb_surface_treatment_condition` | surface_finishing | 仅在已声明产品实际采用时纳入水基电化学或化学处理、溶剂清洗、涂装、脱脂、施胶或类似工序，并分别记录每种实际化学品和排放物种。 | `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_forming_machining` | 材料成形、机加工或聚合物模塑 | conditional | 报告场址为将接收材料制成已声明部件几何形状而实施相关操作时纳入 | 前景部件制造 | 转入后续纳入步骤的合格中间体质量 |
| `surface_finishing` | 表面预处理与精整 | conditional | 采用水基、电解、化学、溶剂、涂装、脱脂、施胶或类似表面处理时纳入 | 前景清洗、防护或功能性表面处理 | 离开本步骤的精整部件质量 |
| `electronics_assembly` | 电子及已装配线路板装配 | conditional | 纳入或制造已装配印制线路板或焊接电子组件时纳入 | 前景电子分总成生产 | 转入最终检验的合格电子组件质量 |
| `final_inspection_packaging` | 最终装配、检验、测试及销售单元包装 | required | 始终纳入最终验收和输出核算；各包装行仅在已声明销售状态中存在时纳入 | 前景完工及参考产品输出 | 1 kg合格可销售零件或附件 |

### 过程：材料成形、机加工或聚合物模塑（`material_forming_machining`）

#### 输入

##### 产品流

###### 铝合金进料（`fm_aluminium_alloy`）

仅在产品特定物料清单中存在铝合金时记录，并声明牌号和供货形态。

- 选定流：铝合金
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：发放给符合条件生产订单的铝合金进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_bom_receipts`
- 来源：`eu-pef-method-2021`

###### 不锈钢板材（`fm_stainless_steel_sheet`）

仅在产品特定物料清单中存在不锈钢板材时记录，并声明牌号、厚度和供货表面状态。

- 选定流：不锈钢板材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：发放给符合条件生产订单的不锈钢板材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_bom_receipts`
- 来源：`eu-pef-method-2021`

###### 聚碳酸酯模塑进料（`fm_polycarbonate_granulate`）

仅在已声明产品中模塑或以其他方式消耗聚碳酸酯时纳入。

- 选定流：聚碳酸酯颗粒 `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：发放给符合条件生产订单的聚碳酸酯颗粒质量，扣除有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_bom_receipts`
- 来源：`eu-pef-method-2021`

###### 成形与机加工电力（`fm_electricity`）

纳入成形、机加工、模塑及其直接相关抽排或冷却设备消耗的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或按物理关系分配的购入电力，换算为MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fm_utilities`
- 来源：`eu-pef-method-2021`

###### 氧助切割用氧气（`fm_industrial_oxygen`）

仅在工业氧气跨越场址边界并用于切割已声明零件时纳入。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：在已声明参考条件下按符合条件生产订单分配的供应商或仪表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_utilities`
- 来源：`eu-pef-method-2021`

###### 湿式机加工或清洗用水（`fm_process_water`）

仅在本过程为湿式机加工、漂洗或工序间清洗供应工艺用水时纳入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：供应给符合条件操作的计量或储罐平衡用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_utilities`
- 来源：`eu-pef-method-2021`

##### 废物流

不规定废物输入。

##### 基本流

不规定常规基本流输入；若资源开采流跨越前景边界，应逐项记录。

#### 输出

##### 产品流

合格中间体留在前景系统内部，不重复记录为外部产品交换。

##### 废物流

###### 铝制造废料（`fm_aluminium_scrap`）

铝下脚料、切屑或不合格铝零件作为废物离开前景过程时纳入。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于符合条件订单的离场铝废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_waste`
- 来源：`eu-pef-method-2021`

###### 不锈钢制造废料（`fm_stainless_steel_scrap`）

不锈钢下脚料、切屑或不合格不锈钢零件作为废物离开过程时纳入，并保留合金牌号。

- 选定流：不锈钢制造废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于符合条件订单的离场不锈钢废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_waste`
- 来源：`eu-pef-method-2021`

###### 聚碳酸酯制造废料（`fm_polycarbonate_scrap`）

聚碳酸酯浇口、流道、清机料或不合格模塑件作为废物离开过程时纳入。

- 选定流：聚碳酸酯生产废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于符合条件订单的离场聚碳酸酯废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fm_waste`
- 来源：`eu-pef-method-2021`

##### 基本流

直接测量或许可管理的排放应按化学物种和环境介质分别记录；本PCR不规定通用排放。

### 过程：表面预处理与精整（`surface_finishing`）

#### 输入

##### 产品流

###### 碱处理用氢氧化钠（`sf_sodium_hydroxide`）

仅在碱洗、蚀刻或其他已声明槽液中实际消耗氢氧化钠时纳入。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：加入符合条件订单所用槽液的交付氢氧化钠产品质量，并保留浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sf_inputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 表面处理工艺用水（`sf_process_water`）

纳入供应给有效槽液、漂洗及相关表面处理操作的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：符合条件表面处理订单使用的计量或储罐平衡工艺用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sf_inputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 表面处理电力（`sf_electricity`）

纳入槽体、泵、抽排、涂装、固化及直接相关设备的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或按物理关系分配的电力，换算为MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sf_inputs`
- 来源：`eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020`

##### 废物流

不规定废物输入。

##### 基本流

不规定常规基本流输入。

#### 输出

##### 产品流

精整中间体留在前景系统内部。

##### 废物流

###### 金属表面处理废水（`sf_metal_finishing_wastewater`）

纳入已声明表面处理路线排至场内或场外处理的废水；槽液化学组成和实测成分应在支持记录中分别报告。

- 选定流：金属表面处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以计量或储罐平衡确定的离开过程并送往处理的废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sf_waste`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

每项实测向空气、水或土壤的排放均应按化学物种和环境介质分别记录；不得使用集合性排放行。

### 过程：电子及已装配线路板装配（`electronics_assembly`）

#### 输入

##### 产品流

###### 已装配印制线路板（`ea_populated_printed_wiring_board`）

仅在已装配印制线路板被购入或转入已声明电子装配过程时纳入。

- 选定流：已装配印制线路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：发放给符合条件订单的产品特定已装配线路板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ea_bom`
- 来源：`eu-pef-method-2021`

###### 无助焊剂不含铅焊料（`ea_lead_free_solder`）

仅在消耗无助焊剂不含铅焊料时纳入；单独消耗的助焊剂应作为另一个产品流。

- 选定流：不含铅焊料，无助焊剂 `a78ab927-44b9-4978-a3e3-2b9fb20d3648`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于符合条件订单的供料器发放量或库存消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ea_bom`
- 来源：`eu-pef-method-2021`

###### 电子装配电力（`ea_electricity`）

纳入贴装、焊接、抽排、检验及直接相关生产线设备的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或按物理关系分配的电力，换算为MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_ea_energy_waste`
- 来源：`eu-pef-method-2021`

##### 废物流

不规定废物输入。

##### 基本流

不规定常规基本流输入。

#### 输出

##### 产品流

合格电子分总成留在前景系统内部。

##### 废物流

###### 不合格已装配印制线路板（`ea_populated_board_scrap`）

纳入作为废物离开过程的不合格已装配线路板；裸板下脚料不得使用本流。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开符合条件订单的已称量不合格装配线路板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ea_energy_waste`
- 来源：`eu-pef-method-2021`

##### 基本流

直接测量的焊接或清洗排放应按化学物种和环境介质分别记录。

### 过程：最终装配、检验、测试及销售单元包装（`final_inspection_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸板销售包装箱（`fi_corrugated_board_box`）

仅在瓦楞纸箱属于已声明工厂门口销售单元时纳入。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按每个销售包装箱实际装入的合格产品数量分配包装发放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fi_pack_energy`
- 来源：`eu-pef-method-2021`

###### 聚乙烯防护薄膜（`fi_polyethylene_packaging_film`）

仅在聚乙烯薄膜属于已声明工厂门口销售单元时纳入；其他聚合物应另设原子流行。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按每个包装销售单元中合格产品的实际数量分配薄膜发放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fi_pack_energy`
- 来源：`eu-pef-method-2021`

###### 最终检验与测试电力（`fi_electricity`）

纳入最终装配、检验、试验台和包装设备的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或按物理关系分配的电力，换算为MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fi_pack_energy`
- 来源：`eu-pef-method-2021`

##### 废物流

不规定通用废物输入。

##### 基本流

不规定常规基本流输入。

#### 输出

##### 产品流

###### 合格参考产品（`fi_reference_product`）

仅记录通过已声明最终验收试验并处于已声明工厂门口销售状态的产品。

- 选定流：48266和48269子类商品的零件及附件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将合格输出质量归一化为恰好1 kg参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fi_output`
- 来源：`eu-pef-method-2021`

##### 废物流

最终不合格品应按其实际材料或组件废物身份逐项记录，不得创建伞形不合格品行。

##### 基本流

不规定常规基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | 共享或多功能前景操作 | 优先通过单独计量、计时、称量或其他过程细分避免分配，仅采集可直接归属于已声明产品的交换。 | `eu-pef-method-2021` |
| `al_physical_relationship` | 无法细分的共享交换 | 采用有记录的因果物理关系分配，例如电力采用机器时间与额定或实测功率，表面处理采用槽体装载量或处理面积，资源消耗与质量吞吐确有因果关系时采用合格质量吞吐。 | `eu-pef-method-2021` |
| `al_other_relationship` | 缺乏可辩护物理关系的交换 | 仅在记录无法细分及无法物理分配的理由后采用其他关系（包括经济分配），并报告数据期、产品、因子和敏感性。 | `eu-pef-method-2021` |
| `al_scrap_no_credit` | 制造废料与废物 | 在前景边界将废料报告为输出废物流；除非单独声明的下游系统扩展研究要求，否则不得在本门到门清单内扣除避免生产收益。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fm_bom_receipts` | `material_forming_machining` | 产品特定材料投入 | 批准的物料清单、采购/接收记录、领料和退料记录 | product_revision; production_order; material_name; grade; supplied_form; quantity_issued; unopened_return; unit | 将批准物料清单与符合条件订单的仓库发料和退料核对 | kg | 每个生产订单，按月汇总 | 连续且有代表性的12个月；生产期较短时覆盖全部批次 | 报告场址全部成形、机加工和模塑生产线 | 发料质量减去有记录未开封退料，仅分配给符合条件订单，再按合格输出质量归一化 | 受控物料清单、材料证书、校准秤、发退料审计轨迹 |
| `cp_fm_utilities` | `material_forming_machining` | 电力、工业氧气和工艺用水 | 公用工程仪表、供应商发票、气瓶/储罐平衡、机器日志 | meter_id; opening; closing; unit; reference_conditions; machine_hours; production_order; allocation_driver | 优先分表计量；否则核对场址总量并采用有记录物理驱动因子 | kWh, m3, kg | 仪表周期及每次气瓶/储罐更换 | 连续且有代表性的12个月；较短时覆盖全部批次 | 纳入的成形、机加工、模塑、抽排和冷却设备 | 电力换算MJ；气体体积统一参考条件；按因果驱动因子分配；按合格输出质量归一化 | 仪表校准、发票核对、机器日志、参考条件记录 |
| `cp_fm_waste` | `material_forming_machining` | 材料特定制造废料 | 废料箱称量、废物转移联单、不合格品记录 | material; alloy_or_polymer; source_order; gross_weight; tare; destination; date | 称量每种分选材料流，并与生产质量平衡核对 | kg | 每次外运或每批 | 与材料投入相同期间 | 全部纳入制造生产线 | 按材料汇总离场净质量并按合格输出质量归一化 | 校准秤、皮重记录、转移联单、材料分选检查 |
| `cp_sf_inputs` | `surface_finishing` | 槽液化学品、漂洗水和电力 | 槽液配制及补加日志、化学品接收、仪表 | bath_id; chemistry; product_concentration; addition_mass; water_meter; electricity_meter; treated_order; treated_mass | 各化学品分别记录，并将槽液添加量及公用工程仪表与处理订单核对 | kg, kWh | 每次添加及每个仪表周期 | 连续且有代表性的12个月；较短时覆盖全部处理批次 | 全部纳入表面处理线 | 汇总符合条件的添加量和计量公用工程；电力换算MJ；按合格输出质量归一化 | 槽液日志、浓度分析、供应商证书、仪表校准 |
| `cp_sf_waste` | `surface_finishing` | 金属表面处理废水 | 排放仪表、储罐转移、废水联单、分析结果 | stream_id; volume_or_mass; density; bath_origin; constituents; destination; date | 计量或储罐平衡每种不同废水流，并保留分析表征 | kg | 每次排放或转移 | 与表面处理投入相同期间 | 纳入的槽体、漂洗和现场处理 | 必要时用实测密度换算质量；按不同废物身份汇总并按合格输出质量归一化 | 校准仪表、储罐核对、实验室报告、废物联单 |
| `cp_ea_bom` | `electronics_assembly` | 已装配线路板和焊料投入 | 物料清单、线路板接收/发放、焊料供料和库存记录 | product_revision; board_identity; board_mass; solder_identity; alloy; flux_state; issue_mass; return_mass; order | 将产品特定电子物料清单与实物发放和退回核对 | kg | 每个生产订单 | 连续且有代表性的12个月；较短时覆盖全部批次 | 纳入的电子装配线 | 按原子投入汇总净发放质量并按合格输出质量归一化 | 批准物料清单、供应商证书、校准天平、供料器核对 |
| `cp_ea_energy_waste` | `electronics_assembly` | 电力和已装配线路板不合格品 | 生产线仪表、设备日志、不合格品日志和称量 | meter_id; kWh; line_hours; product_order; reject_board_identity; reject_mass; disposition | 分表计量或按物理关系分配生产线电力，并单独称量已装配线路板不合格品 | kWh, kg | 每班或每批 | 与电子投入相同期间 | 纳入的贴装、焊接、抽排和检验设备 | 电力换算MJ；汇总不合格品质量；两者均按合格输出质量归一化 | 仪表校准、设备日志、不合格品授权、称量记录 |
| `cp_fi_pack_energy` | `final_inspection_packaging` | 包装和最终阶段电力 | 包装规范、发放记录、试验台仪表、合格数量 | packaging_identity; packaging_mass; units_per_pack; issue_quantity; kWh; accepted_count; product_revision | 称量同一规格包装样品并核对发放量；计量或按物理关系分配最终阶段电力 | kg, kWh | 每个包装批次和仪表周期 | 连续且有代表性的12个月；较短时覆盖全部批次 | 最终装配、测试、检验和销售单元包装 | 按实际包装产品数分配包装；电力换算MJ；按合格输出质量归一化 | 包装规范、样品称量记录、发放核对、仪表校准 |
| `cp_fi_output` | `final_inspection_packaging` | 合格参考产品输出 | 最终检验记录、序列号/批次台账、合格数量、单位质量 | product_revision; lot; accepted_count; rejected_count; unit_mass_sample; total_accepted_mass; test_result | 仅计数合格产品，并通过总称量或代表性单位质量抽样确定输出质量 | kg | 每批 | 与全部清单记录相同期间 | 报告场址全部最终验收点 | 汇总合格输出质量，并作为全部归一化交换的分母 | 批准验收准则、校准秤、抽样记录、签署放行记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 归一化数量 = 符合条件的已分配数量 / 合格参考产品质量 | 已分配交换数量；来自`cp_fi_output`的合格输出质量 | 每1 kg合格参考产品的数量 | `eu-pef-method-2021` |
| `calc_electricity_conversion` | `fm_electricity`; `sf_electricity`; `ea_electricity`; `fi_electricity` | 电力（MJ）= 电表电力（kWh）× 3.6 | 计量kWh | 购入电力MJ |  |
| `calc_piece_mass` | 按件记录的材料、包装或输出 | 质量 = 件数 × 同一版本和规格的代表性实测单件平均质量 | 件数；样本平均质量；样本量 | kg |  |
| `calc_material_mass_balance` | 铝、不锈钢和聚碳酸酯路线 | 期初库存 + 接收量 - 期末库存 = 合格内部/输出质量 + 分别识别的废料 + 分别识别的留存材料；调查未解释差异 | 库存、接收、发放、退回、输出和废物称量 | 经核对材料数量及未解释差异 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和全部物料清单行 | 使用一个已声明产品和图样版本；保留主机商品子类、功能、验收规范及材料/组件标识。 | 批准图样、物料清单、规范、验收记录 |
| `dq_temporal_alignment` | 全部行 | 投入、输出、分配驱动因子和合格产量应使用同一代表性报告期；披露停机、试制、返工和异常批次。 | 带日期仪表、订单、日志和生产核对 |
| `dq_measurement` | 质量、能源、水和气体记录 | 使用适合被测量的已校准或核查仪器；记录分辨率、校准状态和换算假设。 | 校准证书、仪表检查、样品称量记录 |
| `dq_completeness` | 全部纳入过程 | 核对产品特定物料清单、公用工程、输出及每种材料特定废物流；解释遗漏和质量平衡差异。 | 签署的核对表和差异调查 |
| `dq_representativeness` | 上游数据集和分配 | 记录地域、技术、时间、产品状态、供应商和分配驱动因子；披露每个替代数据及其理由。 | 数据集元数据、供应商记录、分配工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_identity_boundary` | 数据集身份 | 确认输出为已声明CPC 48266或48269主机商品专用零件或附件，不是完整仪器，也不是归入其他类别的零件。 | `un-cpc-3-0-structure-2025` |
| `vr_reference_output` | 参考流 | 确认归一化后的合格输出等于1 kg，且不合格产品未计入参考产品。 | `eu-pef-method-2021` |
| `vr_route_condition` | 过程图和清单 | 确认每个纳入过程和流均在已声明版本中实际发生；每个不适用条件行均有路线或物料清单证据。 | `eu-pef-method-2021`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `vr_atomic_flows` | 清单 | 拒绝伞形材料、公用工程、燃料、化学品、废物、废水或排放行；每项交换必须只有一个物理或化学身份及一个方向。 | `eu-pef-method-2021` |
| `vr_uuid_semantics` | 带UUID的流 | 确认流类型、baseName、分类、产品状态、属性、单位组和前景限定信息相容；禁止使用替代UUID。 |  |
| `vr_mass_reconciliation` | 材料成形路线 | 将每项已声明铝、不锈钢和聚碳酸酯投入与合格材料、分别识别的废料、留存库存及已解释差异核对。 | `eu-pef-method-2021` |
| `vr_allocation` | 共享过程 | 验证已优先尝试细分，且每个剩余分配驱动因子均具有因果性、期间一致、有记录并一致应用。 | `eu-pef-method-2021` |
| `vr_bilingual_alignment` | PCR实施元数据 | 英中实施视图应保持process_id、row_id、rule_id、UUID、受控值、参考数量和source_id一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明零件或附件配置的产品特定前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 已声明CPC 48284零件或附件的从摇篮到工厂门口建模，以及作为相容主机商品生命周期模型的投入 |
| excluded_use | 全部仪器零件的通用代表；CPC 48266或48269完整商品；其他CPC 4828零件；未增加下游模型的使用、维护、分销或寿命终止声明；未经等同性审查的不同设计比较声明 |
| required_metadata | canonical PCR id；CPC语境；主机商品子类；零件/附件功能；产品和图样版本；合格产品单位质量；物料清单；路线；过程所有权；表面化学；电子内容；包装状态；地域；技术；参考期；分配；数据质量；未解决UUID和替代数据 |
| required_quality_disclosure | 各过程及各流的初级数据覆盖；仪表和秤状态；物料清单核对；材料质量平衡差异；分配驱动因子；上游数据集代表性；排除项；异常生产；废水表征；替代数据和UUID缺口 |
| update_trigger | 主机商品适用性、产品版本、材料牌号或质量、供货形态、过程路线、表面化学、电子设计、包装、供应商地域或技术、分配基础、参考期发生变化，或确认新的精确Tiangong UUID |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，`https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv`（检索日期：2026-09-07） | CPC 48284正式身份及其与48266和48269完整商品的区分 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279，附件I Product Environmental Footprint Method，合并文本日期2021-12-30，`https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230`（检索日期：2026-09-07） | 功能单位与参考流；产品特定物料清单和制造数据；完整过程输入/输出采集；分配层级；数据质量 |
| `eu-jrc-stm-bref-2006` | official_guidance | 欧盟委员会联合研究中心，Surface Treatment of Metals and Plastics BREF，2006年8月通过，`https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics`（检索日期：2026-09-07） | 条件纳入水基电解和化学表面处理过程及相关活动 |
| `eu-jrc-sts-bref-2020` | official_guidance | 欧盟委员会联合研究中心，Surface Treatment Using Organic Solvents BREF，2020年12月通过，`https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation`（检索日期：2026-09-07） | 条件纳入金属和塑料制品的涂装、清洗、脱脂和施胶 |
