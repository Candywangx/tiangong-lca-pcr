---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-singlets-petticoats-panties-nightdresses-dressing-gowns-82c8e637
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织物制女式或女童衬衫、背心、衬裙、内裤、睡衣、晨衣及类似品

## 1. 范围与适用性

本 PCR 适用于以非针织或钩编纺织物工业制造女式或女童衬衫、上衣、背心、衬裙、内裤、睡衣、晨衣及类似服装的前景数据包。其大门到大门服装制造路线始于已整理机织物及已声明辅料进入成衣工厂，终止于合格且已包装的服装离开同一工厂大门。

前景边界包括排料、铺布与裁剪、缝制与辅料装配、按路线适用的成衣湿加工、最终整理、熨烫、检验、折叠和包装。纤维、纱线、机织物整理、辅料、公用工程、化学品及包装的上游制造通过链接的上游数据集表示，不在前景过程内重复。分销、零售、消费者使用、售后洗护、修理及生命末期不在本大门到大门数据包内。针织或钩编服装、防护服、鞋类、毛皮服装、胸罩和束身制品以及特殊手工或独件高级定制服装不适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-singlets-petticoats-panties-nightdresses-dressing-gowns-82c8e637 |
| classification_refs | CPC 3.0：28234（精确范围语境） |
| covered_products | 非针织、非钩编纺织物制女式或女童衬衫、上衣、背心、衬裙、内裤、睡衣、晨衣及类似品。 |
| excluded_products | 针织或钩编服装；防护服；毛皮服装；胸罩、腰封、束身衣及相关制品；鞋类；特殊手工或独件高级定制服装；分销、使用及生命末期服务。 |
| representative_product | 已声明纤维组成、尺码、辅料、整理路线及包装的工厂制造女式机织面料衬衫。 |
| production_route | 接收已整理机织物和辅料；排料、铺布和裁剪；缝制和辅料装配；可选成衣湿加工；最终整理、熨烫和检验；折叠和包装。 |
| market_state | 工厂大门处待发运的合格成品服装；净服装质量与可拆卸包装质量分开报告。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在成衣工厂大门提供合格、可销售的非针织或钩编纺织物制女式或女童服装。 |
| How much | 1 kg 合格成品服装净质量，不含可拆卸包装。 |
| How well | 满足已声明的服装类型、纤维组成、尺码或规格、颜色与整理、辅料清单、做工验收准则及适用湿加工路线。 |
| How long or cycle | 一个在工厂大门结束的完整前景制造批次；消费者使用寿命不属于本大门到大门参考。 |
| reference_flow_link | `packaged_garment_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格服装净质量 |
| 参考产品流 | 非针织或钩编而成的纺织品女罩衣、女童罩衣、衬衫、汗衫、衬裙、紧身短裤、睡衣、晨衣及其类似物品 `141dafee-dafa-4fef-9d44-e6e23a9fcff2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装类型；预期穿着人群；机织物质量组成；尺码或规格；颜色与面料整理；辅料清单；成衣湿加工路线；包装配置；制造设施与地域；生产期间；净质量基准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后、加入可拆卸包装前称量或从经核实的批次记录推导服装净干质量；所有清单归一化至 1 kg 合格服装净质量。 |
| `packaging_mass_separation` | 包装输入和输出 | Mass | kg | 每种包装材料分别记录，并从参考服装质量中排除可拆卸包装。 |
| `batch_material_balance` | 面料、辅料、服装和固体废物 | Mass | kg | 对一个批次使用一致的含湿量与称量基准；核对领用材料与合格服装、拒收服装、退料、可售余料和废物。 |
| `energy_record_conversion` | 电力和外购蒸汽 | Energy | 电力为 kWh；蒸汽为 MJ | 保留原始电表、仪表或发票单位，在归一化前记录各换算因子；不得将电力与蒸汽合并为一个交换。 |
| `water_volume` | 成衣湿加工 | Volume | m3 | 分别记录计量进水和排放废水；识别回用或循环水且不得重复扣减。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整理机织物和已声明辅料、化学品、公用工程及包装进入成衣制造边界，并带有供应商、组成、质量和上游数据集引用。 |
| starting_condition_role | 成衣裁剪与缝制前景制造的上游产品输入。 |
| product_classification_scope | CPC 3.0 代码 28234 所表达语义范围内的女式或女童成品服装；分类仅为语境，不拥有规范 PCR 身份。 |
| recursive_input_rule | 同类别服装若作为返工或部件回收输入，应作为带上游数据集的独立输入记录，不得递归展开同一前景服装路线。 |
| upstream_dataset_requirement | 每项外购面料、辅料、化学品、公用工程和包装交换均链接上游数据集；披露地域、技术、再生含量及已知数据缺口。 |
| disclosure | 声明工厂场址、生产期间、服装款式、材料和辅料清单、排除操作、外包步骤、可选湿加工、分配方法、服装净质量及包装配置。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_01_start_at_finished_fabric` | 前景边界 | 从成衣工厂大门处的已整理机织物及已声明辅料开始；其先前制造由上游数据集表示。 | `ilo-garment-2021`; `afw-pefcr-2025` |
| `sb_02_include_garment_making` | 所有表示路线 | 纳入裁剪、缝制与辅料装配、最终整理、检验、熨烫、折叠、包装及其可归属公用工程、废物和直接排放。 | `ilo-garment-2021`; `unido-garment-1983`; `afw-pefcr-2025` |
| `sb_03_conditional_wet_processing` | 经洗涤、漂白或其他湿整理的服装 | 仅当成衣装配后确有湿加工时纳入场内或外包过程；分别记录水、能源、每种化学品、废水和污泥。 | `afw-pefcr-2025` |
| `sb_04_manufacturing_losses` | 每个制造步骤 | 逐步骤记录裁剪、装配、拒收及包装损耗直至制造输出；不得采用一个隐藏的总损耗因子。 | `afw-pefcr-2025` |
| `sb_05_factory_gate_end` | 数据集终点 | 在工厂大门处已包装服装结束；本前景包排除分销、零售、消费者使用和生命末期，并披露这些排除项。 | `afw-pefcr-2025`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01_cutting` | 排料、铺布、裁剪与扎包 | `required` | 由机织物工业制造时始终纳入。 | 将已整理面料和衬料转化为已识别裁片。 | 每 1 kg 合格参考服装净质量。 |
| `p02_assembly` | 缝制与辅料装配 | `required` | 始终纳入。 | 连接裁片并安装已声明辅料。 | 每 1 kg 合格参考服装净质量。 |
| `p03_wet_processing` | 成衣湿加工 | `conditional` | 成衣销售前经洗涤、漂白、染色或湿整理时纳入。 | 实施已声明的成衣级湿处理。 | 每 1 kg 经湿加工路线的合格参考服装净质量。 |
| `p04_final_finishing` | 最终整理、熨烫与检验 | `required` | 始终纳入；输入路线取决于 `p03_wet_processing` 是否适用。 | 熨烫、检验、允许时返修、拒收不合格品并放行成品。 | 每 1 kg 合格参考服装净质量。 |
| `p05_packaging` | 折叠与包装 | `required` | 始终纳入。 | 折叠并包装合格服装供工厂大门发运。 | 每 1 kg 合格参考服装净质量；包装质量另计。 |

### 过程：排料、铺布、裁剪与扎包（`p01_cutting`）

#### 输入

##### 产品流

###### 领用至裁剪的已整理机织物（`woven_fabric_input`）

已整理机织物按款式材料领用和排料记录从仓库进入裁剪边界。

- 选定流：成品机织纺织面料
- 流属性/单位：Mass / kg
- 数量规则：记录实际领用质量，扣除有凭证的退库质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`afw-pefcr-2025`; `ilo-garment-2021`

###### 领用至裁剪的粘合衬（`fusible_interlining_input`）

纸样部件需要加固时单独记录粘合衬；不使用须由款式材料清单证明。

- 选定流：热熔粘合衬布
- 流属性/单位：Mass / kg
- 数量规则：记录实际领用质量并扣除退料；仅当材料清单无衬料时记零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`unido-garment-1983`

###### 裁剪设备用电（`cutting_electricity_input`）

铺布、裁剪、标记和扎包设备的计量或分配电力作为一个能源交换进入本过程。

- 选定流：服装工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：记录分表用电，或按设备运行时间分配经核对的场址总表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`afw-pefcr-2025`

##### 废物流

正常裁剪路线无预期废物输入。

##### 基本流

正常裁剪路线无预期基本流输入。

#### 输出

##### 产品流

###### 放行至装配的成衣裁片（`cut_components_output`）

按款式识别的裁片以称量或质量平衡后的中间产品离开裁剪并进入缝制。

- 选定流：机织面料服装裁片
- 流属性/单位：Mass / kg
- 数量规则：记录裁片包质量，或由领用面料减去已核对退料和裁剪边角料计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`ilo-garment-2021`

##### 废物流

###### 裁剪产生的机织物边角料（`cutting_textile_offcuts_output`）

不可用机织物边角料作为单独称量废物流离开裁剪，并与退回或出售的可用余料分开。

- 选定流：机织纺织品裁剪边角料
- 流属性/单位：Mass / kg
- 数量规则：按材料类别称量边角料容器并扣除皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`afw-pefcr-2025`

##### 基本流

除非场址监测证明存在直接排放，否则无预期基本流输出；监测到的纤维尘归入 `p04_final_finishing`。

### 过程：缝制与辅料装配（`p02_assembly`）

#### 输入

##### 产品流

###### 缝制接收的机织物裁片（`cut_components_input`）

已识别裁片包从裁剪进入缝制，并按批次和款式核对。

- 选定流：机织面料服装裁片
- 流属性/单位：Mass / kg
- 数量规则：记录接收裁片包质量或与 `cut_components_output` 核对后的转移量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`ilo-garment-2021`

###### 装配消耗的缝纫线（`sewing_thread_input`）

缝纫线按所代表款式的领用与退回线轴质量进入装配。

- 选定流：缝纫线
- 流属性/单位：Mass / kg
- 数量规则：记录领用线轴质量，减去退回可用线和线轴皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trim_issues`
- 来源：`afw-pefcr-2025`; `unido-garment-1983`

###### 装配时安装的纽扣（`buttons_input`）

款式材料清单包含纽扣时应单独记录，并说明材质及计数到质量换算。

- 选定流：服装纽扣
- 流属性/单位：Mass / kg
- 数量规则：记录领用数量乘以实测代表性单件质量，并扣除退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trim_issues`
- 来源：`ilo-garment-2021`

###### 装配时安装的拉链（`zipper_input`）

每种适用拉链作为单独称量辅料输入；仅当款式未规定拉链时记零。

- 选定流：服装拉链
- 流属性/单位：Mass / kg
- 数量规则：记录领用数量乘以经核实单件质量，并扣除退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trim_issues`
- 来源：`ilo-garment-2021`

###### 装配时安装的弹性带（`elastic_tape_input`）

仅款式规定时弹性带进入装配，并与面料和缝纫线分开记录。

- 选定流：纺织弹性带
- 流属性/单位：Mass / kg
- 数量规则：记录领用卷质量，减去退回可用弹性带和卷芯皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trim_issues`
- 来源：`ilo-garment-2021`

###### 装配时安装的纺织标签（`textile_label_input`）

纺织材料制洗护、尺码及品牌标签按经核实质量作为一个标签材料交换记录。

- 选定流：纺织服装标签
- 流属性/单位：Mass / kg
- 数量规则：记录领用数量乘以经核实单件质量，并扣除退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trim_issues`
- 来源：`afw-pefcr-2025`

###### 缝制与装配设备用电（`assembly_electricity_input`）

缝纫、包缝、钉扣、粘合及局部物料搬运用电作为一个计量电力交换进入。

- 选定流：服装工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：记录分表用电，或按机器运行时间分配经核对的场址总表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`afw-pefcr-2025`

##### 废物流

正常装配路线无预期废物输入。

##### 基本流

正常装配路线无预期基本流输入。

#### 输出

##### 产品流

###### 缝制放行的已装配服装（`assembled_garment_output`）

完整但未最终整理的服装经部件和辅料核对后离开缝制，进入可选湿加工或最终整理。

- 选定流：已组装未整理的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：按批次和款式记录实际转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_mass`
- 来源：`ilo-garment-2021`; `unido-garment-1983`

##### 废物流

###### 装配产生的纺织缝制废料（`sewing_textile_scrap_output`）

缝制产生的线头和不可用纺织小片作为一个称量纺织缝制废物流离开。

- 选定流：纺织缝制废料
- 流属性/单位：Mass / kg
- 数量规则：按批次称量收集废料，或按已加工服装质量分配经核对容器质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`afw-pefcr-2025`

##### 基本流

正常装配路线无预期直接基本流输出。

### 过程：成衣湿加工（`p03_wet_processing`）

#### 输入

##### 产品流

###### 进入湿加工的已装配服装（`assembled_garment_wet_input`）

仅当已声明路线包含成衣洗涤、漂白、染色或其他湿整理时，已装配服装进入湿加工。

- 选定流：已组装未整理的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：记录装入湿加工设备的实际批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`afw-pefcr-2025`

###### 成衣湿加工设备用电（`wet_process_electricity_input`）

洗衣机、泵、脱水机和烘干机用电在湿加工适用时作为独立计量能源交换进入。

- 选定流：服装工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：记录分表用电，或按设备运行时间分配经核对电表量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`afw-pefcr-2025`

###### 成衣湿加工用工艺水（`wet_process_water_input`）

新鲜或外供工艺水进入湿加工设备，并与内部循环水分开记录。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：记录所代表批次的计量进水，并另行识别实测内部回用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`afw-pefcr-2025`

###### 成衣湿加工用外购蒸汽（`wet_process_steam_input`）

外部供热时，外购蒸汽作为一个公用工程交换跨越湿加工边界。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于所代表批次的供应商仪表或发票能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_steam`
- 来源：`afw-pefcr-2025`

###### 成衣洗涤使用的洗涤剂（`laundry_detergent_input`）

成衣洗涤投加的配方洗涤剂作为一个产品交换进入，不与其他化学品合并。

- 选定流：洗涤剂
- 流属性/单位：Mass / kg
- 数量规则：从校准投加或库存领用记录取得批次投加质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_chemicals`
- 来源：`afw-pefcr-2025`

###### 已声明湿加工配方中的碳酸钠（`sodium_carbonate_input`）

场址配方使用碳酸钠时独立记录；记零须有显示未使用的配方。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：从校准投加或库存领用记录取得实际批次投加质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_chemicals`
- 来源：`afw-pefcr-2025`

##### 废物流

正常湿加工路线无预期废物输入。

##### 基本流

正常湿加工路线无预期基本流输入。

#### 输出

##### 产品流

###### 放行至最终整理的湿整理服装（`wet_finished_garment_output`）

处理并脱水后的服装作为称量中间产品离开湿加工，进入干燥、熨烫和检验。

- 选定流：湿整理后的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：按已声明含湿基准记录实际放行批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`afw-pefcr-2025`

##### 废物流

###### 成衣湿加工废水（`garment_wastewater_output`）

所代表批次排出的废水作为一个计量废物流进入已声明处理路线。

- 选定流：服装湿加工废水
- 流属性/单位：Volume / m3
- 数量规则：记录计量排水；无排水表时使用有文件支持的水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`afw-pefcr-2025`

###### 场内成衣废水处理污泥（`wastewater_sludge_output`）

仅当场内处理所代表湿加工批次废水时，脱水污泥作为独立废物流离开。

- 选定流：服装废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：记录湿污泥质量和干固体含量，并按处理的批次废水体积分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经湿加工路线的合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`afw-pefcr-2025`

##### 基本流

任何直接排入空气、水体或土壤的受监测物质均须新增独立基本流卡；废水和污泥转移本身不允许虚构直接排放。

### 过程：最终整理、熨烫与检验（`p04_final_finishing`）

#### 输入

##### 产品流

###### 未经湿加工进入最终整理的已装配服装（`assembled_garment_finishing_input`）

仅已声明路线不含成衣湿加工时，已装配服装直接进入最终整理。

- 选定流：已组装未整理的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：记录绕过 `p03_wet_processing` 批次的实际转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_mass`
- 来源：`ilo-garment-2021`; `unido-garment-1983`

###### 进入最终整理的湿整理服装（`wet_finished_garment_finishing_input`）

仅完成 `p03_wet_processing` 的批次将湿整理服装转入最终整理。

- 选定流：湿整理后的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：记录湿加工批次的实际转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`afw-pefcr-2025`

###### 最终整理与检验用电（`finishing_electricity_input`）

熨烫控制、照明、检验、返修和折叠设备用电作为一个计量交换进入。

- 选定流：服装工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：记录分表用电，或按设备运行时间分配经核对的场址总表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`afw-pefcr-2025`

###### 熨烫用外购蒸汽（`finishing_steam_input`）

蒸汽跨越过程边界供应时，外购蒸汽作为独立公用工程交换进入熨烫。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于所代表批次熨烫的供应商仪表或发票能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_steam`
- 来源：`unido-garment-1983`

##### 废物流

正常最终整理路线无预期废物输入。

##### 基本流

正常最终整理路线无预期基本流输入。

#### 输出

##### 产品流

###### 经熨烫与检验的合格服装（`pressed_inspected_garment_output`）

服装经记录的验收后离开最终整理，并按净质量转移至包装。

- 选定流：已熨烫并检验的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：记录最终检验接受服装的净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_mass`
- 来源：`unido-garment-1983`

##### 废物流

###### 送往废物处理的拒收服装（`rejected_garment_output`）

最终检验中不可修复的拒收服装作为单独称量服装废物流离开，不得隐藏在产率中。

- 选定流：不合格机织面料服装废物
- 流属性/单位：Mass / kg
- 数量规则：排除已返修和已回收件后，按处置路线记录拒收净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`afw-pefcr-2025`

##### 基本流

###### 排入空气的纺织纤维尘颗粒物（`lint_to_air_output`）

仅当监测到未受控排放跨越场址至空气边界时报告纺织纤维尘颗粒物；捕集纤维尘属于固体废物。

- 选定流：纺织飞花颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：记录适用监测期间的实测排放质量；否则记录检查并将数量判为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`ifc-textiles-apparel-2014`

### 过程：折叠与包装（`p05_packaging`）

#### 输入

##### 产品流

###### 包装接收的合格服装（`garment_packaging_input`）

经熨烫和检验的服装连同验收及净质量记录进入包装。

- 选定流：已熨烫并检验的机织面料服装
- 流属性/单位：Mass / kg
- 数量规则：记录转移的已验收服装质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_mass`
- 来源：`afw-pefcr-2025`

###### 折叠与包装用电（`packaging_electricity_input`）

折叠、封装、贴标及包装设备用电作为一个计量交换进入。

- 选定流：服装工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：记录分表用电，或按设备运行时间分配经核对的场址总表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`afw-pefcr-2025`

###### 用作初级包装的聚乙烯服装袋（`polyethylene_bag_input`）

直接包覆服装的低密度聚乙烯袋作为独立初级包装材料进入。

- 选定流：低密度聚乙烯服装袋
- 流属性/单位：Mass / kg
- 数量规则：记录领用袋数乘以经核实单袋质量，并扣除未用退回。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-2025`

###### 用作初级包装的纸质服装吊牌（`paper_hangtag_input`）

销售用纸质吊牌与纺织标签及其他包装分开进入。

- 选定流：纸质服装吊牌
- 流属性/单位：Mass / kg
- 数量规则：记录领用吊牌数乘以经核实单件质量，并扣除未用退回。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-2025`

###### 用作次级包装的瓦楞纸箱（`corrugated_box_input`）

瓦楞纸箱作为独立次级包装输入进入，并按箱内服装分配。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：记录所用纸箱质量，除以箱内服装净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-2025`

###### 发运使用的木托盘（`wooden_pallet_input`）

发运配置使用托盘时，木运输托盘作为独立三级包装输入进入。

- 选定流：木制运输托盘
- 流属性/单位：Mass / kg
- 数量规则：按承载服装分配托盘质量；可重复使用时除以经核实重复使用次数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-2025`

###### 托盘稳固使用的聚乙烯收缩膜（`polyethylene_shrink_film_input`）

用于稳固三级包装时，聚乙烯收缩膜作为独立输入进入。

- 选定流：聚乙烯收缩膜
- 流属性/单位：Mass / kg
- 数量规则：记录卷材消耗质量，扣除未用退回及卷芯皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-2025`

##### 废物流

正常包装路线无预期废物输入。

##### 基本流

正常包装路线无预期基本流输入。

#### 输出

##### 产品流

###### 工厂大门放行的已包装参考服装（`packaged_garment_output`）

合格已包装服装在工厂大门离开前景系统；交换数量采用服装净质量并排除可拆卸包装。

- 选定流：非针织或钩编而成的纺织品女罩衣、女童罩衣、衬衫、汗衫、衬裙、紧身短裤、睡衣、晨衣及其类似物品 `141dafee-dafa-4fef-9d44-e6e23a9fcff2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将经核实合格服装净质量归一化至恰好 1 kg；可拆卸包装在各自输入行报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_output_mass`
- 来源：`unsd-cpc-v3-2025`

##### 废物流

###### 包装产生的聚乙烯废料（`polyethylene_packaging_scrap_output`）

破损袋和收缩膜边料作为一个聚乙烯包装废物流离开，并与纸板废物分开。

- 选定流：聚乙烯包装废料
- 流属性/单位：Mass / kg
- 数量规则：称量收集的聚乙烯废料并扣除容器皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`afw-pefcr-2025`

###### 包装产生的瓦楞纸板废料（`corrugated_cardboard_scrap_output`）

破损或裁切瓦楞纸板作为一个单独称量包装废物流离开。

- 选定流：瓦楞纸板包装废料
- 流属性/单位：Mass / kg
- 数量规则：称量收集的瓦楞纸板废料并扣除容器皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`afw-pefcr-2025`

##### 基本流

正常包装路线无预期直接基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_01_subdivide_first` | 共享成衣制造操作 | 记录允许时按场址、过程、款式和批次细分；仅分配剩余共享输入或输出。 | `eu-pef-method-2021` |
| `alloc_02_cutting_mass` | 共享裁剪和材料准备 | 按归属于各款式的裁片实测质量分配共享裁剪输入和损耗。 | `afw-pefcr-2025` |
| `alloc_03_assembly_units` | 共享缝制和装配 | 单件记录驱动过程时按合格生产件数分配共享装配输入，再用各款式实测服装净质量换算至 1 kg 参考。 | `afw-pefcr-2025` |
| `alloc_04_finishing_mass` | 共享湿加工和整理 | 除非直接批次计量可实现细分，否则按实测加工服装质量分配共享整理输入和输出。 | `afw-pefcr-2025` |
| `alloc_05_waste_and_remnants` | 边角料、余料和拒收服装 | 区分废物与可用退料或出售余料。记录所选处理或共产品处理；未经明确下游方法声明，不得在本前景清单中计入避免生产抵扣。 | `afw-pefcr-2025`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issues` | `p01_cutting` | 面料与衬料输入 | 仓库领退料、排料与 BOM 记录 | material_id; composition; batch_id; issued_mass; returned_mass; tare; marker_id | 将仓库领退料与排料批次核对。 | kg | 每次领料及每批 | 代表性生产期，通常连续 12 个月或有文件说明的生产活动 | 所有纳入裁剪场址和分包商 | 按材料和批次汇总净领用质量，再按合格净输出质量归一化。 | 签字领退料记录、校准秤、BOM 与排料追溯。 |
| `cp_trim_issues` | `p02_assembly` | 缝纫线及各项辅料输入 | 仓库领退料、计数和单件质量试验 | trim_id; material; batch_id; issued_count_or_mass; returned_count_or_mass; sampled_unit_mass; tare | 称量散装材料，或用有文件的代表性单件质量换算计数。 | kg 和 count | 每次领料及每批 | 与所代表输出相同期间 | 所有纳入缝制场址和分包商 | 各辅料分别计算净质量并按输出质量归一化。 | BOM、领退料记录、秤校准及单件质量取样记录。 |
| `cp_electricity` | 所有过程 | 电力输入 | 分表、公用工程总表和机时记录 | meter_id; start_reading; end_reading; period; process; operating_hours; allocation_driver | 优先过程分表；否则核对场址总表并仅分配剩余共享用电。 | kWh | 表计间隔或每月 | 与所代表输出相同期间 | 所有纳入场址 | 汇总过程电力，应用已披露剩余分配，并按输出质量归一化。 | 表计校准、发票核对及分配工作表。 |
| `cp_purchased_steam` | `p03_wet_processing`; `p04_final_finishing` | 外购蒸汽输入 | 供应商仪表和发票记录 | meter_id; steam_quantity; pressure_or_energy; period; process; allocation_driver | 将供应量与过程仪表或运行记录核对。 | MJ 或供应商单位 | 表计间隔或每月 | 与所代表输出相同期间 | 所有使用外购蒸汽场址 | 用供应商文件因子换算，分配剩余共享蒸汽并按输出质量归一化。 | 供应商发票、仪表记录和换算工作表。 |
| `cp_batch_material_balance` | `p01_cutting`; `p02_assembly` | 中间产品与材料平衡 | 批次转移、称量和废物记录 | batch_id; input_mass; returned_mass; intermediate_output_mass; offcut_mass; scrap_mass; moisture_basis | 称量转移量并逐制造步骤核对。 | kg | 每批 | 与所代表输出相同期间 | 所有纳入生产线 | 按批次和款式汇总；未解释差额保留为质量发现。 | 校准秤、签字转移记录和物料平衡表。 |
| `cp_batch_output_mass` | `p02_assembly`; `p04_final_finishing`; `p05_packaging` | 服装中间及参考输出 | 批次完工和最终检验记录 | batch_id; style; accepted_count; rejected_count; net_accepted_mass; moisture_condition; packaging_mass | 检验后、加入可拆卸包装前称量合格输出。 | kg 和 count | 每批 | 与所代表输出相同期间 | 所有纳入整理和包装场址 | 按款式汇总合格服装净质量；全部交换归一化至 1 kg。 | 秤校准、检验放行及包装分离记录。 |
| `cp_wet_batch` | `p03_wet_processing`; `p04_final_finishing` | 湿加工批次和中间服装 | 批次卡和设备日志 | batch_id; recipe_id; input_mass; output_mass; moisture_basis; start_time; end_time; route | 将设备批次卡与输入输出称量核对。 | kg | 每个湿加工批次 | 与所代表输出相同期间 | 所有纳入湿加工场址或分包商 | 仅汇总相同已声明路线批次，再按合格输出归一化。 | 签字批次卡、配方引用和秤校准。 |
| `cp_water_wastewater` | `p03_wet_processing` | 工艺水与废水 | 进水表、排水表和水平衡记录 | meter_id; intake_volume; reuse_volume; discharge_volume; period; batch_ids | 读取校准仪表；仅无排水表时使用有文件的平衡。 | m3 | 表计间隔或每批 | 与所代表湿加工路线相同期间 | 所有纳入湿加工场址 | 分别汇总新鲜水进水和排水；不得重复扣减内部循环水。 | 表计校准和水平衡闭合。 |
| `cp_wet_chemicals` | `p03_wet_processing` | 每种湿加工化学品输入 | 配方、投加和仓库记录 | chemical_id; CAS_or_formula; recipe_id; batch_id; concentration; formulation_mass; active_content | 从校准投加或核对库存使用记录每种外购配方或纯化学品。 | kg | 每批 | 与所代表湿加工路线相同期间 | 所有纳入湿加工场址 | 各化学品按路线分别汇总并按合格输出质量归一化。 | 批准配方、SDS、投加校准及库存核对。 |
| `cp_packaging_materials` | `p05_packaging` | 每种包装输入 | 包装领用、计数、质量和重复使用记录 | material_id; packaging_level; issued_count; returned_count; unit_mass; products_enclosed; reuse_count | 称量包装或用经核实单件质量换算计数；各材料分开保留。 | kg 和 count | 每个包装批次 | 与所代表输出相同期间 | 所有纳入包装场址 | 共享包装按所装服装净质量分配；可重复使用包装除以经核实使用次数。 | 包装规格、领用记录、单件质量试验及重复使用日志。 |
| `cp_solid_waste` | 所有过程 | 每项固体废物输出 | 容器称量和去向记录 | waste_id; process; gross_mass; tare; destination; recovery_status; batch_or_period | 称量每项化学或物理上独立的废物流，并核对处置或回收记录。 | kg | 每容器或每批发运 | 与所代表输出相同期间 | 所有纳入场址 | 按过程和废物身份汇总净质量，再按输出质量归一化。 | 校准秤、废物转移联单及接收方记录。 |
| `cp_direct_emissions` | `p04_final_finishing` | 直接颗粒物排放 | 烟道或工作排风监测记录 | source_id; pollutant; sampling_period; flow_rate; concentration; capture_status; production_mass | 使用所代表运行期间实测浓度和流量；捕集物作为废物而非空气排放。 | kg | 适用监测事件 | 代表所纳入设备和控制的期间 | 所有纳入排放源 | 计算运行期排放质量并按输出质量归一化。 | 实验室报告、校准、采样计划及控制状态日志。 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01_reference_normalization` | 每个清单交换 | 归一化数量 = 可归属批次数量 / 合格服装净输出质量。 | 可归属交换数量；`net_accepted_mass`。 | 每 1 kg 参考服装的交换数量。 | `eu-pef-method-2021` |
| `calc_02_material_balance` | 裁剪与装配 | 材料净输入 = 领用质量 - 退回质量；未解释差额 = 净输入 - 中间输出 - 单独记录废物 - 有文件的可用余料。 | 材料领用、退回、输出、废物和余料。 | 步骤平衡与未解释差额。 | `afw-pefcr-2025` |
| `calc_03_count_to_mass` | 纽扣、拉链、标签和包装 | 质量 = 净数量 × 经核实代表性单件质量；保留取样方法和变异。 | 领用和退回数量；单件质量样本。 | 各原子交换材料质量。 | `afw-pefcr-2025` |
| `calc_04_shared_utility` | 共享电力和蒸汽 | 可归属公用工程 = 过程计量量 + 剩余共享量 × 已披露分配因子。 | 过程表、场址表、运行驱动量和分配因子。 | 过程特定公用工程数量。 | `afw-pefcr-2025` |
| `calc_05_wastewater_balance` | 成衣湿加工 | 废水排放量采用实测值；无法实测时为进水 - 实测蒸发 - 实测产品带水 - 实测内部库存变化，且不得重复扣减循环水。 | 进水、排水、蒸发、产品带水、循环和库存变化。 | 废水体积和闭合结果。 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_01_identity_traceability` | 参考产品及所有材料 | 每条记录可追溯至设施、期间、款式、批次、服装规格、材料组成以及供应商或上游数据集。 | BOM、批次流转卡、供应商记录和数据集链接。 |
| `dq_02_measurement` | 质量、能源和水 | 使用校准仪器或经核对发票；保留原始读数、皮重、换算及不确定性或分辨率。 | 校准证书、仪表读数、发票和换算工作表。 |
| `dq_03_completeness` | 所有过程和流 | 纳入所有适用过程和全部原子输入、废物及直接排放；解释每项物料平衡缺口和每个不适用卡。 | 过程图、平衡报告、废物台账和适用性清单。 |
| `dq_04_temporal` | 前景期间 | 优先连续 12 个月；较短生产活动仅在说明季节性、款式组合和运行条件时允许。 | 生产日历和代表性说明。 |
| `dq_05_geography_technology` | 场址和分包商 | 表示所有纳入制造场址和实际技术；多场址数据按产量加权，并披露缺失的分包商主数据。 | 场址清单、过程说明、产量权重和数据缺口登记。 |
| `dq_06_external_dataset_quality` | 上游数据集 | 为各材料、公用工程、化学品及包装数据集记录技术、地域、时间和精度/质量信息。 | 数据集元数据和 DQR 记录。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_01_reference_identity` | 参考流 | 必须为 UUID `141dafee-dafa-4fef-9d44-e6e23a9fcff2`、Product flow 类型、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。 | `unsd-cpc-v3-2025` |
| `val_02_scope` | 产品身份 | 确认服装以非针织或钩编纺织物制成，且属于覆盖的女式或女童品类；拒绝排除类别。 | `unsd-cpc-v3-2025` |
| `val_03_reference_amount` | 数据集定量参考 | 要求恰好 1 kg 合格服装净质量，并单独报告可拆卸包装质量。 | `eu-pef-method-2021` |
| `val_04_qualifiers` | 数据集元数据 | 要求全部`必需限定信息`；缺项则校验不确定。 | `afw-pefcr-2025` |
| `val_05_process_coverage` | 过程清单 | 要求全部四个必需过程；批次记录或产品声明显示成衣湿加工时，要求 `p03_wet_processing`。 | `afw-pefcr-2025`; `ilo-garment-2021` |
| `val_06_atomic_exchanges` | 清单行 | 每卡仅允许一个物理或化学上具体的交换；禁止合并能源、辅料、化学品、包装、废物或排放标签。 | `afw-pefcr-2025` |
| `val_07_collection_linkage` | 前景数量 | 每个 `foreground_record` 或 `calculated_value` 行必须链接已定义采集协议和保留的原始证据。 | `eu-pef-method-2021` |
| `val_08_material_balance` | 裁剪、装配和最终输出 | 核对面料与辅料输入、中间转移、合格输出、拒收服装、退料、余料和废物；报告而非隐藏未解释差额。 | `afw-pefcr-2025` |
| `val_09_no_upstream_double_count` | 系统边界 | 确认面料、辅料、化学品、公用工程和包装仅作为带上游数据集的产品输入进入一次，且其上游制造不在前景活动中重复。 | `eu-pef-method-2021` |
| `val_10_wet_route` | 湿加工流 | 湿加工适用时分别要求水、电力、使用的蒸汽、每种化学品、废水及产生的污泥；否则要求有文件的不适用证据。 | `afw-pefcr-2025` |
| `val_11_allocation` | 共享操作 | 可行时要求细分，并保留所选质量或件数分配驱动量、产量权重和归一化换算。 | `afw-pefcr-2025` |
| `val_12_uuid_status` | 非参考流身份 | 拒绝任何未同时通过 hybrid-search 与 state100 确认的清单 UUID；未解决语义候选保持无 UUID，并按 `row_id` 列入 manifest 审查元数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集；经审查后可发布为 `secondary_dataset` 并作为 `background_dataset` 使用。 |
| downstream_use | 支持需要工厂大门裁剪缝制数据集的服装供应链下游 `process` 和 `lifecyclemodel` 投影。 |
| allowed_use | 在已声明代表性内建模对应的非针织/钩编服装款式、场址、期间、材料组成、过程路线和包装配置。 |
| excluded_use | 完整从摇篮到坟墓服装声明；针织服装；防护服；未披露湿加工路线；功能或限定信息有实质差异的产品比较；无理由外推至代表地域或技术之外。 |
| required_metadata | PCR id 与版本；参考流 UUID 与质量基准；服装限定信息；场址和期间；款式组合；BOM 和辅料身份；湿加工适用性；过程覆盖；分配；上游数据集；包装；数据所有者与审查状态。 |
| required_quality_disclosure | 主数据占比；仪表和秤质量；时间、地域与技术代表性；物料平衡缺口；分包商数据缺口；未解决 UUID；分配；遗漏直接排放；上游数据集 DQR。 |
| update_trigger | 服装范围、面料或辅料清单、过程路线、湿处理、场址、技术、能源来源、包装、分配、参考 UUID、证据来源或重大数据质量发现发生变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ | 产品范围及 CPC 28234 身份语境。 |
| `afw-pefcr-2025` | `standard` | Technical Secretariat, Product Environmental Footprint Category Rules (PEFCR): Apparel and Footwear, Version 3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf; European Commission announcement: https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | 制造边界、过程分解、逐步损耗、包装、主数据、DQR 与分配规则。 |
| `eu-pef-method-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, CELEX:32021H2279, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32021H2279 | 功能单位、参考流、系统边界、数据采集、质量、分配和校验原则。 |
| `ilo-garment-2021` | `official_guidance` | International Labour Organization, Improving Safety and Health in the Global Garment Industry, Vision Zero Fund, 2021, https://vzf.ilo.org/wp-content/uploads/2021/09/OSH_improvement-Garment-_04Web.pdf | 独立服装供应链及裁剪缝制过程分解。 |
| `unido-garment-1983` | `handbook` | United Nations Industrial Development Organization, Technical Recommendations for All Operations in the Garment Factory, report 13494.en, 1983, https://downloads.unido.org/ot/48/39/4839366/10001-15000_13494.pdf | 机织衬衫裁剪、缝制、整理、熨烫和折叠操作。 |
| `ifc-textiles-apparel-2014` | `official_guidance` | International Finance Corporation, Environmental and Social Management System Implementation Handbook: Textiles & Apparel, Revision 2.2, 1 June 2014, https://www.ifc.org/content/dam/ifc/doc/mgrt/esms-handbook-textiles-apparel-v8.pdf | 纺织纤维尘相关性及场址监测语境。 |
