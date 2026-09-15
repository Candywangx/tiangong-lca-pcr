---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-stainless-steel-further-worked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 深加工不锈钢平板轧材

## 1. 范围与适用性

本 PCR 适用于生产可销售不锈钢扁平轧材的门到门过程；其声明的市场状态须至少经历一道超出“仅热轧”或“仅冷轧”状态的进一步加工工序。前景边界始于接收已声明状态的不锈钢扁平轧材，止于经检验、在生产者厂门交付的进一步加工产品。数据包应识别报告场址实际发生的退火、酸洗、冷减薄、平整或光整轧制、机械表面精整、剪切或纵切、保护膜施加及包装顺序，并识别确立进一步加工状态的轧后工序。初次冷减薄本身不能确立该状态。

除非通过单独上游数据集连接，否则本 PCR 不涵盖不锈钢初炼、铸造或来料扁平轧材的生产。钢棒、盘条、钢丝、型材、钢管、制成品、非不锈钢扁平轧材，以及声明市场状态仅为热轧或仅为冷轧的不锈钢扁平轧材均不在范围内。产品使用阶段和寿命终结阶段也不在本门到门规则范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-stainless-steel-further-worked |
| classification_refs | CPC 3.0：41232，精确分类语境 |
| covered_products | 在仅热轧或仅冷轧状态之后至少又经历一道已声明进一步加工工序，并以扁平轧制形态销售的不锈钢带、薄板、中厚板或卷材 |
| excluded_products | 仅热轧或仅冷轧不锈钢扁平材；非不锈钢；硅电工钢或高速钢；长材、钢管、钢丝、铸件及制成品 |
| representative_product | 按生产者声明的钢种、尺寸、表面状态、边部状态和交货状态销售的不锈钢扁平轧制带、薄板、中厚板或卷材 |
| production_route | 场址特定工序序列，可由来料准备、退火与热态除鳞、酸洗与漂洗、冷减薄、平整或光整轧制、机械表面精整以及最终转换与包装组成；应识别最后一道初次热轧或冷轧之后至少一道确立进一步加工状态的工序 |
| market_state | 干燥、经检验、以声明的卷材、薄板、带材或中厚板形态在生产者厂门交付；包装单独报告，不计入产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供处于已声明进一步加工市场状态的不锈钢扁平轧材 |
| How much | 1,000 kg 可销售产品净质量，不含包装 |
| How well | 符合已声明的不锈钢钢种、厚度、宽度、表面状态、边部状态、尺寸公差和交货状态 |
| How long or cycle | 生产者厂门处的一个生产批次；不赋予使用阶段时长 |
| reference_flow_link | `output_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 可销售产品净质量 |
| 参考产品流 | 深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 不锈钢钢种和成分标准；输入和输出产品状态；界定进一步加工状态的工序；厚度和宽度；卷材、薄板、带材或中厚板形态；表面状态；边部状态；退火气氛；酸洗化学体系；产品净含水或表面液体状态；生产者地理位置；报告期；分配方法；包装配置 |

构建前景数据包时，所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任何限定信息均使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及所有按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在修边和检验后、加入包装前确定可销售产品净质量；所有清单均归一化至 1,000 kg 该产品。 |
| `intermediate_mass_linking` | 内部不锈钢中间产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以相同的实测或质量平衡中间产品量连接相邻单元过程，不得将内部转移重复计作外部输入或输出。 |
| `electricity_energy` | 电力输入 | Energy | MJ | 原始记录保留供应商结算单位，并用已声明的精确换算关系转换为 MJ；披露电压、供应商、地理位置、供电技术、交付边界及线路损耗处理。 |
| `gas_volume_conditions` | 天然气输入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录供应商计量体积及温度、压力、干湿基和向声明参比条件的换算；不得在不保留换算基础的情况下仅以能量值替代。 |
| `acid_solution_mass` | 酸洗用酸和中和剂 | Mass | kg | 分别记录购入或补加溶液的质量和浓度；选定流数量以溶液质量表示，并将活性物质质量作为计算字段保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 场址接收的不锈钢扁平轧制来料，声明钢种、质量、尺寸、表面状态以及此前热轧或冷轧状态 |
| starting_condition_role | 进入前景进一步加工路线的购入或内部转移上游扁平轧材 |
| product_classification_scope | 符合 CPC 3.0 子类 41232 语义边界的不锈钢扁平轧材；分类仅提供语境，不能替代产品状态声明 |
| recursive_input_rule | 当输入本身也是经进一步加工的不锈钢扁平轧材时，将其一次记录为上游产品流并连接独立边界的上游数据集；不得在同一前景过程中递归复制本 PCR |
| upstream_dataset_requirement | 可得时使用供应商特定数据；否则使用在地理、技术、钢种和产品状态方面具有代表性的来料扁平轧材上游数据集 |
| disclosure | 声明所纳入单元工序、联合生产线聚合、外包工序、来料状态、产品状态、废钢去向、酸回收、水循环、废气废水治理、包装及排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_definition` | foreground_system_boundary | 纳入将接收的不锈钢扁平轧材转化为声明的进一步加工产品的全部场内过程，包括相关生产线公用工程、循环、污染治理和直接产生的废物；识别最后一道初次热轧或冷轧之后至少一道确立进一步加工状态的工序。 | `eu-jrc-fmp-bref-2022`; `un-cpc-v3-explanatory-notes-2025` |
| `boundary_upstream_separation` | upstream_product_system | 除非相关过程明确位于报告组织内并以不重复计数的方式单独列清单，否则初级炼钢、铸造和购入来料生产均通过上游数据集连接。 | `eu-jrc-fmp-bref-2022` |
| `boundary_outsourced_operations` | outsourced_further_working | 通过供应商特定过程数据集或有记录的代表性数据集纳入外包的界定性进一步加工工序，并保留返回产品的质量连接。 | `eu-jrc-fmp-bref-2022` |
| `boundary_pollution_control` | line_pollution_control | 当酸洗烟气处理、酸回收、乳化液处理、过滤和废水处理服务于声明产品路线时，纳入其电力、水、试剂、回收物、废物、废水和直接排放。 | `eu-jrc-fmp-bref-2022`; `us-epa-iron-steel-effluent-2002` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | 来料接收与准备 | required | 始终纳入接收、检验、焊接、切头尾及向首道进一步加工单元输送 | 前景准备与质量核对 | 每 1,000 kg 可销售参考产品净质量 |
| `annealing_and_descaling` | 退火与热态除鳞 | conditional | 声明路线为退火、氧化皮调控或冶金性能控制而加热带材时纳入 | 前景热处理 | 每 1,000 kg 可销售参考产品净质量 |
| `acid_pickling_and_rinsing` | 酸洗、漂洗及生产线处理 | conditional | 场址进行酸洗或化学除鳞/钝化时纳入 | 前景化学表面处理及相关污染治理 | 每 1,000 kg 可销售参考产品净质量 |
| `cold_rolling_and_temper` | 冷减薄与平整轧制 | conditional | 发生冷减薄、平整或光整轧制时纳入；声明其属于初次冷减薄，还是构成进一步加工状态的轧后工序 | 前景机械减薄 | 每 1,000 kg 可销售参考产品净质量 |
| `mechanical_surface_finishing` | 机械表面精整 | conditional | 场址进行磨削、抛光、拉丝或磨料精整时纳入 | 前景表面精整 | 每 1,000 kg 可销售参考产品净质量 |
| `product_finalization` | 最终转换、检验与包装 | required | 始终纳入实际发生的最终纵切或剪切、检验、净质量确定及包装 | 前景产品最终处理 | 1,000 kg 可销售参考产品净质量 |

### 过程：来料接收与准备（`feed_preparation`）

#### 输入

##### 产品流

###### 接收的不锈钢扁平轧制来料（`input_stainless_flat_rolled_feed`）

经称量的卷材、薄板、带材或中厚板以已声明钢种、尺寸和表面状态跨入前景边界。

- 选定流：不锈钢扁平轧制来料
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_scrap_mass`
- 来源：

###### 来料准备线电力（`input_preparation_electricity`）

将搬运、焊接、切头尾、检验和准备设备用电作为独立供应能源流记录。

- 选定流：供应来料准备工序的交流电
- 流属性/单位：Energy / MJ
- 数量规则：准备线分表用电，或由馈线总表按有据方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备带材中间产品（`output_prepared_strip_intermediate`）

将已准备材料作为场址特定内部产品流连接至下一道纳入的单元过程。

- 选定流：已准备不锈钢扁平轧制带材中间产品
- 流属性/单位：Mass / kg
- 数量规则：来料质量减去实测准备废钢并校正有据库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed_and_scrap_mass`
- 来源：

##### 废物流

###### 准备工序不锈钢废钢（`output_preparation_scrap`）

将切头尾、焊接试片等准备损失作为一种具体不锈钢废钢流称量，并另行披露去向。

- 选定流：不锈钢准备工序废钢
- 流属性/单位：Mass / kg
- 数量规则：离开准备工序的实测废钢质量，扣除有据内部返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_scrap_mass`
- 来源：

##### 基本流

### 过程：退火与热态除鳞（`annealing_and_descaling`）

#### 输入

##### 产品流

###### 退火前带材（`input_strip_before_annealing`）

进入炉内的不锈钢带材实际状态由前一道纳入过程连接。

- 选定流：退火前不锈钢带材
- 流属性/单位：Mass / kg
- 数量规则：连接的实测或质量平衡中间产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_annealing_records`
- 来源：

###### 炉用天然气（`input_annealing_natural_gas`）

仅在燃气炉路线下记录本流，并采用已披露参比条件下的供应商计量体积。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：归属于所纳入退火过程的供应商计量或专用分表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：

###### 退火线电力（`input_annealing_electricity`）

记录所纳入退火路线的电加热、传动、风机、控制和循环用电。

- 选定流：供应退火工序的交流电
- 流属性/单位：Energy / MJ
- 数量规则：生产线分表用电或由共用馈线按有据方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：

###### 氮气保护气（`input_nitrogen_protective_gas`）

声明的退火气氛使用氮气时记录送入炉内的氮气。

- 选定流：工业氮气
- 流属性/单位：Volume / m3
- 数量规则：按已披露压力和参比条件计量的购入或现场供应氮气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：

###### 氢气保护气（`input_hydrogen_protective_gas`）

声明的保护气氛含氢气时记录送入炉内的氢气。

- 选定流：工业氢气
- 流属性/单位：Volume / m3
- 数量规则：按已披露压力和参比条件计量的购入或现场供应氢气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火带材中间产品（`output_annealed_strip_intermediate`）

将退火带材以已声明炉后状态连接至下一道纳入工序。

- 选定流：退火不锈钢带材中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测或质量平衡炉后产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_annealing_records`
- 来源：

##### 废物流

##### 基本流

###### 炉内燃烧产生的化石二氧化碳（`output_fossil_carbon_dioxide_to_air`）

现场燃料燃烧产生的化石二氧化碳按测量或计算记录，不主张更具体的大气隔室。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：烟道实测，或根据前景燃料碳含量及有据氧化假设计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_annealing_records`
- 来源：

### 过程：酸洗、漂洗及生产线处理（`acid_pickling_and_rinsing`）

#### 输入

##### 产品流

###### 酸洗前带材（`input_strip_before_pickling`）

进入实际酸洗序列的不锈钢带材由前一道纳入工序连接。

- 选定流：酸洗前不锈钢带材
- 流属性/单位：Mass / kg
- 数量规则：连接的实测或质量平衡中间产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 硝酸溶液（`input_nitric_acid`）

仅当硝酸是声明的不锈钢酸洗槽液实际组分时记录其补加量。

- 选定流：硝酸溶液
- 流属性/单位：Mass / kg
- 数量规则：记录浓度的购入量或槽液质量平衡溶液量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 氢氟酸溶液（`input_hydrofluoric_acid`）

仅当氢氟酸是声明的酸洗槽液实际组分时记录其补加量。

- 选定流：氢氟酸溶液
- 流属性/单位：Mass / kg
- 数量规则：记录浓度的购入量或槽液质量平衡溶液量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 酸洗工艺用水（`input_pickling_process_water`）

槽液补加、漂洗和烟气处理所用新水或外部供水按扣除内部循环后的净输入记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：进入所纳入酸洗和污染治理系统的实测补加水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 酸洗线电力（`input_pickling_electricity`）

记录所纳入系统的带材输送、泵、通风、回收和废水处理用电。

- 选定流：供应酸洗工序的交流电
- 流属性/单位：Energy / MJ
- 数量规则：分表用电或由相关馈线按有据方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 氢氧化钙中和剂（`input_calcium_hydroxide`）

实际用于处理声明酸洗废水或废槽液时记录氢氧化钙。

- 选定流：熟石灰 `49bf5000-b2da-4a30-8349-b0bb44171616`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于酸洗处理系统的购入或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酸洗带材中间产品（`output_pickled_strip_intermediate`）

将漂洗并干燥后的酸洗带材连接至下一道纳入工序。

- 选定流：酸洗不锈钢带材中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测或质量平衡酸洗线输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_records`
- 来源：

##### 废物流

###### 废混酸酸洗液（`output_spent_pickle_liquor`）

将离开前景并送回收、处理或处置的废硝酸-氢氟酸酸洗液与漂洗水分开记录。

- 选定流：废硝酸-氢氟酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：跨场址边界槽液的称量或液位质量平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 酸洗中和污泥（`output_pickling_sludge`）

报告中和及固液分离产生的湿污泥，并披露干固体含量和去向。

- 选定流：不锈钢酸洗中和污泥
- 流属性/单位：Mass / kg
- 数量规则：湿污泥称量并采样测定干固体比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：

###### 酸性酸洗漂洗废水（`output_acidic_rinse_wastewater`）

排入场内或场外处理的漂洗废水按扣除内部逆流循环后的净量记录。

- 选定流：酸性不锈钢酸洗漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：排水流量实测值按实测密度换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_records`
- 来源：

##### 基本流

###### 排入大气的氟化氢（`output_hydrogen_fluoride_to_air`）

采用混酸路线时记录捕集和处理后跨越大气排放边界的氟化氢。

- 选定流：排入大气的氟化氢
- 流属性/单位：Mass / kg
- 数量规则：报告期实测浓度乘以干基标准状态废气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_records`
- 来源：

### 过程：冷减薄与平整轧制（`cold_rolling_and_temper`）

#### 输入

##### 产品流

###### 轧制用酸洗带材（`input_pickled_strip_for_rolling`）

进入冷减薄或平整轧制的清洁带材由前一道工序连接。

- 选定流：冷轧用酸洗不锈钢带材
- 流属性/单位：Mass / kg
- 数量规则：连接的实测或质量平衡中间产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

###### 冷轧电力（`input_cold_rolling_electricity`）

记录所纳入生产线的轧辊传动、带材输送、液压、过滤和控制用电。

- 选定流：供应冷轧工序的交流电
- 流属性/单位：Energy / MJ
- 数量规则：生产线分表用电或由共用馈线按有据方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

###### 冷轧油（`input_cold_rolling_oil`）

记录向生产线领用的具体轧制油或润滑剂配方，扣除返回同一系统的回收油。

- 选定流：冷轧油 `a9417245-6f45-4df3-8f04-227ed8a1be58`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采购和领用记录与期初库存、期末库存及回收油核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

###### 轧制乳化液补加水（`input_rolling_emulsion_water`）

使用水基轧制乳化液时记录外部供应的补加水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：补加水实测量，扣除返回乳化液系统的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧带材中间产品（`output_cold_rolled_strip_intermediate`）

将轧后带材连接至下一道纳入工序，并声明厚度减薄和平整状态。

- 选定流：冷轧不锈钢带材中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测或质量平衡轧线输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

##### 废物流

###### 废轧制乳化液（`output_spent_rolling_emulsion`）

将离开前景送处理或处置的废水-油轧制乳化液作为独立废物流记录。

- 选定流：废不锈钢冷轧乳化液
- 流属性/单位：Mass / kg
- 数量规则：离开生产线的乳化液称量或槽体质量平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

###### 含油金属细屑污泥（`output_oily_metal_fines_sludge`）

称量从轧制液过滤中清除的污泥，并表征含水率和含油率。

- 选定流：含油不锈钢细屑污泥
- 流属性/单位：Mass / kg
- 数量规则：离开轧制液处理系统的湿污泥称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：

##### 基本流

### 过程：机械表面精整（`mechanical_surface_finishing`）

#### 输入

##### 产品流

###### 机械精整前带材（`input_strip_before_mechanical_finishing`）

进入磨削、抛光、拉丝或磨料精整的带材由前一道工序连接。

- 选定流：机械表面精整前不锈钢带材
- 流属性/单位：Mass / kg
- 数量规则：连接的实测或质量平衡中间产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

###### 机械精整电力（`input_mechanical_finishing_electricity`）

记录磨削、抛光、拉丝、抽风、过滤和湿法精整循环用电。

- 选定流：供应机械精整工序的交流电
- 流属性/单位：Energy / MJ
- 数量规则：生产线分表用电或由共用馈线按有据方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

###### 氧化铝磨料（`input_aluminium_oxide_abrasive`）

声明的表面状态使用氧化铝磨料时记录其生产线领用量。

- 选定流：氧化铝磨料
- 流属性/单位：Mass / kg
- 数量规则：磨料领用质量减去退回库存的未使用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

###### 湿法精整工艺水（`input_wet_finishing_water`）

实际磨削或抛光路线为湿法时记录外部供应的补加水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：补加水实测量，扣除内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 表面精整带材中间产品（`output_surface_finished_strip_intermediate`）

将表面精整带材连接至最终转换，并声明表面状态代号。

- 选定流：表面精整不锈钢带材中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测或质量平衡精整线输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

##### 废物流

###### 收集的不锈钢磨削粉尘（`output_stainless_steel_grinding_dust`）

将从不锈钢磨削或抛光中捕集的干粉尘与湿污泥分开称量。

- 选定流：收集的不锈钢磨削粉尘
- 流属性/单位：Mass / kg
- 数量规则：从抽风和过滤设备清出的粉尘称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

###### 含油磨削污泥（`output_oily_grinding_sludge`）

称量含不锈钢固体、水和油的湿磨削污泥，并保留固体含量。

- 选定流：含油不锈钢磨削污泥
- 流属性/单位：Mass / kg
- 数量规则：离开精整系统的湿污泥称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

##### 基本流

###### 排入大气的颗粒物（`output_particulate_matter_to_air`）

仅当监测记录未区分粒径范围时，才在此报告跨越大气排放边界的未捕集颗粒物；已有粒径分级监测值时，应另行审计并选用更具体的基本流。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测浓度乘以标准状态废气体积，或采用经验证的捕集平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_finishing_records`
- 来源：

### 过程：最终转换、检验与包装（`product_finalization`）

#### 输入

##### 产品流

###### 最终处理用精整带材（`input_finished_strip_for_finalization`）

最后一道已纳入进一步加工工序的中间产品进入纵切、剪切、检验和包装。

- 选定流：最终处理前经进一步加工的不锈钢带材
- 流属性/单位：Mass / kg
- 数量规则：连接的实测或质量平衡中间产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finalization_records`
- 来源：

###### 最终处理电力（`input_finalization_electricity`）

记录生产批次的纵切、剪切、检验、搬运和包装设备用电。

- 选定流：供应产品最终处理工序的交流电
- 流属性/单位：Energy / MJ
- 数量规则：分表用电或由相关馈线按有据方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalization_records`
- 来源：

###### 聚乙烯保护膜（`input_polyethylene_protective_film`）

场内施加且随产品出厂时记录保护膜。

- 选定流：聚乙烯保护膜
- 流属性/单位：Mass / kg
- 数量规则：领用卷材质量减去退回未用膜，并以面积和单位面积质量复核
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finalization_records`
- 来源：

###### 钢制捆带（`input_steel_strapping`）

使用并随发运单元出厂时记录钢制捆带。

- 选定流：钢制包装捆带
- 流属性/单位：Mass / kg
- 数量规则：捆带领用质量，或长度乘以实测线质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finalization_records`
- 来源：

###### 木托盘（`input_wooden_pallet`）

托盘随产品跨越生产者厂门时记录，并声明重复使用状态。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：数量乘以实测或供应商声明托盘质量；仅在有重复使用记录时按有据方法分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finalization_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经进一步加工的不锈钢扁平轧制参考产品（`output_reference_product`）

本行是与参考流定义连接、经检验的可销售产品净量，并连接至经直接审计的 CPC 41232 公开 Tiangong 产品流。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将经认证的可销售产品净质量归一化为恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_product_mass`
- 来源：

##### 废物流

###### 最终不锈钢修边废钢（`output_final_edge_trim_scrap`）

称量最终转换产生的修边和尺寸不合格切料，并声明其去向。

- 选定流：不锈钢最终修边废钢
- 流属性/单位：Mass / kg
- 数量规则：离开最终转换过程的实测废钢质量，扣除有据内部返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalization_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | 应优先细分或计量单元过程和产品批次，再实施分配；记录联合生产线报告期并核对其质量和能源平衡。 | `eu-jrc-fmp-bref-2022` |
| `allocation_internal_scrap` | internally_recycled_stainless_scrap | 将声明前景边界内返回的废钢作为内部循环；在实际过程保留收集和重熔负荷，不得将同一废钢抵扣或重复计作外部输出。 |  |
| `allocation_exported_scrap` | exported_stainless_scrap | 在准备废钢、修边料、磨削粉尘或可回收含金属残余物离开前景时报告；除非下游研究另行声明后果型情景，否则不得在前景清单中给予替代初级钢信用。 |  |
| `allocation_recovered_acid` | recovered_acid_and_by_products | 酸回收应优先物理细分；返回同一生产线的回收酸作为内部循环建模；可销售副产品离开系统时披露分配变量、数值、期间和敏感性。 | `us-epa-iron-steel-effluent-2002` |
| `allocation_packaging_reuse` | reusable_shipping_items | 按有据预期使用次数分配可重复使用托盘或料架的生产负荷；仅在声明边界内时纳入维修和返运负荷；无记录不得假定重复使用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_and_scrap_mass` | `feed_preparation` | 来料、已准备中间产品和准备废钢 | 经校准衡器票据和生产批次台账 | lot_id; grade; form; dimensions; feed_mass_kg; preparation_scrap_kg; internal_return_kg; stock_change_kg | 核对接收衡器、生产线计数器、废钢衡器和库存记录 | kg | 每批次，按月或声明报告期聚合 | 至少连续 12 个代表性月份；较短生产活动则覆盖全部批次并说明理由 | 服务于声明产品的全部准备设备 | 汇总归属质量；核对来料等于已准备中间产品、外运废钢、内部返回及实测库存变化之和 | 衡器校准、批次追溯、库存核对和经签署异常日志 |
| `cp_preparation_energy` | `feed_preparation` | 准备用电 | 电力分表或馈线表 | timestamp; meter_id; opening_MJ; closing_MJ; downtime; shared_throughput_kg | 读取专用电表；共用时按有据运行时间与功率或实测产量分配 | MJ | 每班或每日 | 与产品质量相同报告期 | 仅含准备设备及局部抽风 | 汇总读数，扣除有据无关负荷，再除以参考产品质量 | 电表校准或公用事业级规格及分配核对 |
| `cp_annealing_records` | `annealing_and_descaling` | 退火中间产品、电力、气体及化石二氧化碳 | 炉批日志、公用工程表计、气体账单及排放计算或监测记录 | lot_id; input_mass_kg; output_mass_kg; electricity_MJ; gas_m3; gas_reference_conditions; nitrogen_m3; hydrogen_m3; fuel_carbon; stack_CO2_kg | 将炉日志与专用表计或经核对公用工程记录连接，并保留排放方法 | kg; MJ; m3 | 每炉批或连续线每班 | 与产品质量相同报告期并覆盖代表性工况 | 全部退火炉、气氛供应、风机及直接相关控制 | 汇总纳入批次，按连接的产品净质量归一化，避免计量气体与推算能量重叠 | 表计校准、账单核对、炉温制度、气体证书和排放方法记录 |
| `cp_pickling_records` | `acid_pickling_and_rinsing` | 酸洗中间产品、酸、水、电力、废物和 HF 排放 | 槽液台账、液位、采购领用、水电表、废物联单、排水和烟气监测 | lot_id; strip_mass_kg; acid_solution_kg; acid_concentration; water_kg; electricity_MJ; recovered_acid_kg; spent_liquor_kg; sludge_kg; sludge_solids; wastewater_m3; density; HF_concentration; exhaust_Nm3 | 核对槽液补加和回收；计量公用工程；称量废物；按场址监测计划采样排水和烟气 | kg; MJ; m3; Nm3 | 槽液与公用工程每批或每班；每次废物转移；按许可或活动频次监测 | 与产品质量相同报告期，并包括启动和维护事件 | 酸洗槽、漂洗、干燥、通风、烟气处理、酸回收及直接相关废水处理 | 内部循环后计算外部净输入输出，并按连接的产品净质量归一化 | 仪器校准、实验室 QA/QC、监管链、槽液平衡闭合和废物联单 |
| `cp_cold_rolling_records` | `cold_rolling_and_temper` | 轧制中间产品、电力、油、补加水、乳化液和污泥 | 钢卷追踪、电表、库存台账、槽体平衡和废物转移记录 | lot_id; input_mass_kg; output_mass_kg; electricity_MJ; oil_opening_kg; oil_purchased_kg; oil_closing_kg; recovered_oil_kg; make_up_water_kg; spent_emulsion_kg; sludge_kg | 将钢卷与生产线表计连接并核对轧制液库存和废物转移 | kg; MJ | 每卷或每班；每月库存核对 | 与产品质量相同报告期并覆盖代表性轧制计划 | 所纳入轧机机架、液压、乳化液循环、过滤和控制 | 汇总连接钢卷；计算油和水净输入；按产品净质量归一化；不重复计入循环乳化液 | 表计校准、钢卷追溯、库存核对和废物联单 |
| `cp_mechanical_finishing_records` | `mechanical_surface_finishing` | 精整中间产品、电力、磨料、水、粉尘、污泥和颗粒物排放 | 钢卷或钢板路线记录、表计、材料领用、废物称量和烟气监测 | lot_id; input_mass_kg; output_mass_kg; finish_code; electricity_MJ; abrasive_kg; water_kg; dust_kg; sludge_kg; sludge_solids; particulate_concentration; exhaust_Nm3 | 将实际表面路线与公用工程和材料记录连接；称量捕集废物；监测烟气或验证捕集平衡 | kg; MJ; Nm3 | 每批或每班；每次废物转移；按监测计划频次记录大气排放 | 与产品质量相同报告期并覆盖代表性表面状态组合 | 所纳入磨削、抛光、拉丝、抽风、过滤和湿法系统 | 汇总实际路线记录并按连接的产品净质量归一化；干粉尘与湿污泥分开 | 表计校准、材料台账、衡器检查、表面状态追溯和监测 QA/QC |
| `cp_finalization_records` | `product_finalization` | 最终处理中间产品、电力、包装和最终废钢 | 批次台账、电表、包装物料清单、衡器票据和重复使用日志 | lot_id; input_mass_kg; saleable_mass_kg; electricity_MJ; film_kg; strap_length_m; strap_linear_mass; pallet_count; pallet_mass; pallet_reuse_count; scrap_kg | 将纵切、剪切、检验和发运记录与表计和包装领用连接 | kg; MJ; m; count | 每批次，按报告期聚合 | 与产品质量相同报告期 | 最终转换、检验、搬运和包装设备 | 仅汇总跨厂门的包装；计算捆带和托盘质量；按产品净质量归一化 | 衡器和表计校准、物料清单核对、发运记录和重复使用证据 |
| `cp_final_product_mass` | `product_finalization` | 可销售参考产品净量 | 经认证发运衡器和检验放行记录 | lot_id; gross_dispatch_mass_kg; packaging_mass_kg; net_product_mass_kg; grade; dimensions; finish; edge_condition; release_status | 根据经校准衡器记录确定产品净质量，仅放行合格产品 | kg | 每个可销售批次 | 与全部前景交换相同报告期 | 声明数据包覆盖的全部可销售产品 | 汇总合格产品净质量并归一化为恰好 1,000 kg；排除包装和不合格品 | 衡器校准、检验证书、发运记录和质量核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有前景交换 | 归一化量 = 报告期交换量 / 可销售产品净质量 × 1,000 kg | reporting_period_amount; net_saleable_product_mass | 每 1,000 kg 可销售产品净量的交换 |  |
| `calc_internal_mass_link` | 相邻不锈钢中间产品 | 对每个连接批次，上游中间产品输出等于下游中间产品输入并校正单独记录的库存变化；调查任何未分配差异 | upstream_output_mass; downstream_input_mass; stock_change | 经核对中间产品质量和异常差异 |  |
| `calc_acid_active_mass` | 硝酸、氢氟酸和中和剂 | 活性物质质量 = 溶液质量 × 实测质量分数；同时保留溶液质量和活性物质质量 | solution_mass; measured_mass_fraction | 供披露的活性物质质量 | `eu-jrc-fmp-bref-2022` |
| `calc_gas_reference_volume` | 天然气和保护气 | 使用场址批准的压缩性方法将实测体积换算至声明的参比温度和压力，并保留实测与换算值 | measured_volume; temperature; pressure; moisture_basis; compressibility_factor | 声明参比条件下气体体积 |  |
| `calc_fossil_co2` | 炉用化石二氧化碳 | 使用经验证烟道实测值，或根据前景燃料碳和有据氧化率计算化石 CO2；本流不含生物源碳 | fuel_amount; fuel_carbon_content; oxidation_factor; stack_measurement | 排入大气的化石 CO2 |  |
| `calc_wastewater_mass` | 酸性酸洗漂洗废水 | 废水质量 = 实测排水体积 × 实测或经验证密度 | discharge_volume; density | 跨越边界的废水质量 | `us-epa-iron-steel-effluent-2002` |
| `calc_air_release` | HF 和颗粒物排放 | 排放质量 = 经验证浓度 × 干基标准状态废气体积，并保留单位和湿度修正 | concentration; exhaust_volume; standard_conditions; moisture_correction | 排入大气的污染物质量 | `eu-jrc-fmp-bref-2022` |
| `calc_packaging_mass` | 钢制捆带和木托盘 | 捆带质量 = 长度 × 实测线质量；可证实重复使用时，托盘分配质量 = 数量 × 托盘质量 / 有据预期使用次数 | strap_length; strap_linear_mass; pallet_count; pallet_mass; expected_uses | 每参考流包装质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和来料 | 对每个覆盖产品族保留钢种或成分标准、形态、尺寸、表面状态、边部状态、输入状态、输出状态和确立进一步加工状态的工序。 | 材质证明、工艺卡、检验放行和分类审查 |
| `dq_route_completeness` | 过程图 | 证明最后一道初次热轧或冷轧之后至少有一道工序确立进一步加工状态，且产品的每道场内或外包工序仅表示一次。 | 工艺路线图、设备清单、外包记录和质量连接过程台账 |
| `dq_mass_balance` | 不锈钢来料、中间产品、产品和废钢 | 在报告期内核对质量，并在发布前调查无法解释的差异；披露实测库存变化和未分配损失。 | 经校准衡器记录、库存台账、废钢联单和经签署平衡审查 |
| `dq_utility_coverage` | 电力、气体和水 | 覆盖归属于声明路线的启动、停机、空转、循环、污染治理和直接相关处理负荷；披露共用表计分配。 | 表计图、校准、运行日志和分配工作簿 |
| `dq_chemical_identity` | 酸洗和精整化学品 | 保留产品名称、浓度或配方、供应商、所用密度、安全数据表及批次或报告期领用量。 | 采购记录、SDS、分析证书、槽液台账和采样记录 |
| `dq_emissions_and_wastes` | 直接排放和废物输出 | 保留采样方法、标准状态、检出限、干湿基、废物含水率或固体含量、去向及监测期代表性。 | 实验室 QA/QC、监测报告、监管链和废物转移文件 |
| `dq_temporal_representativeness` | 前景数据集 | 优先覆盖至少连续 12 个代表性月份；说明较短活动并记录产品组合、维护、异常事件和产能利用率。 | 生产日历、维护日志、事件登记和覆盖率计算 |
| `dq_no_unverified_uuid_proxy` | 所有 Tiangong 引用 | 未直接验证精确且公开 state_code=100 的身份时保持 UUID 为空；不得以更宽泛代理替代缺失的路线、状态、地理或技术特定身份。 | UUID 审计和未解决身份登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_and_state` | reference_product | 不锈钢钢种、扁平轧制形态、输入状态、输出进一步加工状态或界定性工序缺失或与产品边界不一致时，判定不符合。 | `un-cpc-v3-structure-2025`; `un-cpc-v3-explanatory-notes-2025` |
| `validate_reference_mass` | reference_flow | 确认输出行 `output_reference_product` 归一化后等于 1,000 kg 可销售产品净质量，且不含包装质量。 |  |
| `validate_route_presence` | process_inventory | 确认存在来料准备和产品最终处理，并由最后一道初次热轧或冷轧之后发生的退火、酸洗、平整或光整轧制、机械表面精整或其他有记录工序确立进一步加工状态；仅有初次冷减薄不足以符合。 | `eu-jrc-fmp-bref-2022` |
| `validate_atomic_flows` | process_inventory | 确认每行仅表示一种原子级材料、能源、废物或基本流交换，条件适用性通过过程或行声明而非组合选择标签表达。 |  |
| `validate_mass_reconciliation` | foreground_mass_balance | 确认报告期来料、连接中间产品、产品、废钢、废物和实测库存变化相互平衡；无法解释的差异应标记审查。 |  |
| `validate_pickling_route` | acid_pickling_and_rinsing | 纳入酸洗时，要求报告槽液化学体系与浓度、水循环、酸回收、烟气处理、废水去向、污泥固体含量和适用的大气排放监测。 | `eu-jrc-fmp-bref-2022`; `us-epa-iron-steel-effluent-2002` |
| `validate_energy_identity` | electricity_and_gas_inputs | 缺失所需供应、地理、技术、交付边界或参比条件披露的电力或气体身份不得接受。 |  |
| `validate_unresolved_identities` | flow_references | 将每个 UUID 为空的清单行报告为未解决，并确认未提升任何不精确或非公开候选项。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一族已声明经进一步加工不锈钢扁平轧材的前景生产数据集 |
| downstream_use | 经方法审查并解决或明确接受身份缺口后，可作为 `secondary_dataset` 和 `background_dataset` |
| allowed_use | 对已声明生产者、路线、钢种族、产品状态和报告期进行归因型门到门建模；连接单独建模的上游来料生产及下游制造 |
| excluded_use | 未连接上游数据集的初级不锈钢生产；一般性使用阶段主张；后果型废钢信用主张；语义边界外产品；在未披露钢种、表面状态、路线或地理差异时替代使用 |
| required_metadata | PCR id 和版本状态；生产者与地理位置；报告期；钢种族；尺寸；表面状态；边部和交货状态；来料状态；进一步加工工序；联合生产线聚合；产能利用率；上游数据集选择；分配；包装；未解决 UUID |
| required_quality_disclosure | 质量平衡闭合；表计和衡器覆盖；共用公用工程分配；化学品浓度；气体参比条件；水循环；酸回收；污染治理边界；废物含水率和去向；排放监测；时间和技术代表性 |
| update_trigger | 钢种族或产品状态、界定性工序、炉用燃料、酸洗化学体系、轧制或精整技术、污染治理、供应商组合、地理位置、分配、包装发生变化，或年度质量、能源、水、化学品、废物或排放绩效发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-03 | CPC 41232 官方分类身份 |
| `un-cpc-v3-explanatory-notes-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版解释性说明，2025-06-30，第 208 页，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索日期 2026-09-03 | 类和子类语境、排除项及语义产品边界 |
| `eu-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022 年 12 月，尤其第 3 章，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf，检索日期 2026-09-03 | 不锈钢冷轧路线、退火酸洗序列、过程输入输出、机械精整、公用工程、废物、排放、循环、污染治理和监测设计 |
| `us-epa-iron-steel-effluent-2002` | 官方指南（`official_guidance`） | 美国环境保护署，《钢铁制造点源类别最终排放限值指南与标准开发文件》，EPA-821-R-02-004，2002 年 4 月，https://www.epa.gov/sites/default/files/2015-10/documents/ironsteel_dd_2002.pdf，检索日期 2026-09-03 | 钢材精整漂洗水管理、烟气洗涤循环、酸回收与净化、废酸液与污泥处理及废水采集边界 |
