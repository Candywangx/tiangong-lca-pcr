---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.digital-cameras
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 数码照相机

## 1. 范围与适用性

本 PCR 规定新制专用数码照相机的前景制造数据包要求，涵盖固定镜头、可换镜头无反光镜及数码单镜头反光式机型。具有附加视频功能的照相机，在其申报的主要产品功能仍为静态摄影时属于本范围。电视摄像机、摄录一体机、胶片相机、智能手机、独立成像模组、单独销售的镜头及维修服务具有不同的产品身份。CPC 3.0 区分这些相机子类，但不提供制造消耗系数（`un-cpc-3-0-structure-2025`）。

产品由供货配置、成像性能及出厂验收准则界定。必须声明 CMOS 或 CCD 技术、机身结构和随附附件，不得对不相似机型直接取平均。专业中文类别名称采用“数码照相机”，与 CIPA 用语一致（`cipa-camera-battery-guidance`）。制造商规格仅用于说明配置字段，不作为全类别默认值（`nikon-z8-reference-guide`）。

前景边界从成品零部件入厂开始，到已包装相机放行结束，分为装配与成像校准、包装两个采集阶段。零部件制造由上游数据集承接，除非实际在申报场址进行。基础流卡适用于模块化装配路线；场内实际发生电路板制造、焊接、湿法清洗、机加工、涂覆或其他作业时，须增列独立交换。已有流卡不能成为遗漏真实零件、化学品、废物或直接排放的依据。扩展路线必须具有对应采集记录和原子流行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.digital-cameras |
| classification_refs | CPC 3.0：47215，Digital cameras；语义精确映射意向 |
| covered_products | 新制完整数码照相机；固定镜头、无反光镜及数码单反配置 |
| excluded_products | 胶片相机；电视摄像机；摄录一体机；智能手机；单独销售的传感器、镜头及相机零部件；维修与翻新服务 |
| representative_product | 通过数码静态摄影验收的实际生产机型及配置；无默认品牌或传感器尺寸 |
| production_route | 采购成品模组；机械装配；固件加载；光学调整与成像验收；随附附件核验；包装 |
| market_state | 工厂门口的新制已检验相机；分别标明净相机配置与运输包装内容 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造能够记录数码照片的指定数码照相机配置 |
| How much | 工厂门口 1 kg 净合格相机配置；同时报告对应相机台数 |
| How well | 声明传感器技术与画幅、有效像素、光学配置、对焦与曝光功能、固件及成像验收准则 |
| How long or cycle | 一次制造与验收周期；不预设使用寿命或全寿命拍摄张数 |
| reference_flow_link | `finished_camera` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 数码相机 `9e283879-4269-4280-9b6e-8f09891ec5ed` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机型与物料清单版本；固定或可换镜头配置；所含镜头与电池身份；净质量包含项目；随附附件清单；传感器技术、画幅与有效像素；固件与成像验收准则；场址、国家与报告期；供应商和场内工艺边界；新制产品状态 |

该制造参考不是完整的全寿命服务功能单位。净配置质量包括机身、内置光学部件、申报套机包含的镜头以及随附工作电池。单列的充电器、线缆、背带及包装质量不进入该分母，但随货交付时须计入其生产负荷。仅机身数据集与镜头套机数据集必须区分。已经包含在购入模组中的电池或镜头不得重复计入。制造商说明中的仅机身质量和装配附件后的质量属于不同计量状态（`nikon-z8-reference-guide`）。必需限定信息应记录在数据包元数据或等效产品记录中。进行全寿命比较时，另行定义服务期限、运行模式和交付的成像服务（`ghg-protocol-product-standard-2011`）。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_mass` | 参考相机及中间相机 | Mass | kg | 按机型称量申报净配置。记录相机台数 N 与合格净质量 M；m_unit = M/N。不得以运输毛重或其他机型目录质量代替。 |
| `count_conversion` | 物料清单及随附附件 | Mass | kg | 按实测单件质量转换件数，并与领退料记录核对。件不等于 kg。电池外壳、保护电路及模组基板计入其所属购入模组。 |
| `energy_conversion` | 工厂电力 | Net calorific value | MJ | 保留电表的电能计量基准；kWh 乘以 3.6 转为 MJ。电池额定容量是规格，不能代替工厂充电能耗实测值。 |
| `internal_transfer` | 装配至包装 | Mass | kg | 两个内部转移行采用相同净配置。连接过程前核对批次标识及库存变化。 |
| `shipping_balance` | 包装后产出 | Mass | kg | 发货实物总质量等于净相机质量加单列附件与包装质量。不得将其与净参考质量的差额认作不明损失。 |

以上为本 PCR 的采集和换算约定。配置证据见 `nikon-z8-reference-guide`；任何制造商个案质量或额定功率均不作为清单默认值。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品图像传感器、电子、光学及外壳零部件到达申报装配场址；供应商加工不包含在场址直接记录内 |
| starting_condition_role | 前景采集切点；不表示零部件没有上游负荷 |
| product_classification_scope | 属于 CPC 47215 语义边界的专用数码照相机配置 |
| recursive_input_rule | 外购完整数码照相机作为有界输入关联上游数据集。内部合格相机从装配向包装转移一次，在汇总时抵消；不得再次递归制造。 |
| upstream_dataset_requirement | 建立从摇篮到工厂门模型时，为每个购入零部件、电力供应、包装及场外废物处理连接兼容数据集。记录地域、技术、参考状态、分配和截断；标明缺失连接。 |
| disclosure | 披露供应商与场址职责、所含作业、运输处理、附件和质量边界、直接废物去向、数据缺口及所有排除项；区分门到门记录和包含完整上游的模型。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site` | foreground_processes | 纳入实际装配、调整、检验、返工和包装作业。区分供应商与场内作业，每项仅计一次。 | `nikon-manufacturing` |
| `boundary_upstream` | linked_model | 保留可归属于产品的上游过程，并说明排除理由。披露运输区段和供应商数据集边界；供应商数据已含交付运输时不得重复添加。 | `ghg-protocol-product-standard-2011` |
| `boundary_extensions` | additional_site_operations | 将本模块化方案用于场内零部件制造或化学处理前，扩展过程图和原子清单；分别采集每种实际公用介质、化学品、废物及直接排放。 | |
| `boundary_downstream` | dataset_interpretation | 本制造方案不包含已售相机的客户配送、使用和寿命终结。完整产品足迹须补充明确的下游情景；不得将制造模块称为完整产品生命周期。 | `ghg-protocol-product-standard-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 相机装配与成像验收 | required | 适用于每种生产机型 | 前景生产 | 1 kg 合格未包装净相机配置 |
| packing | 附件核验与包装 | required | 适用于出厂放行 | 前景整备 | 1 kg 已放行净相机配置 |

尼康将装配调整及性能评估列为制造阶段（`nikon-manufacturing`）。本处划分属于采集边界，实际工厂可能共享设备，共用电表只能分配一次。条件流卡仅在所述实物交换发生时纳入；其他实际材料须扩展清单。购入复合模组是一个产品交换，其上游材料清单另行关联。

### 过程：相机装配与成像验收（`assembly`）

#### 输入

##### 产品流

###### CMOS 图像传感器模组（`cmos_sensor`）

纳入条件（inclusion_condition）：使用 CMOS 模组且与已贴装电路板分开购入；CCD 机型须另设具有明确身份的传感器行。

- 选定流：CMOS 图像传感器模组
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的模组质量（包括基板及封装）除以合格装配净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：`nikon-z8-reference-guide`

###### 已贴装数码照相机电路板组件（`camera_pcb`）

纳入条件（inclusion_condition）：已贴装相机电路板跨越场址边界；识别该电路板已包含的全部器件。

- 选定流：已贴装数码照相机电路板组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的已贴装电路板质量除以合格装配净质量；已安装电子器件仅计一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：

###### 成品数码照相机外壳（`camera_housing`）

纳入条件（inclusion_condition）：从供应商接收成品外壳；记录材料组成及表面处理。

- 选定流：成品数码照相机外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的成品外壳质量除以合格装配净质量；制造移入场内时增设记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：

###### 数码照相机物镜组件（`camera_lens`）

纳入条件（inclusion_condition）：包含内置物镜或指定套机镜头；仅机身配置须有证据支持其不适用。

- 选定流：数码照相机物镜组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的完整镜头组件质量除以合格净配置质量；不得再次添加其上游玻璃。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：

###### 数码照相机液晶显示模组（`camera_lcd`）

纳入条件（inclusion_condition）：申报相机装有单独供货的 LCD 模组；其他显示技术须设置独立原子行。

- 选定流：数码照相机液晶显示模组
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的已组装 LCD 模组质量除以合格装配净质量；包括随附的控制器。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：`nikon-z8-reference-guide`

###### 可充电锂离子相机电池组（`camera_battery`）

纳入条件（inclusion_condition）：净配置含随附工作锂离子电池，可已装入或随相机转入包装；其他化学体系另列。

- 选定流：可充电锂离子相机电池组
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的完整电池组质量（含外壳和保护电路）除以合格装配净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：`cipa-camera-battery-guidance`; `nikon-z8-reference-guide`

###### 钢螺钉（`steel_screws`）

纳入条件（inclusion_condition）：使用单独领用的钢螺钉，且未包含在已购组件质量中。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用钢螺钉净质量除以合格装配净质量；保留牌号、镀层及尺寸记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 来源：

###### 电力（`assembly_electricity`）

纳入条件（inclusion_condition）：电力用于装配、固件加载、光学测试、返工或可归属的共用环境服务。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测且有合理分配依据的 MJ 除以合格装配净质量；包括失败测试。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_energy`
- 来源：

##### 废物流

本基础路线未预设该类交换；实际存在时须单独采集并增列原子流。

##### 基本流

本基础路线未预设该类交换；实际存在时须单独采集并增列原子流。

#### 输出

##### 产品流

###### 数码相机（`unpacked_camera`）

纳入条件（inclusion_condition）：配置相机通过成像验收并以未装箱状态离开装配；所含套机镜头及工作电池随同转移。

- 选定流：数码相机 `9e283879-4269-4280-9b6e-8f09891ec5ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：合格净配置质量除以相同过程产出质量；记录与包装配对的转移。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_camera_transfer`
- 来源：

##### 废物流

###### 废弃数码照相机（`discarded_camera`）

纳入条件（inclusion_condition）：失败相机确认不再返工后作为废物离开边界；单独拆除的电池或零件须另列废物行。

- 选定流：废弃数码照相机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：扣除已识别拆出部件后的实测废弃相机质量除以合格装配净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_waste`
- 来源：

##### 基本流

本基础路线未预设该类交换；实际存在时须单独采集并增列原子流。

### 过程：附件核验与包装（`packing`）

#### 输入

##### 产品流

###### 数码相机（`camera_to_pack`）

纳入条件（inclusion_condition）：接收装配阶段相同的合格未装箱配置；这是内部产品连接，不是新增采购。

- 选定流：数码相机 `9e283879-4269-4280-9b6e-8f09891ec5ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：配对接收的净配置质量除以放行净质量，并核对库存及拒收转移。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_camera_transfer`
- 来源：

###### 瓦楞纸箱（`corrugated_box`）

纳入条件（inclusion_condition）：供货配置消耗瓦楞运输箱或销售纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的成型纸箱质量除以放行净相机质量；保留纸箱等级及再生成分证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_items`
- 来源：

###### 模塑纸浆包装内衬（`pulp_insert`）

纳入条件（inclusion_condition）：包装使用模塑纸浆保护内衬。

- 选定流：模塑纸浆包装内衬 `2452c680-7e60-4e7d-b170-fb98ac7a9fe2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的内衬质量除以放行净相机质量；不得与说明书纸页或塑料内衬合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_items`
- 来源：

###### 低密度聚乙烯包装袋（`ldpe_bag`）

纳入条件（inclusion_condition）：相机或随附附件使用 LDPE 包装袋；核验聚合物等级。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的包装袋质量除以放行净相机质量；与其他聚合物包装分列。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_items`
- 来源：

###### USB 线缆（`usb_cable`）

纳入条件（inclusion_condition）：地区供货附件清单包含 USB 线缆；声明连接器类型及长度。

- 选定流：USB 线缆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：随附完整 USB 线缆质量除以放行净相机质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_items`
- 来源：`nikon-z8-reference-guide`

###### 相机锂离子电池充电器（`battery_charger`）

纳入条件（inclusion_condition）：随货提供专用充电器；单独销售的充电器不属于本产品包装。

- 选定流：相机锂离子电池充电器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的完整充电器质量除以放行净相机质量；识别所含电源线，避免重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_items`
- 来源：`nikon-z8-reference-guide`

###### 相机颈带（`camera_strap`）

纳入条件（inclusion_condition）：申报配置随附成品相机颈带。

- 选定流：相机颈带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：消耗的颈带质量（含扣件）除以放行净相机质量；记录纺织物及配件组成。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_items`
- 来源：`nikon-z8-reference-guide`

###### 电力（`packing_electricity`）

纳入条件（inclusion_condition）：包装设备消耗电力；共用电表与装配阶段仅分配一次。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测分配的包装 MJ 除以放行净相机质量；纯手工包装须记录不存在该消耗的证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_energy`
- 来源：

##### 废物流

本基础路线未预设该类交换；实际存在时须单独采集并增列原子流。

##### 基本流

本基础路线未预设该类交换；实际存在时须单独采集并增列原子流。

#### 输出

##### 产品流

###### 数码相机（`finished_camera`）

纳入条件（inclusion_condition）：已检验相机配置以申报包装状态在工厂门口放行。

- 选定流：数码相机 `9e283879-4269-4280-9b6e-8f09891ec5ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：放行净相机质量除以其自身，得到 1 kg 参考产出；分别保留相机台数和发货毛重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：

##### 废物流

###### 分选废瓦楞纸板（`corrugated_waste`）

纳入条件（inclusion_condition）：破损或裁切瓦楞纸板作为独立收集废物离开包装阶段。

- 选定流：分选废瓦楞纸板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量分选废瓦楞纸板后除以放行净相机质量；披露含水及污染情况。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净相机配置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_waste`
- 来源：

##### 基本流

本基础路线未预设该类交换；实际存在时须单独采集并增列原子流。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared_site_activity | 优先使用分机型计量或过程细分。不能避免分配时，采用已证实的物理关系；无法建立物理关系时，说明其他关系的依据。 | `ghg-protocol-product-standard-2011` |
| `allocation_camera_time` | assembly_and_test_electricity | 对共用测试工位采集各机型通电测试时长及负载，按已证实的需求分配实测总量，不得仅按相机质量或像素数分配。分配量之和须与电表核对。 | |
| `allocation_rework` | acceptance_and_rejects | 失败尝试与返工由产生该活动的生产批群承担；归一化分母仅计合格产出。明确记录回收零件和内部再用，避免重复计入采购。 | |
| `allocation_waste` | outgoing_scrap | 记录废物或共产品身份及处理责任。披露再生分配方法，任何替代效益声明须单列；本 PCR 不自动赋予原生材料抵扣。 | `ghg-protocol-product-standard-2011` |

测试时长和批群核算约定属于本 PCR 的前景采集协议，不是制造商基准系数。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | assembly | 各项购入零部件 | 物料清单与库存台账 | 机型；版本；part_id；单件质量；领料；退料；期初库存；期末库存；供应商；内含子部件 | 称量代表性零件；核对已批准物料清单、仓库记录及供应商声明 | kg 和件数 | 每批及物料清单变更时 | 完整申报生产期，包括失败批次 | 装配线及供料仓库 | 分别计算每个零件的消耗质量，再除以合格装配净质量 | 秤校准；发票；签核物料清单；库存核对 |
| cp_assembly_energy | assembly | 电力 | 电表及设备日志 | meter_id；期初MJ；期末MJ；机型；通电测试时长；实测负载；空载时间；分配依据 | 分表计量装配、固件加载、光学测试及可归属的环境服务；核对共用供电 | MJ；kWh；h | 每班及换型时 | 与合格产出记录同期 | 装配测试设备及申报共用服务 | 将实测时段能耗分配一次，再除以合格装配净质量 | 电表校准；工位日志；与总表核对 |
| cp_camera_transfer | assembly | 合格相机与内部转移 | 验收及库存记录 | 序列号或批次；机型；净配置；合格台数；合格质量；转移质量；库存变化；返工状态 | 称量合格配置，将转移记录与包装接收记录配对 | kg 和相机台数 | 每批转移时 | 相同报告期，包含期初期末在制品 | 装配出口及包装接收点 | 匹配净质量与批次；按接收过程产出计算转移量，避免重复计算 | 验收试验；称量证据；双向转移台账 |
| cp_assembly_waste | assembly | 废弃数码照相机 | 废物交接记录 | 批次；失效原因；净质量；是否含电池；拆除零件；去向；处理方式 | 称量废弃相机，先分别记录拆除部件；保留承包商交接单 | kg | 每次废物发运 | 与装配消耗相同批群 | 不合格品区至场外接收方 | 将实际废弃相机质量与返工分开汇总，再按合格装配质量归一化 | 废物票据；拆解台账；接收方处理证据 |
| cp_packing_items | packing | 每项随附附件或包装制品 | 包装物料清单与库存台账 | 机型；销售地区；item_id；领用件数；退回件数；单件质量；期初库存；期末库存 | 分别称量每项物品；核验区域包装内容及出库记录 | kg 和件数 | 每个包装批次及配置变更时 | 与相机放行同期 | 包装线及仓库 | 分别核算每项消耗并按放行净相机质量归一化 | 秤核验；包装物料清单；区域供货声明 |
| cp_packing_energy | packing | 电力 | 电表日志 | meter_id；时段能耗；机型；运行时长；分配依据 | 计量包装封装线能耗，核对其共用供电份额 | MJ；kWh | 每班 | 相同报告期 | 包装设备 | 将实测分配能耗按放行净相机质量归一化 | 电表核验；班次日志；与装配电表无重复 |
| cp_release | packing | 成品相机 | 放行台账 | 机型；合格台数；净质量；附件质量；包装质量；发货毛重；期初库存；期末库存 | 分别称量净配置与包装后产品，核对放行台数 | kg 和相机台数 | 每个放行批次 | 完整报告期 | 工厂门口 | 汇总放行净相机质量，保留台数换算及毛重核对 | 放行授权；秤校准；发货记录 |
| cp_packing_waste | packing | 废瓦楞纸板 | 废物台账 | 干质量；含水状态；纸箱等级；来源批次；污染情况；去向 | 称量分选纸板，保留收运票据 | kg | 每次废物收运 | 与包装记录同期 | 包装区至接收方 | 按放行净相机质量归一化废瓦楞纸板量 | 地磅或秤记录；废物票据 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_consumption` | 每项零件和包装制品 | C_i = 期初库存 + 收货 - 期末库存 - 有记录的未用退料 - 向批群外转出量；与领料减退料核对，不重复计算收货 | cp_components 或 cp_packing_items 中各物品库存与领料记录 | 消耗质量 C_i，kg | |
| `calc_normalize` | 每个过程交换 | 相同机型、过程及期间内 q_i = C_i / M_good；适用时以实测能耗或废物质量代替 C_i；M_good 必须为正 | 对应采集协议及 cp_camera_transfer 或 cp_release | kg/kg 或 MJ/kg 过程产出 | |
| `calc_transfer` | 装配至包装连接 | 包装对合格相机的需求量 = 配对接收净质量 / 放行净质量。按该需求缩放装配过程，汇总时抵消所连接中间交换 | cp_camera_transfer；cp_release；在制品及不合格品记录 | 内部一致的制造连接模型 | |
| `calc_count` | 下游台数换算 | 每台相机清单 = 每 kg 清单乘以相同配置的实测净 kg/台 | cp_release；归一化清单 | 标明质量基准的每台数据集 | |
| `calc_yield` | 装配验收 | 闭合批群的验收合格率 = 合格相机台数 / 投产相机台数；保留在制品及返工记录解释分母 | cp_camera_transfer；投产日志 | 实测批群合格率，不预设类别值 | |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_configuration | 产品及零件 | 固定物料清单、固件、相机镜头电池配置及销售地区包装内容。说明传感器和显示器是否已包含在购入电路板或模组中。 | 签核物料清单、零件图及包装记录；nikon-z8-reference-guide 说明不同状态 |
| dq_completeness | 所有过程 | 核对每条物料清单、库存变动、电表和输出废物。为未列出的实际交换增设独立原子行。缺失数据须标作缺口，不能默认为零。 | 完整性登记及现场工艺核查 |
| dq_period | 归一化 | 消耗与产出期间一致。解释库存变化、样机、停工、不合格品及外包加工，不得以全年能耗除以无关月份的产出。 | 有日期的采集记录与批群台账 |
| dq_measurement | 称量及计量 | 保留仪器身份、校准、不确定性和抽样覆盖；区分实测、供应商报告及计算值。 | 校准证书、抽样方案及供应商声明 |
| dq_upstream | 关联数据 | 核对每个上游数据集的产品状态、地域、技术、时间和分配兼容性。UUID 身份缺失与上游影响数据缺失属于不同缺口。 | 供应商数据集登记及边界核对 |
| dq_ranges | 经验比较 | 采集分机型材料消耗、能耗、验收合格率、包装及废物实测值。本 PCR 不提供外部经验范围，不得用目录规格或单个文献个案代替。 | 前景记录；后续外部区间须由两项相互独立、原文核验且边界兼容的来源支持 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | 核验专用数码照相机身份和全部必需限定信息；拒绝用摄录一体机、胶片相机或零部件数据替代。 | `un-cpc-3-0-structure-2025` |
| `validate_mass` | quantitative_reference | 合格净质量必须为正，并配套相机台数；明确套机、电池、附件和包装质量边界，换算采用相同配置。 | |
| `validate_modules` | component_inventory | 每个选定行须为一个交换；购入模组已含传感器、电路板、镜头或电池时，剔除重复负荷。 | |
| `validate_transfers` | linked_processes | 匹配相机转移标识、属性、单位及净配置；核对库存和损失，仅在汇总时抵消中间交换。 | |
| `validate_energy` | electricity | 核查电表边界、kWh 至 MJ 换算、分配闭合以及测试、返工和环境服务覆盖；不得仅由电池容量计算工厂能耗。 | |
| `validate_evidence` | row_values | 每项数量须有可追溯来源记录与采集协议。区分交换缺失和实际不存在，不得用代理 UUID 填补身份缺口。 | |
| `validate_scope` | published_claims | 区分制造清单和完整全寿命足迹；披露缺口、上游覆盖、排除项及分配选择。 | `ghg-protocol-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 指定数码照相机机型与配置的制造模块；上游关联后用于 process 和 lifecyclemodel 投影 |
| allowed_use | 披露状态、技术和地域的供应商与装配建模；按实测值进行 kg 与台数换算；构建另行申报的生命周期情景 |
| excluded_use | 未限定条件的摄影服务比较；仅凭本部分模块声明完整生命周期或 GHG Protocol 符合性；替代胶片相机或摄录一体机；将缺失上游数据视为零 |
| required_metadata | 参考限定信息；净单台质量与台数；所含套机和包装清单；报告期与场址；物料清单和固件版本；工艺及供应商边界；分配；上游数据集连接 |
| required_quality_disclosure | 原始记录覆盖；电表分配；抽样与不确定性；库存核对；失败和返工产出；UUID 缺口；外部范围缺口；未关联上游负荷及排除项 |
| update_trigger | 物料清单、传感器、电池、镜头、包装或随附附件变化；工艺或供应商迁址；电表或分配变化；新报告期；新的独立核验证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，47215 行及相邻相机行。[官方 CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv)。访问日期 2026-09-09。 | 产品分类身份；不提供清单数量 |
| cipa-camera-battery-guidance | official_guidance | 相机影像器材工业协会，中文相机电池指南。[原文页面](https://www.cipa.jp/battery/index_c.html)，访问日期 2026-09-09。 | 专业中文类别用语及完整电池组身份 |
| nikon-manufacturing | handbook | 尼康，Manufacturing，Manufacturing Activities / Production 部分及装配调整、性能评估图注。[原始技术页面](https://www.nikon.com/company/technology/manufacturing/)，访问及复核日期 2026-09-09。 | 装配调整与性能评估背景；所述尼康集团内部加工用于提示核查供应商与场内边界，不作为通用路线或数量 |
| nikon-z8-reference-guide | handbook | 尼康 Z 8 参考指南：[技术规格](https://onlinemanual.nikonimglib.com/z8/en/specifications_375.html)及[包装内容](https://onlinemanual.nikonimglib.com/z8/en/package_contents_4.html)，访问日期 2026-09-09。 | 传感器、LCD、电池、附件及机身和配备状态限定信息；同一本手册，不是独立范围观察 |
| ghg-protocol-product-standard-2011 | standard | WRI/WBCSD，Product Life Cycle Accounting and Reporting Standard（2011），第 6、7、9 章。[原始 PDF](https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf)，访问日期 2026-09-09。 | 参考单位清晰性、可归属过程披露及分配层次；用于方法指导，不表示本部分制造方案获得认证 |
