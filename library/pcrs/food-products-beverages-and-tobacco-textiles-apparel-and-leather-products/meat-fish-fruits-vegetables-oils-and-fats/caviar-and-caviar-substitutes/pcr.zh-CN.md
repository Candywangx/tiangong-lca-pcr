---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.caviar-and-caviar-substitutes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 鱼子酱及鱼子酱代用品

## 1. 范围与适用性

本 PCR 适用于以鲟鱼卵制成的包装食用鱼子酱，以及以其他鱼类的卵制成的包装鱼子酱代用品。前景加工范围从接收冷藏鲟鱼卵巢或鱼卵、或已声明物种的非鲟鱼鱼卵开始，涵盖分离、清洗、沥水、盐渍或配方混合、分级、灌装、可选巴氏杀菌、成熟和工厂门口前冷藏。

前景边界始于接收鱼卵原料。养殖或捕捞、饲料生产、鱼类饲养、捕获、供应商实施的屠宰和取卵、进厂运输、分销、零售、食用及消费后包装处置不属于前景边界；研究范围需要时，应通过有记录的上游或下游数据集连接其负荷。若数据集以整鱼为起点，应增加此处省略的屠宰和取卵作业，并分别量化所有共产品和废物。

本类别不包括未经处理的鲜鱼卵或冻鱼卵、归入其他类别的熟制或熏制鱼卵、完全不含鱼卵的植物基球形仿制品，以及仅把鱼子酱或鱼卵作为配料的预制菜肴。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.caviar-and-caviar-substitutes |
| classification_refs | CPC 3.0：21243，鱼子酱及鱼子酱代用品 |
| covered_products | 以食品级盐处理的粒状鲟鱼鱼子酱；以已声明鱼类物种（如圆鳍鱼、鳕鱼、鲱鱼或鲑鱼鱼卵）制成的盐渍和配方型鱼子酱代用品；本类别内的鲜制、成熟、巴氏杀菌或其他依法保藏的包装形态 |
| excluded_products | 未经处理的鲜鱼卵或冻鱼卵；本类别以外的熟制或熏制鱼卵；鱼卵菜肴；不含鱼类原料的植物或海藻酸盐仿制品；作为独立产品的上游活鱼生产 |
| representative_product | 以鲟鱼鱼子酱路线和圆鳍鱼鱼卵代用品路线为代表的包装盐渍粒状鱼卵 |
| production_route | 冷藏鱼卵接收与暂存；需要时的鱼卵分离；清洗沥水；加盐或配方混合；分级；灌装密封；可选巴氏杀菌；成熟和冷藏 |
| market_state | 在已声明的保藏与温度制度下，于工厂门口交付的即食包装产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 装在密封零售或批发容器中的即食鱼子酱或鱼卵制鱼子酱代用品 |
| How much | 1 kg 产品净重，不含全部包装 |
| How well | 符合已声明的鱼类物种、鱼卵状态、配方、保藏路线、食品安全规范和市场规范 |
| How long or cycle | 一个在工厂门口放行的生产批次；保质期和贮藏条件作为产品属性声明，不另作服务持续时间 |
| reference_flow_link | 从冷藏库放行的合格包装产品净重 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净重 |
| 参考产品流 | 鱼子酱或鱼子酱代用品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型：鲟鱼鱼子酱或鱼子酱代用品；鱼类俗名和学名；养殖或野生来源；适用时声明排卵卵或未排卵卵；接收鱼卵状态；配料与添加剂配方；盐规范；保藏路线；巴氏杀菌状态；初级容器材料与规格；净重；生产批次；贮藏温度制度；上游和前景采用的分配方法 |

构建前景数据包时，所有必需限定信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。若代用品使用圆鳍鱼以外的物种，应以独立的物种特定原子交换替换圆鳍鱼候选卡；不得把圆鳍鱼流改名为笼统的鱼卵流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告沥水后或灌装后的产品净重，排除初级容器、封盖、标签和二次包装。 |
| `ingredient_mass` | 鱼卵、盐、添加剂和清洗化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实际使用质量分别记录每种具名物料；不得把配料或添加剂合并为配方总量。 |
| `packaging_mass` | 每个包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用批次特定皮重把件数转换为组件质量，并保留件数和皮重证据。 |
| `water_mass` | 工艺水、包装清洗水和卫生清洗水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用计量质量，或按实测/有记录的密度及温度基准把体积转换为质量。 |
| `energy_separation` | 电力、外购蒸汽和燃料 | Energy | kWh 或 MJ | 保留各种能源载体各自的记录和换算因子；不得把电力、蒸汽、天然气和液化石油气汇总到同一能源行。 |
| `waste_mass_balance` | 产品、不合格品、残余物、废水和污泥 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在批次或生产周期层面核对输入输出质量，并披露蒸发、滞留水、未测损失和清单闭合情况。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_roe_to_factory_gate` | foreground_system | 纳入冷藏鱼卵接收与暂存、分离、清洗、沥水、配方混合、分级、包装、可选巴氏杀菌、成熟、冷藏、卫生清洗、前景废水和固废产生及直接排放。 | `codex-cxc-52-2003`; `codex-gsfa-09-3-3` |
| `boundary_upstream_supply` | upstream_inputs | 连接在物种和路线方面具有代表性的上游数据集，覆盖养殖或捕捞、适用时的鱼饲料、捕获、供应商屠宰与取卵、配料、包装、电力、燃料、蒸汽、水、制冷剂和进厂运输；不得把这些负荷表示为零。 | `eu-pef-2021-2279`; `dudu-georgescu-2024-sturgeon` |
| `boundary_optional_operations` | conditional_processes | 仅当声明的产品路线实际执行时，才纳入巴氏杀菌、重新包装、冻结或场内废水处理；否则记录为不适用。 | `codex-cxs-291-2010`; `codex-cxc-52-2003` |
| `boundary_downstream_exclusion` | downstream_stages | 本工厂门口数据集排除分销、零售、使用和消费后处理；更广边界研究应按声明的冷链和包装末端情景将其作为独立过程加入。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的冷藏鲟鱼卵巢或鱼卵，或已声明物种的非鲟鱼鱼卵，并带有供应商质量、温度、来源和批次记录 |
| starting_condition_role | 前景门从接收鱼卵原料开始；若养殖或捕捞、捕获、屠宰和取卵发生在场外，则由上游鱼卵供应数据集承载 |
| product_classification_scope | 对应 CPC 3.0 子类 21243 的加工鱼子酱及鱼子酱代用品 |
| recursive_input_rule | 若购入的鱼子酱或鱼子酱代用品用于混配或重新包装，应将其作为独立产品投入并连接上游数据集，不得在同一前景过程中递归重建 |
| upstream_dataset_requirement | 物种、地理、生产系统、鱼卵状态、共产品处理、时间期和供应商边界应具有代表性并予披露；遗漏上游屠宰或取卵负荷将使数据包不完整 |
| disclosure | 声明起始原料是完整卵巢、分离鱼卵、盐渍鱼卵或其他中间体；声明所有既往加工、冷链状态、供应商分配、不合格原料处理和数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `roe_receipt_cold_holding` | 鱼卵接收与冷藏暂存 | required | 始终 | 前景原料接收和控温暂存 | kg 接收鱼卵原料 |
| `egg_separation_washing` | 鱼卵分离、清洗与沥水 | required | 始终；仅对已核实的预分离鱼卵，分离工作量可为零 | 前景准备 | kg 清洁沥干鱼卵 |
| `formulation_grading` | 盐渍、配方混合与分级 | required | 始终 | 前景产品配方 | kg 配方鱼卵 |
| `filling_preservation` | 灌装、包装与保藏 | required | 始终；巴氏杀菌公用工程仅适用于巴氏杀菌产品 | 前景包装和条件性保藏 | kg 包装产品 |
| `finished_cold_storage` | 成熟与成品冷藏 | required | 始终 | 前景控温暂存与放行 | kg 放行合格产品 |
| `sanitation_effluent` | 卫生清洗与废水处理 | required | 始终；污泥仅在场内产生时适用 | 共享前景支持过程 | 支持每 kg 参考产品 |

### 过程：鱼卵接收与冷藏暂存（`roe_receipt_cold_holding`）

#### 输入

##### 产品流

###### 接收冷藏鲟鱼卵巢（`received_sturgeon_ovary`）

在本过程边界记录冷藏鲟鱼卵巢，并按以下数量规则计量：鲟鱼鱼子酱路线验收入库的供应商交付质量。

- 选定流：冷藏鲟鱼卵巢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：鲟鱼鱼子酱路线验收入库的供应商交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxs-291-2010`; `codex-cxc-52-2003`

###### 接收圆鳍鱼鱼卵（`received_lumpfish_roe`）

在本过程边界记录冷藏或解冻的圆鳍鱼鱼卵，并按以下数量规则计量：代表性代用品路线验收入库的供应商交付质量。

- 选定流：冷藏或解冻的圆鳍鱼鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：代表性代用品路线验收入库的供应商交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-gsfa-09-3-3`

###### 接收工序电力（`receipt_electricity`）

在本过程边界记录设施供电电力，并按以下数量规则计量：接收间制冷、泵送、搬运和暂存设备的计量电力。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：接收间制冷、泵送、搬运和暂存设备的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter`
- 来源：`eu-pef-2021-2279`

###### 接收工序补充 R-134a 制冷剂（`receipt_r134a_makeup`）

在本过程边界记录R-134a 制冷剂，并按以下数量规则计量：使用 R-134a 时，按维护记录分配给接收及原料暂存设备的补充量。

- 选定流：R-134a 制冷剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 R-134a 时，按维护记录分配给接收及原料暂存设备的补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`

###### 接收工序补充 R-404A 制冷剂（`receipt_r404a_makeup`）

在本过程边界记录R-404A 制冷剂，并按以下数量规则计量：使用 R-404A 时，按维护记录分配给接收及原料暂存设备的补充量。

- 选定流：R-404A 制冷剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 R-404A 时，按维护记录分配给接收及原料暂存设备的补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 暂存鲟鱼卵巢（`held_sturgeon_ovary`）

在本过程边界记录控温鲟鱼卵巢，并按以下数量规则计量：转入分离工序的验收鲟鱼卵巢质量。

- 选定流：控温鲟鱼卵巢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入分离工序的验收鲟鱼卵巢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 接收工序输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

###### 暂存圆鳍鱼鱼卵（`held_lumpfish_roe`）

在本过程边界记录控温圆鳍鱼鱼卵，并按以下数量规则计量：转入分离工序的验收圆鳍鱼鱼卵质量。

- 选定流：控温圆鳍鱼鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入分离工序的验收圆鳍鱼鱼卵质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 接收工序输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

##### 废物流

###### 不合格鲟鱼卵巢（`rejected_sturgeon_ovary`）

在本过程边界记录不合格鲟鱼卵巢，并按以下数量规则计量：送往已声明处理方式的不合格鲟鱼卵巢称量质量。

- 选定流：不合格鲟鱼卵巢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明处理方式的不合格鲟鱼卵巢称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 不合格圆鳍鱼鱼卵（`rejected_lumpfish_roe`）

在本过程边界记录不合格圆鳍鱼鱼卵，并按以下数量规则计量：送往已声明处理方式的不合格圆鳍鱼鱼卵称量质量。

- 选定流：不合格圆鳍鱼鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明处理方式的不合格圆鳍鱼鱼卵称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 接收工序 R-134a 排放（`receipt_r134a_emission`）

在本过程边界记录1,1,1,2-四氟乙烷（HFC-134a），排放至空气，并按以下数量规则计量：分配给接收和原料暂存设备的制冷剂库存损失。

- 选定流：1,1,1,2-四氟乙烷（HFC-134a），排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给接收和原料暂存设备的制冷剂库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 接收工序 R-404A 排放（`receipt_r404a_emission`）

在本过程边界记录R-404A 制冷剂，排放至空气，并按以下数量规则计量：分配给接收和原料暂存设备的制冷剂库存损失。

- 选定流：R-404A 制冷剂，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给接收和原料暂存设备的制冷剂库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

### 过程：鱼卵分离、清洗与沥水（`egg_separation_washing`）

#### 输入

##### 产品流

###### 待分离鲟鱼卵巢（`separation_sturgeon_ovary`）

在本过程边界记录控温鲟鱼卵巢，并按以下数量规则计量：进入切分和筛分的转移质量。

- 选定流：控温鲟鱼卵巢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入切分和筛分的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-52-2003`

###### 待清洗圆鳍鱼鱼卵（`separation_lumpfish_roe`）

在本过程边界记录控温圆鳍鱼鱼卵，并按以下数量规则计量：进入清洗和沥水的转移质量。

- 选定流：控温圆鳍鱼鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入清洗和沥水的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-gsfa-09-3-3`

###### 分离与清洗用水（`separation_water`）

在本过程边界记录饮用级工艺水，并按以下数量规则计量：分配给本过程的卵巢准备、鱼卵清洗和设备冲洗计量冷水。

- 选定流：饮用级工艺水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给本过程的卵巢准备、鱼卵清洗和设备冲洗计量冷水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`codex-cxc-52-2003`

###### 分离水用盐（`separation_salt`）

在本过程边界记录食品级氯化钠，并按以下数量规则计量：采用该路线时加入冷清洗水的盐称量质量。

- 选定流：食品级氯化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用该路线时加入冷清洗水的盐称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`codex-cxc-52-2003`

###### 分离工序电力（`separation_electricity`）

在本过程边界记录设施供电电力，并按以下数量规则计量：筛分机、泵、冷藏操作间和沥水设备的计量电力。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：筛分机、泵、冷藏操作间和沥水设备的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁沥干鲟鱼卵（`clean_sturgeon_eggs`）

在本过程边界记录清洁沥干鲟鱼卵，并按以下数量规则计量：放行至盐渍和分级工序的称量鱼卵。

- 选定流：清洁沥干鲟鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行至盐渍和分级工序的称量鱼卵
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

###### 清洁沥干圆鳍鱼鱼卵（`clean_lumpfish_eggs`）

在本过程边界记录清洁沥干圆鳍鱼鱼卵，并按以下数量规则计量：放行至配方混合和分级工序的称量鱼卵。

- 选定流：清洁沥干圆鳍鱼鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行至配方混合和分级工序的称量鱼卵
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

##### 废物流

###### 卵巢膜废物（`ovarian_membrane_waste`）

在本过程边界记录鲟鱼卵巢膜，并按以下数量规则计量：切分和筛分时去除的结缔组织称量质量。

- 选定流：鲟鱼卵巢膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：切分和筛分时去除的结缔组织称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`codex-cxc-52-2003`

###### 脂肪组织废物（`fatty_tissue_waste`）

在本过程边界记录鲟鱼卵巢脂肪组织，并按以下数量规则计量：从鲟鱼卵中去除的脂肪组织称量质量。

- 选定流：鲟鱼卵巢脂肪组织
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从鲟鱼卵中去除的脂肪组织称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`codex-cxc-52-2003`

###### 血凝块废物（`blood_clot_waste`）

在本过程边界记录鱼血凝块，并按以下数量规则计量：清洗和检查时去除的血凝块称量质量。

- 选定流：鱼血凝块
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：清洗和检查时去除的血凝块称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`codex-cxc-52-2003`

###### 破损鱼卵废物（`broken_roe_waste`）

在本过程边界记录破损鱼卵，并按以下数量规则计量：分离和沥水时去除的破损或质量不合格鱼卵称量质量。

- 选定流：破损鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分离和沥水时去除的破损或质量不合格鱼卵称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 鱼卵清洗废水（`roe_washing_wastewater`）

在本过程边界记录鱼卵加工废水，并按以下数量规则计量：离开分离与清洗工序的计量或质量平衡计算废水。

- 选定流：鱼卵加工废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开分离与清洗工序的计量或质量平衡计算废水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁沥干鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_balance`

##### 基本流

### 过程：盐渍、配方混合与分级（`formulation_grading`）

#### 输入

##### 产品流

###### 配方用鲟鱼卵（`formulation_sturgeon_eggs`）

在本过程边界记录清洁沥干鲟鱼卵，并按以下数量规则计量：进入盐渍和分级的转移质量。

- 选定流：清洁沥干鲟鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入盐渍和分级的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 配方用圆鳍鱼鱼卵（`formulation_lumpfish_eggs`）

在本过程边界记录清洁沥干圆鳍鱼鱼卵，并按以下数量规则计量：进入代用品配方混合和分级的转移质量。

- 选定流：清洁沥干圆鳍鱼鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入代用品配方混合和分级的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 配方用盐（`formulation_salt`）

在本过程边界记录食品级氯化钠，并按以下数量规则计量：用校准秤加入特定配方批次的质量。

- 选定流：食品级氯化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用校准秤加入特定配方批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`codex-cxs-291-2010`; `codex-cxc-52-2003`

###### 苯甲酸钠（`formulation_sodium_benzoate`）

在本过程边界记录苯甲酸钠，并按以下数量规则计量：仅在声明的代用品配方和适用法律允许时记录校准秤称量质量。

- 选定流：苯甲酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅在声明的代用品配方和适用法律允许时记录校准秤称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`codex-gsfa-09-3-3`

###### 山梨酸钾（`formulation_potassium_sorbate`）

在本过程边界记录山梨酸钾，并按以下数量规则计量：仅在声明的代用品配方和适用法律允许时记录校准秤称量质量。

- 选定流：山梨酸钾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅在声明的代用品配方和适用法律允许时记录校准秤称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`codex-gsfa-09-3-3`

###### 诱惑红 AC（`formulation_allura_red`）

在本过程边界记录诱惑红 AC，并按以下数量规则计量：仅对依法允许且已声明的代用品配方记录校准秤称量质量。

- 选定流：诱惑红 AC
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅对依法允许且已声明的代用品配方记录校准秤称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`codex-gsfa-09-3-3`

###### 亮蓝 FCF（`formulation_brilliant_blue`）

在本过程边界记录亮蓝 FCF，并按以下数量规则计量：仅对依法允许且已声明的代用品配方记录校准秤称量质量。

- 选定流：亮蓝 FCF
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅对依法允许且已声明的代用品配方记录校准秤称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`codex-gsfa-09-3-3`

###### 配方工序电力（`formulation_electricity`）

在本过程边界记录设施供电电力，并按以下数量规则计量：冷藏操作间、秤、混合机和分级设备的计量电力。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：冷藏操作间、秤、混合机和分级设备的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配方鲟鱼鱼子酱（`formulated_sturgeon_caviar`）

在本过程边界记录灌装前盐渍鲟鱼鱼子酱，并按以下数量规则计量：转入灌装工序的合格配方输出称量质量。

- 选定流：灌装前盐渍鲟鱼鱼子酱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入灌装工序的合格配方输出称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

###### 配方圆鳍鱼鱼子酱代用品（`formulated_lumpfish_substitute`）

在本过程边界记录灌装前配方圆鳍鱼鱼子酱代用品，并按以下数量规则计量：转入灌装工序的合格配方输出称量质量。

- 选定流：灌装前配方圆鳍鱼鱼子酱代用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入灌装工序的合格配方输出称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

##### 废物流

###### 配方残余物（`formulation_residue`）

在本过程边界记录不合格配方鱼卵，并按以下数量规则计量：溅洒物、混合机滞留物和质量不合格配方鱼卵的称量质量。

- 选定流：不合格配方鱼卵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：溅洒物、混合机滞留物和质量不合格配方鱼卵的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 多余配方盐水（`excess_brine`）

在本过程边界记录废氯化钠盐水，并按以下数量规则计量：从配方鱼卵中沥出的液体称量或质量平衡计算量。

- 选定流：废氯化钠盐水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从配方鱼卵中沥出的液体称量或质量平衡计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配方鱼卵
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_balance`

##### 基本流

### 过程：灌装、包装与保藏（`filling_preservation`）

#### 输入

##### 产品流

###### 包装用鲟鱼鱼子酱（`packaging_sturgeon_caviar`）

在本过程边界记录灌装前盐渍鲟鱼鱼子酱，并按以下数量规则计量：进入灌装线的转移质量。

- 选定流：灌装前盐渍鲟鱼鱼子酱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入灌装线的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 包装用圆鳍鱼代用品（`packaging_lumpfish_substitute`）

在本过程边界记录灌装前配方圆鳍鱼鱼子酱代用品，并按以下数量规则计量：进入灌装线的转移质量。

- 选定流：灌装前配方圆鳍鱼鱼子酱代用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入灌装线的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 涂漆钢罐（`packaging_steel_tin`）

在本过程边界记录食品级涂漆钢罐，并按以下数量规则计量：钢罐路线的领用件数乘以实测组件皮重。

- 选定流：食品级涂漆钢罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：钢罐路线的领用件数乘以实测组件皮重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：`codex-cxs-291-2010`

###### 玻璃罐（`packaging_glass_jar`）

在本过程边界记录食品级玻璃罐，并按以下数量规则计量：玻璃罐路线的领用件数乘以实测组件皮重。

- 选定流：食品级玻璃罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：玻璃罐路线的领用件数乘以实测组件皮重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：`codex-cxs-291-2010`

###### 聚丙烯罐（`packaging_pp_jar`）

在本过程边界记录食品级聚丙烯罐，并按以下数量规则计量：塑料容器路线的领用件数乘以实测组件皮重。

- 选定流：食品级聚丙烯罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：塑料容器路线的领用件数乘以实测组件皮重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：`eu-caviar-aquitaine-2024`

###### 钢制盖（`packaging_steel_lid`）

在本过程边界记录食品级涂层钢制盖，并按以下数量规则计量：领用件数乘以实测盖皮重。

- 选定流：食品级涂层钢制盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用件数乘以实测盖皮重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`

###### 聚丙烯封盖（`packaging_pp_closure`）

在本过程边界记录食品级聚丙烯封盖，并按以下数量规则计量：适用罐型的领用件数乘以实测封盖皮重。

- 选定流：食品级聚丙烯封盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：适用罐型的领用件数乘以实测封盖皮重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`

###### 纸标签（`packaging_paper_label`）

在本过程边界记录印刷纸标签，并按以下数量规则计量：贴标件数乘以实测标签质量。

- 选定流：印刷纸标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：贴标件数乘以实测标签质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`

###### 瓦楞纸板运输箱（`packaging_corrugated_carton`）

在本过程边界记录瓦楞纸板运输箱，并按以下数量规则计量：领用纸箱件数乘以实测纸箱皮重并分配到包装单元。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用纸箱件数乘以实测纸箱皮重并分配到包装单元
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`

###### 聚乙烯缠绕膜（`packaging_pe_film`）

在本过程边界记录聚乙烯缠绕膜，并按以下数量规则计量：卷材库存损失或直接发给包装批次的质量。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：卷材库存损失或直接发给包装批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

###### 包装清洗用水（`packaging_water`）

在本过程边界记录饮用级工艺水，并按以下数量规则计量：用于清洗允许重复使用或预清洗包装组件的计量水量。

- 选定流：饮用级工艺水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用于清洗允许重复使用或预清洗包装组件的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`codex-cxc-52-2003`

###### 包装工序电力（`packaging_electricity`）

在本过程边界记录设施供电电力，并按以下数量规则计量：灌装、真空密封、喷码、称量和包装搬运的计量电力。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：灌装、真空密封、喷码、称量和包装搬运的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter`

###### 巴氏杀菌外购蒸汽（`pasteurization_steam`）

在本过程边界记录外购蒸汽，并按以下数量规则计量：仅由巴氏杀菌路线使用的计量外购蒸汽。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：仅由巴氏杀菌路线使用的计量外购蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter`
- 来源：`codex-cxc-52-2003`

###### 巴氏杀菌用天然气（`pasteurization_natural_gas`）

在本过程边界记录天然气，并按以下数量规则计量：采用场内巴氏杀菌锅炉时的计量天然气能量。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：采用场内巴氏杀菌锅炉时的计量天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter`

###### 巴氏杀菌用液化石油气（`pasteurization_lpg`）

在本过程边界记录液化石油气，并按以下数量规则计量：采用场内巴氏杀菌锅炉时称量或按发票记录的液化石油气质量。

- 选定流：液化石油气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用场内巴氏杀菌锅炉时称量或按发票记录的液化石油气质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装鲟鱼鱼子酱（`packaged_sturgeon_caviar`）

在本过程边界记录包装鲟鱼鱼子酱，并按以下数量规则计量：密封后转入成熟或冷藏的产品净重。

- 选定流：包装鲟鱼鱼子酱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：密封后转入成熟或冷藏的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

###### 包装圆鳍鱼鱼子酱代用品（`packaged_lumpfish_substitute`）

在本过程边界记录包装圆鳍鱼鱼子酱代用品，并按以下数量规则计量：密封后转入成熟或冷藏的产品净重。

- 选定流：包装圆鳍鱼鱼子酱代用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：密封后转入成熟或冷藏的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

##### 废物流

###### 破损玻璃包装（`packaging_broken_glass`）

在本过程边界记录废玻璃包装，并按以下数量规则计量：破损或不合格玻璃罐称量质量。

- 选定流：废玻璃包装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：破损或不合格玻璃罐称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 钢制包装废料（`packaging_steel_scrap`）

在本过程边界记录废钢制包装，并按以下数量规则计量：不合格钢罐和钢制盖称量质量。

- 选定流：废钢制包装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不合格钢罐和钢制盖称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 聚丙烯包装废料（`packaging_pp_scrap`）

在本过程边界记录废聚丙烯包装，并按以下数量规则计量：不合格聚丙烯罐和封盖称量质量。

- 选定流：废聚丙烯包装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不合格聚丙烯罐和封盖称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 废纸标签（`packaging_paper_waste`）

在本过程边界记录废纸标签，并按以下数量规则计量：不合格标签的称量或件数-皮重计算质量。

- 选定流：废纸标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不合格标签的称量或件数-皮重计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`

###### 废瓦楞纸板（`packaging_cardboard_waste`）

在本过程边界记录废瓦楞纸板，并按以下数量规则计量：不合格或破损纸箱称量质量。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不合格或破损纸箱称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 废聚乙烯薄膜（`packaging_pe_film_waste`）

在本过程边界记录废聚乙烯薄膜，并按以下数量规则计量：不合格薄膜和卷材端部称量质量。

- 选定流：废聚乙烯薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不合格薄膜和卷材端部称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 不合格包装鱼卵产品（`rejected_packaged_product`）

在本过程边界记录不合格包装鱼卵产品，并按以下数量规则计量：灌装、密封、巴氏杀菌或包装检查时判废的产品净重。

- 选定流：不合格包装鱼卵产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：灌装、密封、巴氏杀菌或包装检查时判废的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 包装清洗废水（`packaging_wastewater`）

在本过程边界记录包装清洗废水，并按以下数量规则计量：包装清洗和巴氏杀菌冷却排放的计量或质量平衡计算水量。

- 选定流：包装清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包装清洗和巴氏杀菌冷却排放的计量或质量平衡计算水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_balance`

##### 基本流

###### 场内燃料燃烧化石二氧化碳（`combustion_co2_fossil`）

在本过程边界记录二氧化碳（化石源），排放至空气，并按以下数量规则计量：烟气实测量，或按天然气/LPG 采集用量进行燃料特定计算。

- 选定流：二氧化碳（化石源），排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟气实测量，或按天然气/LPG 采集用量进行燃料特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

###### 场内燃料燃烧甲烷（`combustion_ch4`）

在本过程边界记录甲烷，排放至空气，并按以下数量规则计量：烟气实测量，或按燃料和技术特定因子计算。

- 选定流：甲烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟气实测量，或按燃料和技术特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

###### 场内燃料燃烧氧化亚氮（`combustion_n2o`）

在本过程边界记录氧化亚氮，排放至空气，并按以下数量规则计量：烟气实测量，或按燃料和技术特定因子计算。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟气实测量，或按燃料和技术特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

###### 场内燃料燃烧氮氧化物（`combustion_nox`）

在本过程边界记录氮氧化物，排放至空气，并按以下数量规则计量：烟气实测量，或按燃料和技术特定因子计算。

- 选定流：氮氧化物，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟气实测量，或按燃料和技术特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

###### 场内燃料燃烧一氧化碳（`combustion_co`）

在本过程边界记录一氧化碳，排放至空气，并按以下数量规则计量：烟气实测量，或按燃料和技术特定因子计算。

- 选定流：一氧化碳，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟气实测量，或按燃料和技术特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

###### 场内燃料燃烧颗粒物（`combustion_particulate`）

在本过程边界记录颗粒物，排放至空气，并按以下数量规则计量：烟气实测量，或按燃料和技术特定因子计算，并披露粒径定义。

- 选定流：颗粒物，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟气实测量，或按燃料和技术特定因子计算，并披露粒径定义
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 巴氏杀菌包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

### 过程：成熟与成品冷藏（`finished_cold_storage`）

#### 输入

##### 产品流

###### 待冷藏包装鲟鱼鱼子酱（`storage_sturgeon_caviar`）

在本过程边界记录包装鲟鱼鱼子酱，并按以下数量规则计量：进入成熟和冷藏的产品净重。

- 选定流：包装鲟鱼鱼子酱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入成熟和冷藏的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 待冷藏包装圆鳍鱼代用品（`storage_lumpfish_substitute`）

在本过程边界记录包装圆鳍鱼鱼子酱代用品，并按以下数量规则计量：进入成熟和冷藏的产品净重。

- 选定流：包装圆鳍鱼鱼子酱代用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入成熟和冷藏的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 成品冷藏电力（`storage_electricity`）

在本过程边界记录设施供电电力，并按以下数量规则计量：按占用容积-时间、托盘-时间或分表实测分配的冷库计量电力。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：按占用容积-时间、托盘-时间或分表实测分配的冷库计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cold_storage`
- 来源：`codex-cxs-291-2010`; `codex-cxc-52-2003`

###### 成品冷藏补充 R-134a 制冷剂（`storage_r134a_makeup`）

在本过程边界记录R-134a 制冷剂，并按以下数量规则计量：使用 R-134a 时按维护记录分配给成品设备的补充量。

- 选定流：R-134a 制冷剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 R-134a 时按维护记录分配给成品设备的补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`

###### 成品冷藏补充 R-404A 制冷剂（`storage_r404a_makeup`）

在本过程边界记录R-404A 制冷剂，并按以下数量规则计量：使用 R-404A 时按维护记录分配给成品设备的补充量。

- 选定流：R-404A 制冷剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 R-404A 时按维护记录分配给成品设备的补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考鱼子酱或鱼子酱代用品（`reference_product_caviar_or_substitute`）

在本过程边界记录鱼子酱或鱼子酱代用品，并按以下数量规则计量：从冷库放行的合格路线特定产品净重；通过已声明的产品类型和鱼类物种确定该交换是鲟鱼鱼子酱还是鱼子酱代用品。

- 选定流：鱼子酱或鱼子酱代用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从冷库放行的合格路线特定产品净重；每个数据集仅记录一条已声明的产品路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

##### 废物流

###### 冷藏不合格鲟鱼鱼子酱（`storage_rejected_sturgeon_caviar`）

在本过程边界记录冷藏不合格鲟鱼鱼子酱，并按以下数量规则计量：成熟、贮藏或放行检查时判废的产品净重。

- 选定流：冷藏不合格鲟鱼鱼子酱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：成熟、贮藏或放行检查时判废的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 冷藏不合格圆鳍鱼代用品（`storage_rejected_lumpfish_substitute`）

在本过程边界记录冷藏不合格圆鳍鱼鱼子酱代用品，并按以下数量规则计量：成熟、贮藏或放行检查时判废的产品净重。

- 选定流：冷藏不合格圆鳍鱼鱼子酱代用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：成熟、贮藏或放行检查时判废的产品净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 成品冷藏 R-134a 排放（`storage_r134a_emission`）

在本过程边界记录1,1,1,2-四氟乙烷（HFC-134a），排放至空气，并按以下数量规则计量：分配给成品冷藏的制冷剂库存损失。

- 选定流：1,1,1,2-四氟乙烷（HFC-134a），排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给成品冷藏的制冷剂库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品冷藏 R-404A 排放（`storage_r404a_emission`）

在本过程边界记录R-404A 制冷剂，排放至空气，并按以下数量规则计量：分配给成品冷藏的制冷剂库存损失。

- 选定流：R-404A 制冷剂，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给成品冷藏的制冷剂库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

### 过程：卫生清洗与废水处理（`sanitation_effluent`）

#### 输入

##### 产品流

###### 卫生清洗用水（`sanitation_water`）

在本过程边界记录饮用级工艺水，并按以下数量规则计量：用于清洁和卫生、且未分配给其他过程的计量水量。

- 选定流：饮用级工艺水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用于清洁和卫生、且未分配给其他过程的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`codex-cxc-52-2003`

###### 卫生清洗电力（`sanitation_electricity`）

在本过程边界记录设施供电电力，并按以下数量规则计量：清洗泵、泡沫设备和废水处理的计量电力。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：清洗泵、泡沫设备和废水处理的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter`

###### 氢氧化钠清洗剂（`sanitation_sodium_hydroxide`）

在本过程边界记录氢氧化钠，并按以下数量规则计量：碱性清洗领用的有效成分质量。

- 选定流：氢氧化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：碱性清洗领用的有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_chemical`

###### 次氯酸钠消毒剂（`sanitation_sodium_hypochlorite`）

在本过程边界记录次氯酸钠，并按以下数量规则计量：采用次氯酸盐消毒时领用的有效成分质量。

- 选定流：次氯酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用次氯酸盐消毒时领用的有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_chemical`

###### 过氧乙酸消毒剂（`sanitation_peracetic_acid`）

在本过程边界记录过氧乙酸，并按以下数量规则计量：采用过氧乙酸消毒时领用的有效成分质量。

- 选定流：过氧乙酸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用过氧乙酸消毒时领用的有效成分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_chemical`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 卫生清洗废水（`sanitation_wastewater`）

在本过程边界记录食品加工卫生清洗废水，并按以下数量规则计量：送往已声明处理方式的计量或质量平衡计算卫生清洗废水。

- 选定流：食品加工卫生清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明处理方式的计量或质量平衡计算卫生清洗废水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_balance`

###### 废水处理污泥（`wastewater_sludge`）

在本过程边界记录食品加工废水污泥，并按以下数量规则计量：场内预处理产生时记录移除污泥湿重和固含量。

- 选定流：食品加工废水污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：场内预处理产生时记录移除污泥湿重和固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 废清洗化学品容器（`chemical_container_waste`）

在本过程边界记录废高密度聚乙烯化学品容器，并按以下数量规则计量：归属于清洗化学品的空高密度聚乙烯容器称量质量。

- 选定流：废高密度聚乙烯化学品容器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于清洗化学品的空高密度聚乙烯容器称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_foreground_operations | 优先通过分表或细分物种、配方、包装形式、巴氏杀菌路线、冷藏区域、卫生清洗周期和废物处理来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_shared_utilities` | shared_utilities | 无法细分时，按设备时间、清洗面积、占用容积-时间或产品质量等有记录的因果物理驱动因子分配电力、水、卫生清洗和冷藏服务，并说明选择理由。 | `eu-pef-2021-2279` |
| `allocation_upstream_roe_supply` | supplier_roe_dataset | 上游鱼卵数据集应披露鱼肉、鱼头、内脏、鱼皮、鱼骨架或软骨、鱼鳔及其他回收组分的处理。优先细分；不可分的共产品具有重要市场价值时，应披露经济分配价格、参考期、地理和敏感性。 | `dudu-georgescu-2024-sturgeon`; `eu-pef-2021-2279` |
| `allocation_recycling_no_automatic_credit` | wastes_and_recovered_materials | 在前景边界分别记录每种废物或回收材料。除非明确建模并披露下游替代、质量、市场和分配约定，否则不得自动计入避免产品或回收收益。 | `eu-pef-2021-2279` |
| `allocation_mass_balance` | all_processes | 任何分配前均应保留未分配的物理质量平衡，并报告分配因子，使前景清单可重建。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | all production processes | 每种具名鱼卵或中间产品 | 秤重与批次记录 | date; lot_id; species; material_state; gross_mass; tare_mass; net_mass; destination_process | 校准秤并与批次流转核对 | kg | 每个批次和转移 | 完整报告期 | 所有纳入生产线 | 按物种、路线和过程汇总净重；产率核对后再归一化 | 校准证书；供应商批次记录；转移记录 |
| `cp_ingredient_mass` | `egg_separation_washing`; `formulation_grading` | 每种具名盐或添加剂 | 批次配方记录 | batch_id; ingredient_name; supplier_lot; gross_mass; tare_mass; net_mass; active_fraction; legal_authorization | 校准秤和配方签核 | kg | 每批 | 完整报告期 | 所有配方 | 分别汇总每种具名配料的有效成分或实际使用质量 | 秤校准；配方批准；分析证书 |
| `cp_output_mass` | all production processes | 每种具名合格产品输出 | 放行与转移记录 | lot_id; product_name; species; package_route; gross_mass; tare_mass; net_mass; release_status | 校准秤 | kg | 每批 | 完整报告期 | 所有纳入产品 | 按路线汇总放行净重；不合格质量不进入分母 | 校准证书；放行记录；净含量检查 |
| `cp_utility_meter` | all production processes | 电力或外购蒸汽 | 仪表或发票 | meter_id; carrier; start_reading; end_reading; unit; timestamp; process_assignment; downtime | 优先分表；否则按有记录驱动因子与发票核对 | kWh 或 MJ | 连续或每个账期 | 完整报告期 | 所有设备和共享服务 | 读数差额扣除已记录的非 PCR 负荷，并按披露驱动因子分配 | 仪表校准；发票；分配工作表 |
| `cp_water_meter` | `egg_separation_washing`; `filling_preservation`; `sanitation_effluent` | 饮用级工艺水 | 水表 | meter_id; start_reading; end_reading; unit; temperature; process_assignment | 分表或校准批次容器 | kg 或 m3 | 每批或每日 | 完整报告期 | 所有纳入用水点 | 按声明密度把体积换算为质量；避免工艺和卫生清洗重复计算 | 仪表校准；水质记录；换算记录 |
| `cp_packaging_mass` | `filling_preservation` | 每种具名包装组件 | 领用、计数和皮重记录 | component_id; material; supplier_lot; count_issued; count_rejected; mean_tare_mass; measured_total_mass | 计数加代表性皮重称量，或仓库直接质量 | kg | 每个包装批次 | 完整报告期 | 所有初级容器、封盖、标签和二次包装 | 分别计算组件质量并核对领用、包装和不合格件数 | 皮重抽样记录；规范；仓库领用记录 |
| `cp_fuel_meter` | `filling_preservation` | 每种具名场内燃料 | 仪表、储罐或发票 | fuel_name; quantity; unit; lower_heating_value; start_stock; receipts; end_stock; equipment | 仪表或库存平衡并与发票核对 | kg、m3 或 MJ | 每批并每月核对 | 完整报告期 | 所有巴氏杀菌锅炉 | 按燃料分别计算用量并保留热值来源 | 仪表或储罐校准；发票；库存核对 |
| `cp_refrigerant_balance` | `roe_receipt_cold_holding`; `finished_cold_storage` | 每种具名制冷剂投入和排放 | 制冷剂维护记录 | refrigerant_name; equipment_id; opening_charge; additions; recoveries; closing_charge; service_date; process_assignment | 设备级库存平衡 | kg | 每次维护及年度核对 | 完整报告期并含期初期末库存 | 所有纳入制冷设备 | 损失=期初充注+补充-回收-期末充注；仅按设备特定维护依据分配 | 技师记录；钢瓶称重；设备台账 |
| `cp_waste_mass` | all production processes | 每种具名固体、有机、包装、污泥或不合格产品废物 | 废物秤重和转移记录 | waste_name; source_process; gross_mass; tare_mass; net_mass; moisture_or_solids; destination; treatment | 校准秤，或核实的容器计数与皮重 | kg | 每次外运或每批 | 完整报告期 | 所有废物去向 | 分别汇总每种废物身份；不得与共产品或回收收入抵销 | 秤校准；转移联单；处理回执 |
| `cp_wastewater_balance` | `egg_separation_washing`; `formulation_grading`; `filling_preservation`; `sanitation_effluent` | 每种具名废水或盐水流 | 排水计量和质量平衡 | stream_name; meter_reading; batch_water_input; retained_water; sampled_solids; salinity; destination | 优先排水表；否则用水输入质量平衡 | kg 或 m3 | 连续、每日或每批 | 完整报告期 | 所有纳入排放点 | 分别计算每股水流；与水输入核对并披露未测蒸发或夹带 | 仪表校准；实验室结果；排放记录 |
| `cp_cleaning_chemical` | `sanitation_effluent` | 每种具名清洗剂或消毒剂 | 化学品领用与稀释记录 | chemical_name; concentrate_mass; active_fraction; dilution_water; application_area; batch_id | 仓库领用加浓度记录 | kg 有效成分 | 每次卫生清洗 | 完整报告期 | 所有纳入卫生区域 | 浓缩液质量乘以认证有效成分比例，并保持各化学品分开 | 安全数据表；分析证书；卫生清洗记录 |
| `cp_combustion_emissions` | `filling_preservation` | 每种具名直接燃烧排放 | 烟气测试或计算工作表 | fuel_name; fuel_use; heating_value; emission_name; factor; factor_source; control_technology; measured_concentration; flue_flow | 优先有效烟气实测；否则使用已声明的辖区或供应商批准因子 | kg | 每次测试及每月计算 | 完整报告期 | 所有纳入燃烧装置 | 按燃料和装置分别计算每种排放；保留因子版本和测量基准 | 烟气测试报告；燃料分析；因子出版物；计算复核 |
| `cp_cold_storage` | `finished_cold_storage` | 电力与贮藏服务 | 冷库仪表和占用记录 | meter_reading; room_id; temperature_log; product_mass; occupied_volume; entry_time; release_time | 分表加仓库管理记录 | kWh 和 kg-hour 或 m3-hour | 连续并记录每次批次移动 | 完整报告期 | 所有纳入冷库 | 先归属直接房间负荷，再按有记录的占用容积-时间或托盘-时间分配共享负荷 | 仪表校准；温度记录仪；仓库记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | 归一化量=报告期内归属于该路线的量/该路线放行合格产品净重 | 路线特定报告期量；放行净重 | 每 1 kg 参考产品的量 | `eu-pef-2021-2279` |
| `calc_packaging_mass` | packaging components | 组件质量=包装组件件数×实测平均皮重；不合格组件质量另行报告 | 件数；皮重样本；不合格件数 | kg 组件和 kg 组件废物 | `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | refrigerant emissions | 损失=期初充注+补充-回收-期末充注；负值或不合理平衡必须调查 | 充注库存；补充；回收 | kg 具名制冷剂排放 | `eu-pef-2021-2279` |
| `calc_wastewater` | wastewater streams | 排放质量=计量排水量，或水投入减去已记录的滞留水和蒸发；不得把盐水与卫生清洗废水合并 | 水表；产品质量变化；排水表 | kg 每种具名废水流 | `eu-pef-2021-2279` |
| `calc_combustion_emission` | each direct combustion emission | 排放=燃料用量×已声明的燃料和技术特定因子，除非采用有效烟气测试结果 | 燃料用量；需要时的热值；因子或烟气结果 | kg 单一种具名基本流排放 | `eu-pef-2021-2279` |
| `calc_mass_balance` | each production lot | 输入质量=合格输出+每种共产品或废物输出+进入废水或蒸发的质量+已记录库存变化与残余 | 全部质量记录 | 闭合率和未解释质量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | roe and final product | 记录鱼类俗名和学名、养殖或野生来源、供应商、批次、适用时的排卵状态，以及接收物是完整卵巢、分离鱼卵、盐渍鱼卵还是其他中间体。 | 供应商规范；追溯记录；接收检查 |
| `dq_temporal` | all foreground data | 采用代表正常生产且覆盖季节性生产、成熟和冷藏影响的连续期间；披露停产和异常批次。 | 带日期的仪表、批次、仓库和维护记录 |
| `dq_completeness` | all inventory | 纳入实际使用或产生的每种物料、包装组件、能源载体、燃料、制冷剂、水流、清洗剂、废物、废水、污泥和直接排放；零值和不适用值需要证据。 | 完整性清单；采购到使用核对；质量和能量平衡 |
| `dq_route_separation` | caviar and substitute routes | 在有记录的分配步骤之前，保持物种、配方、包装形式、巴氏杀菌和冷藏路线分开。 | 批次路由；分表；分配工作表 |
| `dq_upstream` | received roe supply | 供应商数据应包括上游鱼类生产系统、捕获、屠宰或取卵边界、共产品、分配、地理、年份和至前景门的运输。 | 供应商 LCI 或经审核的一手数据问卷 |
| `dq_measurement` | meters and scales | 为每项一手测量保留校准状态、单位、换算因子、抽样方法和不确定性或精度信息。 | 校准证书；抽样计划；计算复核 |
| `dq_waste_destination` | wastes and wastewater | 记录物理身份、湿基或干基、去向、处理技术，以及物料是销售、捐赠、回收、炼制、处理还是处置。 | 转移联单；处理回执；销售记录 |
| `dq_representativeness` | foreground and upstream datasets | 评估技术、地理和时间代表性、精度、完整性、方法一致性、文档、命名和审核状态。 | 与环境足迹方法一致的数据质量评估与审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | 确认分母为 1 kg 不含包装的合格产品净重，且全部必需限定信息齐备。 | `codex-cxs-291-2010`; `codex-gsfa-09-3-3` |
| `validate_species_scope` | product_identity | 确认鱼子酱由已声明的鲟鱼卵制成，每种代用品均标明实际非鲟鱼物种；本 PCR 拒绝笼统鱼卵或植物基仿制品。 | `codex-cxs-291-2010`; `codex-gsfa-09-3-3`; `unsd-cpc-v3-21243` |
| `validate_process_route` | process_map | 将设施流程图与接收、分离或经核实的预分离、清洗、沥水、配方、灌装、保藏、成熟、冷藏、卫生清洗和废水处理核对；解释每项省略或增加步骤。 | `codex-cxc-52-2003` |
| `validate_atomic_inventory` | process_inventory | 拒绝把多种物料、包装组件、公用工程、燃料、制冷剂、废物、废水或排放合并的选定流；每卡只能代表一个交换。 | `eu-pef-2021-2279` |
| `validate_formulation` | formulation | 将每种具名配料和添加剂与批准批次配方及适用法律授权核对；不得仅因许可清单列出某添加剂就推断实际使用。 | `codex-cxs-291-2010`; `codex-gsfa-09-3-3` |
| `validate_temperature_and_preservation` | cold_chain | 按声明产品规范核验批次温度记录、保藏路线、适用时的巴氏杀菌记录、成熟记录、保质期规范和纠正措施。 | `codex-cxs-291-2010`; `codex-cxc-52-2003` |
| `validate_mass_balance` | each_process_and_period | 要求对鱼卵投入、配料、合格产品、不合格品、残余物、盐水、废水、污泥和库存变化形成有记录的质量平衡；放行前调查未解释损失。 | `eu-pef-2021-2279` |
| `validate_upstream_completeness` | received_roe | 若无已声明截断理由而遗漏养殖或捕捞、适用时的饲料、捕获、供应商屠宰或取卵、共产品、分配或进厂冷链负荷，则完整性不通过。 | `dudu-georgescu-2024-sturgeon`; `eu-pef-2021-2279` |
| `validate_allocation` | multifunctional_processes | 确认优先尝试细分、分配驱动因子具有因果性且有记录、上游共产品处理已披露，并可重建分配前后结果。 | `eu-pef-2021-2279` |
| `validate_data_quality` | dataset | 确认完整性、方法一致性、技术、地理、时间、精度、文档、命名和审核证据；披露所有未解决流 UUID 和 range 证据缺口。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 包装鱼子酱或单一物种特定鱼子酱代用品路线的工厂门口前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品 LCA、环境足迹研究、供应链清单、过程改进；仅当物种、质量、路线、包装、保藏、地理、分配和边界兼容时用于比较 |
| excluded_use | 动物福利、合法性、食品安全认证、生物多样性、营养优越性或产品等同性声明；无兼容性记录的跨物种或跨保藏路线替代；作为上游养殖数据集 |
| required_metadata | PCR id 和版本；产品名和科学物种名；鱼子酱或代用品状态；鱼卵来源与状态；供应商边界；配方；添加剂；保藏与巴氏杀菌状态；包装组件；净重；地理；技术；报告期；冷藏时间；分配；截断；数据源；未解决身份 |
| required_quality_disclosure | 一手数据比例；仪表和秤覆盖；质量平衡闭合；季节和产能代表性；上游鱼卵数据质量；分配敏感性；制冷剂方法；废水与废物去向；添加剂授权；不确定性和未解决证据 |
| update_trigger | 鱼类物种或来源、上游生产系统、配方、添加剂授权、包装形式、巴氏杀菌或冷藏技术、制冷剂、能源供应、废水处理、分配、供应商边界发生变化，或产率/数据质量发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21243` | official_guidance | 联合国统计司。《产品总分类》第 3.0 版，子类 21243“鱼子酱及鱼子酱代用品”。https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf（检索于 2026-08-24）。 | 分类范围和身份 |
| `codex-cxs-291-2010` | standard | 食品法典委员会。CXS 291-2010《鲟鱼鱼子酱标准》，2024 年修订。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B291-2010%252FCXS_291e.pdf（检索于 2026-08-24）。 | 鲟鱼鱼子酱定义、原料、盐、包装、保藏、温控、标签和符合性 |
| `codex-cxc-52-2003` | official_guidance | FAO 和 WHO。《鱼及渔业制品操作规范》CXC 52-2003，2020 年版，ISBN 978-92-4-001317-9。https://www.who.int/publications/i/item/9789240013179（检索于 2026-08-24）。 | 经原文核验的第 20 节过程拆分、卫生清洗、鱼卵清洗、配料处理、灌装、成熟、巴氏杀菌、冷藏和记录要求 |
| `codex-gsfa-09-3-3` | official_guidance | 食品法典委员会 GSFA 在线数据库。食品类别 09.3.3“鲑鱼代用品、鱼子酱及其他鱼卵制品”。https://www.fao.org/gsfaonline/foods/details.html?id=162（检索于 2026-08-24）。 | 代用品范围、代表物种、清洗、盐渍、配方、着色、防腐、包装和许可添加剂语境 |
| `eu-caviar-aquitaine-2024` | official_guidance | 欧盟委员会。“Caviar d’Aquitaine”注册申请公告，2024/C 6592。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52024XC06592（检索于 2026-08-24）。 | 商业生产顺序、立即初级包装，以及金属、玻璃或塑料容器路线 |
| `dudu-georgescu-2024-sturgeon` | literature | Dudu, A.; Georgescu, S.E. “Exploring the Multifaceted Potential of Endangered Sturgeon: Caviar, Meat and By-Product Benefits.” Animals 14(16), 2425 (2024). https://doi.org/10.3390/ani14162425。 | 经全文核验的鲟鱼生产语境及鱼肉、鱼头、内脏、鱼皮、骨/软骨和鱼鳔等独立共产品或副产品身份；未据此推断定量 range |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会。关于使用环境足迹方法的委员会建议（EU）2021/2279。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-24）。 | 功能单位、系统边界、公司特定数据、分配、截断披露、数据质量、校验和生命周期清单规则 |
