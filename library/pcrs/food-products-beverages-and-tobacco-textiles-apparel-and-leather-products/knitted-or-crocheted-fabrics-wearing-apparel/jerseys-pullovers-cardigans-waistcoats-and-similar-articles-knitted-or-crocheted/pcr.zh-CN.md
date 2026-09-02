---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.jerseys-pullovers-cardigans-waistcoats-and-similar-articles-knitted-or-crocheted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 针织或钩编的套头衫、开襟衫、马甲及类似品

## 1. 范围与适用性

本 PCR 用于生产针织或钩编的套头衫、开襟衫、马甲及类似上装的门到门前景数据包。声明边界始于制造场址接收外购纱线和服装组件，终于工厂门口的净成衣以及单独列清单的包装。

本 PCR 适用于横机、圆机、手工或机器钩编、成形针织、裁剪缝制以及一体成形或无缝工艺，但最终产品必须保持在本 PCR 的语义产品边界内。必须声明纤维组成、针织技术、着色路线、辅件构造、质量要求以及湿处理是在场内进行还是由供应商完成。纱线生产、纤维生产、配送、零售、消费者使用、修理、再使用和生命末期均不在本前景边界内；在生命周期模型中纳入时必须连接相应的上游或下游数据集。

本 PCR 不包括 T 恤和背心、衬衫和女衬衫、连衣裙、裤子、大衣、夹克、内衣、袜类、手套、围巾及其他服饰；不包括机织或非纺织上装、作为面料销售的针织物以及作为独立产品销售的服装部件。本 PCR 不提供比较声明、消费者使用功能单位或默认活动数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.jerseys-pullovers-cardigans-waistcoats-and-similar-articles-knitted-or-crocheted |
| classification_refs | CPC 3.0：28226 — 针织或钩编的套头衫、开襟衫、马甲及类似品 |
| covered_products | 完工的针织或钩编套头衫、开襟衫、马甲、针织背心及语义等同的上身服装 |
| excluded_products | T 恤、背心、衬衫、女衬衫、连衣裙、裤子、大衣、夹克、内衣、袜类、手套、围巾、其他服饰、机织服装、按长度或面积销售的面料以及单独销售的服装部件 |
| representative_product | 按声明的纱线物料清单制造、带有声明的闭合件和标签、在工厂门口完成整理和质检的可销售针织套头衫或开襟衫 |
| production_route | 纱线接收和批次领用；针织或钩编；条件性湿处理；缝合、裁剪缝制或一体成衣完成；整理、检验和测试；包装 |
| market_state | 工厂门口全新、干燥、可销售的成衣；净成衣质量不含可移除的配送包装，包含永久标签、闭合件和辅料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产属于本 PCR 边界的可销售针织或钩编上身服装 |
| How much | 工厂门口 1 kg 净质量完工服装 |
| How well | 符合声明的纤维组成、产品子类、针织结构、尺码范围、做工、护理说明以及声明的起球和尺寸稳定性要求 |
| How long or cycle | 一个完整制造批次；本门到门前景数据包不声明消费者使用寿命或穿着次数 |
| reference_flow_link | `p_packaging` 输出的 1 kg 净成衣，不含可移除的配送包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 针织或钩编的运动衫、套衫、开襟绒线衫、马甲及其他类似物品 `eccda6b6-0639-4a61-8af1-4bea892ac61c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；按质量计的纤维组成；适用时的再生含量声明及证据；纱支或线密度；针织或钩编技术；机器针距或声明的手工钩编规格；着色路线；尺码范围；净成衣质量；永久辅件组成；湿处理地点；国家和场址；生产期间；护理说明；起球测试方法和结果；尺寸变化测试方法和结果 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整理后、加入可移除配送包装前，使用经校准的批次或单件称量确定净质量；包含永久标签、闭合件和辅料。 |
| `item_to_mass_conversion` | 以服装件数报告的生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一生产期间、产品和尺码特定的实测平均净成衣质量将件数换算为质量；保留件数、样本量、称量记录和换算公式。 |
| `moisture_state_consistency` | 纱线、工件、废物和参考成衣 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录质量是接收态、调湿态还是烘干态；未使用实测含水率或回潮率进行文件化换算时，不得在质量平衡中混用不同含湿状态。 |
| `utility_unit_preservation` | 电力、蒸汽、热水、天然气和柴油 | 声明的能量、质量或体积属性 | 原始来源单位和换算后的 SI 单位 | 保留原始仪表或发票单位、换算因子、适用时的热值基准以及换算量；不得把不同公用工程载体合并成一个交换。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造数据包 | 纳入纱线领用、针织或钩编、适用的湿处理、服装组装、整理、检验、质量测试和包装，直至工厂门口。 | `ec-pef-method-2021-2279`; `wiedemann-wool-garment-2020` |
| `boundary_complete_inventory` | 每个纳入过程 | 将所有已知产品投入、公用工程、废物和直接基本流排放记录为独立原子交换；通过数据缺口披露，而不是隐藏在合并行中。 | `ec-pef-method-2021-2279`; `eu-textiles-bat-2022-2508` |
| `boundary_wet_processing` | 场内或受控湿处理 | 在声明的前景边界内进行洗涤、煮练、漂白、染色或整理时，纳入水、每种能源载体、每种外购化学品配方、废水、污泥以及监测到的直接空气或水排放。 | `eu-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_outsourced_operations` | 外包针织、湿处理、组装、整理或包装 | 保持外购中间产品可见，并连接一个供应商或工艺特定的上游数据集；不得把外包操作表示为零负荷。 | `ec-pef-method-2021-2279` |
| `boundary_exclusions` | 配送及后续生命周期阶段 | 本前景数据包不含配送、零售、消费者洗涤和烘干、修理、再使用、回收和处置；披露排除项，并仅在另行声明目标和范围的生命周期模型中加入下游数据集。 | `ec-apparel-footwear-pefcr-2025`; `iso-14040-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购纱线、永久组件和助剂在服装制造场址接收，并声明供应商身份、组成、数量、含湿状态和来源 |
| starting_condition_role | 门到门前景起点；纤维、聚合物、纺纱及上游着色负荷保留在相连接的上游数据集中 |
| product_classification_scope | 完工参考产品必须符合 CPC 3.0 子类 28226 以及第 2 节的语义纳入和排除条件 |
| recursive_input_rule | 语义上属于同一类别的外购半成品或成衣仍作为可见产品投入，记录质量和供应商身份；连接其上游数据集，不在本前景包中递归重建其制造过程 |
| upstream_dataset_requirement | 每种外购纱线、组件、化学品、包装项、公用工程和外包操作都需要地理、时间和技术代表性相符的上游数据集，或明确披露的数据缺口 |
| disclosure | 声明设施和国家、报告期、产品子类、纤维组成、再生含量、针织路线、湿处理路线和地点、净成衣质量、分配方法、包装边界、排除阶段、数据缺口和代理数据集 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_knitting` | 针织或钩编 | required | 本 PCR 产品始终纳入 | 由纱线形成服装工件的前景过程 | kg 合格针织工件 |
| `p_wet_processing` | 湿处理和干燥 | conditional | 前景边界内发生洗涤、煮练、漂白、染色、柔软、漂洗、脱水或受控干燥时纳入 | 前景湿处理和热干燥 | kg 湿处理后针织工件 |
| `p_assembly` | 缝合、裁剪、缝制和组件组装 | required | 始终纳入；一体或无缝路线可没有裁剪并减少缝合或缝制，但必须记录 | 前景成衣组装 | kg 已组装服装 |
| `p_finishing_quality` | 整理、检验和质量测试 | required | 始终纳入；蒸汽、热水、点污清洁剂和制冷剂行仅在使用时适用 | 前景最终调湿和验收 | kg 合格净成衣 |
| `p_packaging` | 包装和工厂门口放行 | required | 始终纳入；每个包装组件仅在使用时适用 | 前景包装和参考产品放行 | 1 kg 净成衣，包装单独列清单 |

### 过程：针织或钩编（`p_knitting`）

#### 输入

##### 产品流

###### 棉纱投入（`yarn_cotton`）

声明物料清单中含棉纱时，记录发给该批次的棉纱。

- 选定流：Cotton yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：前景批次领用量减去经核实的未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-pef-method-2021-2279`

###### 羊毛纱投入（`yarn_wool`）

声明物料清单中含羊毛纱时，记录发给该批次的羊毛纱。

- 选定流：Wool yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：前景批次领用量减去经核实的未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`wiedemann-wool-garment-2020`

###### 聚酯长丝纱投入（`yarn_polyester`）

声明物料清单中含聚酯长丝纱时，记录发给该批次的聚酯长丝纱。

- 选定流：Polyester filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：前景批次领用量减去经核实的未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-apparel-footwear-pefcr-2025`

###### 聚丙烯腈短纤纱投入（`yarn_acrylic`）

声明物料清单中含腈纶短纤纱时，记录发给该批次的纱线。

- 选定流：Polyacrylonitrile staple yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：前景批次领用量减去经核实的未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-apparel-footwear-pefcr-2025`

###### 粘胶人造丝纱投入（`yarn_viscose`）

声明物料清单中含粘胶人造丝纱时，记录发给该批次的纱线。

- 选定流：Viscose rayon yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：前景批次领用量减去经核实的未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`eu-textiles-bref-2023`

###### 氨纶纱投入（`yarn_elastane`）

声明物料清单中含氨纶纱时，记录发给该批次的氨纶纱。

- 选定流：Elastane yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：前景批次领用量减去经核实的未开封退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-apparel-footwear-pefcr-2025`

###### 白矿物针织机油（`knitting_oil`）

记录该批次消耗的一种已声明针织机油产品；其他配方必须拆为独立原子行。

- 选定流：White mineral knitting-machine oil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于该批次的前景库存领用量或计量补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格针织工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-pef-method-2021-2279`

###### 针织用电（`knitting_electricity`）

记录针织或钩编设备及可直接归属的辅助设备用电。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：分表电量；否则采用有文件依据的机器时间和额定负荷计算分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格针织工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-pef-method-2021-2279`; `wiedemann-waste-wool-sweater-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格针织服装工件（`knitted_workpiece`）

将声明批次中合格的衣片、成形部件、钩编部件或一体成形衣坯作为一个内部产品交换计量。

- 选定流：Knitted garment workpiece
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转入下一过程的合格工件校准批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每针织批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`wiedemann-wool-garment-2020`; `bartl-alpaca-sweater-2023`

##### 废物流

###### 废纱（`yarn_scrap`）

记录作为一个废物交换离开过程的纱头、清扫料和不可回收的筒管余纱。

- 选定流：Waste yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：扣除可再用退纱后的批次称量废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格针织工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-pef-method-2021-2279`

###### 不合格针织工件（`knitted_reject`）

记录针织检验后不在批次内返工的不合格工件。

- 选定流：Rejected knitted garment workpiece
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按文件化去向称量的不合格工件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格针织工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_batch`
- 来源：`ec-pef-method-2021-2279`

##### 基本流

### 过程：湿处理和干燥（`p_wet_processing`）

#### 输入

##### 产品流

###### 进入湿处理的针织工件（`wet_workpiece_input`）

记录进入声明湿处理批次的干燥或接收态针织工件。

- 选定流：Knitted garment workpiece
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录含湿状态的校准批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每湿处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bref-2023`

###### 湿处理用水（`wet_water`）

记录跨越湿处理边界的过程水。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的批次用水，包括补充水和漂洗水，扣除单独计量的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 湿处理用电（`wet_electricity`）

记录湿处理和可直接归属的干燥设备用电。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：批次分表电量或有文件依据的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 外购蒸汽（`wet_steam`）

外购蒸汽跨越过程边界时单独记录，不得与热水或燃料合并。

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg 或 Energy / MJ，与仪表或发票一致
- 数量规则：可归属于湿处理批次的计量或发票蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 外购热水（`wet_hot_water`）

外购热水跨越过程边界时单独记录，并保留供水和回水温度。

- 选定流：外购热水
- 流属性/单位：Mass / kg，计量时同时保留 Thermal energy / MJ
- 数量规则：可归属于湿处理批次的计量热水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 场内过程热天然气（`wet_natural_gas`）

场内燃烧天然气为湿处理批次供热时单独记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ 或 Volume / m3，并保留热值换算
- 数量规则：可归属于该批次的计量或发票天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 场内过程热或备用发电柴油（`wet_diesel`）

湿处理批次消耗柴油用于过程热或备用电力时单独记录。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg 或 Volume / L，并保留密度和热值换算
- 数量规则：可归属于该批次的油罐领用或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 氯化钠（`wet_sodium_chloride`）

配方使用氯化钠时记录批次消耗量。

- 选定流：氯化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：配方领用量与库存领用和退回记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 碳酸钠（`wet_sodium_carbonate`）

配方使用碳酸钠时记录批次消耗量。

- 选定流：碳酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：配方领用量与库存领用和退回记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 过氧化氢（`wet_hydrogen_peroxide`）

进行漂白时记录批次消耗的过氧化氢配方产品。

- 选定流：过氧化氢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由批次配方和领用记录获得配方产品质量，并保留有效浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bref-2023`

###### 乙酸（`wet_acetic_acid`）

用于 pH 控制或中和时记录批次消耗的乙酸配方产品。

- 选定流：乙酸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由批次配方和领用记录获得配方产品质量，并保留有效浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bref-2023`

###### 非离子纺织洗涤剂配方（`wet_detergent`）

本卡表示由商品名和 SDS 识别的一种供应商配方；其他配方必须拆为独立原子行。

- 选定流：Nonionic textile detergent formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次领用记录中的配方产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bref-2023`

###### 声明的纺织染料配方（`wet_dyestuff`）

本卡严格表示由商品名、可用时的染料索引号和 SDS 识别的一种供应商染料配方；其他配方必须拆为独立原子行。

- 选定流：Declared textile dyestuff formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次配方和领用记录中的配方产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿处理后针织工件（`wet_workpiece_output`）

按声明的含湿状态记录湿处理和干燥后的合格工件。

- 选定流：Wet-processed knitted garment workpiece
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转入组装的校准批次输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每湿处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bref-2023`

##### 废物流

###### 纺织过程废水（`wet_wastewater`）

在任何假定处理收益之前，记录转入场内或外部处理的废水。

- 选定流：Textile process wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量或质量平衡的废水体积，采用实测或有依据的密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 纺织废水处理污泥（`wet_sludge`）

记录可归属于该批次的脱水污泥，并保留干物质含量和去向。

- 选定流：Textile wastewater-treatment sludge
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于该批次的称量湿污泥，并单独报告干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_batch`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

###### 化石二氧化碳排放至空气（`wet_co2`）

记录服务于该批次的场内天然气或柴油燃烧产生的直接化石二氧化碳。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由前景燃料记录和披露的燃料特定因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_emissions`
- 来源：`eu-textiles-bat-2022-2508`; `ec-pef-method-2021-2279`

###### 氮氧化物排放至空气（`wet_nox`）

记录服务于该批次的场内燃烧直接氮氧化物排放。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由前景燃料记录和披露的燃料特定因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_emissions`
- 来源：`eu-textiles-bat-2022-2508`

###### 二氧化硫排放至空气（`wet_so2`）

记录该批次使用含硫燃料产生的直接二氧化硫排放。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由前景燃料记录和披露的燃料硫计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_emissions`
- 来源：`eu-textiles-bat-2022-2508`

###### 小于 2.5 微米颗粒物排放至空气（`wet_pm25`）

在测量或计算时，记录场内燃烧或干燥产生的直接 PM2.5 排放。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由前景活动记录和披露的源特定因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_emissions`
- 来源：`eu-textiles-bat-2022-2508`

###### 非甲烷挥发性有机化合物排放至空气（`wet_nmvoc`）

在监测或按产品特定组成计算时，记录干燥或整理配方产生的直接 NMVOC 排放。

- 选定流：非甲烷挥发性有机物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由前景配方记录和披露的因子进行产品特定质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理后工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_emissions`
- 来源：`eu-textiles-bat-2022-2508`

### 过程：缝合、裁剪、缝制和组件组装（`p_assembly`）

#### 输入

##### 产品流

###### 组装用针织服装工件（`assembly_workpiece`）

记录进入组装的针织工件，无论直接来自针织还是来自湿处理。

- 选定流：Knitted garment workpiece
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按组装批次校准的投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每组装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`wiedemann-wool-garment-2020`

###### 聚酯缝纫线（`assembly_polyester_thread`）

使用聚酯缝纫线进行缝合、缝边或附着组件时记录其消耗。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次领用量减去经核实的可再用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`ec-pef-method-2021-2279`

###### 金属拉链（`assembly_zipper`）

开襟衫或类似服装带金属拉链时记录所附拉链。

- 选定流：Metal zipper
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用件数乘以声明款式和尺码的实测拉链质量，并用批次质量核验
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`ec-apparel-footwear-pefcr-2025`

###### 聚酯纽扣（`assembly_button`）

服装带聚酯纽扣时记录；其他纽扣材料必须拆为独立原子行。

- 选定流：Polyester button
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用件数乘以声明组件的实测纽扣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`ec-apparel-footwear-pefcr-2025`

###### 机织聚酯护理标签（`assembly_care_label`）

记录附着在每件服装上的永久机织护理标签。

- 选定流：Woven polyester care label
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：附着件数乘以实测标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`iso-6330-2021`

###### 组装用电（`assembly_electricity`）

记录缝合、裁剪、缝制、组装压烫以及可直接归属的辅助设备用电。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：批次分表电量或有文件依据的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`wiedemann-waste-wool-sweater-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已组装针织服装（`assembled_garment`）

记录完成组装并转入最终整理和质量控制的服装。

- 选定流：Assembled knitted garment
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按组装批次校准的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每组装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`wiedemann-wool-garment-2020`

##### 废物流

###### 针织物裁片废料（`assembly_offcuts`）

裁剪缝制路线单独记录裁片废料；成形或一体路线只有经核实时才能记录为零。

- 选定流：Knitted textile offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按批次称量裁片废料并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`wiedemann-wool-garment-2020`

###### 废聚酯缝纫线（`assembly_thread_scrap`）

线头和不可回收缝纫线废料必须与布料裁片分开记录。

- 选定流：Waste polyester sewing thread
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按批次称量线废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`ec-pef-method-2021-2279`

###### 不合格服装组件（`assembly_reject`）

记录不在批次内返工的已组装不合格组件并保留去向。

- 选定流：Rejected garment component
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按批次称量不合格组件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_batch`
- 来源：`ec-pef-method-2021-2279`

##### 基本流

### 过程：整理、检验和质量测试（`p_finishing_quality`）

#### 输入

##### 产品流

###### 整理用已组装服装（`finish_assembled_garment`）

记录进入最终调湿、检验和质量测试的已组装服装。

- 选定流：Assembled knitted garment
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按整理批次校准的投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`wiedemann-wool-garment-2020`

###### 整理用电（`finish_electricity`）

记录压烫、检验、测试、调湿以及可直接归属的空间调节用电。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：批次分表电量，或有文件依据的设备时间和调节面积分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`ec-pef-method-2021-2279`

###### 整理用蒸汽（`finish_steam`）

用于压烫或调湿的外购蒸汽必须与热水分开记录。

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg 或 Energy / MJ，与仪表或发票一致
- 数量规则：可归属于整理批次的计量或发票蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`eu-textiles-bref-2023`

###### 整理用热水（`finish_hot_water`）

调湿或点污处理使用的外购热水必须与蒸汽分开记录。

- 选定流：外购热水
- 流属性/单位：Mass / kg，计量时同时保留 Thermal energy / MJ
- 数量规则：可归属于整理批次的计量热水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`eu-textiles-bref-2023`

###### 点污清洁剂配方（`finish_spot_cleaner`）

本卡表示由商品名和 SDS 识别的一种供应商点污清洁配方。

- 选定流：Nonionic garment spot-cleaning detergent formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于整理批次的前景产品领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`eu-textiles-bref-2023`

###### R-410A 制冷剂补充（`finish_refrigerant_r410a`）

服务于整理区域的设备发生可归属泄漏或补充时记录 R-410A 充注量。

- 选定流：Refrigerant R-410A
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按报告期和整理区域分配的维修记录补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`ec-pef-method-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前合格成衣（`finished_garment`）

记录在加入可移除包装前通过声明的做工和质量检查的干燥、可销售服装。

- 选定流：Finished knitted garment before packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：声明调湿状态下合格服装的校准净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`iso-6330-2021`; `iso-5077-2007`; `iso-12945-2-2020`

##### 废物流

###### 不合格完工针织服装（`finish_reject`）

记录未在批次内返工、未通过检验或测试的完工服装。

- 选定流：Rejected finished knitted garment
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按失效模式和去向称量的不合格服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`iso-5077-2007`; `iso-12945-2-2020`

###### 成衣整理废水（`finish_wastewater`）

点污处理或最终洗涤废水必须与湿处理废水分开记录。

- 选定流：Garment finishing wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于整理过程的计量或质量平衡废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

###### R-410A 制冷剂排放至空气（`finish_r410a_air`）

将服务于整理区域的设备 R-410A 泄漏记录为基本流排放，并与制冷剂补充投入分开。

- 选定流：Refrigerant R-410A to air
- 流属性/单位：Mass / kg
- 数量规则：报告期维修记录的实测泄漏或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`ec-pef-method-2021-2279`

### 过程：包装和工厂门口放行（`p_packaging`）

#### 输入

##### 产品流

###### 进入包装的成衣（`pack_finished_garment`）

记录转入包装的合格净成衣。

- 选定流：Finished knitted garment before packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：校准的转入净成衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

###### 低密度聚乙烯服装袋（`pack_ldpe_bag`）

记录包装批次使用的单件或多件 LDPE 袋。

- 选定流：低密度聚乙烯服装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用件数乘以实测袋质量，并与剩余库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

###### 瓦楞纸板运输箱（`pack_carton`）

记录用于发运该批次的瓦楞纸板箱。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用件数乘以实测纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

###### 纸吊牌（`pack_hangtag`）

记录包装期间附着的可移除纸吊牌。

- 选定流：Paper hangtag
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：附着件数乘以实测吊牌质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

###### 聚丙烯捆扎带（`pack_pp_strap`）

记录用于纸箱或托盘集装的聚丙烯捆扎带。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测领用长度乘以实测线质量，或直接称量消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

###### 木托盘（`pack_wood_pallet`）

木托盘未作为可重复使用资本包装建模时，记录本批次消耗或归属的托盘。

- 选定流：木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：托盘件数乘以实测质量；适用时按有记录的重复使用次数分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

###### 包装用电（`pack_electricity`）

记录折叠、装袋、封口、贴标和集装设备用电。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：分表电量或有文件依据的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`ec-pef-method-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考完工服装（`reference_garment`）

这是经核实的参考产品流。数量为净成衣质量；可移除包装仅在独立包装投入行中报告。

- 选定流：针织或钩编的运动衫、套衫、开襟绒线衫、马甲及其他类似物品 `eccda6b6-0639-4a61-8af1-4bea892ac61c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：工厂门口 1 kg 校准净成衣输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-28226`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可分离产品、批次和过程 | 首先通过独立批次记录、分表、设备时间记录和质量平衡避免分配。 | `ec-pef-method-2021-2279` |
| `allocation_shared_manufacturing` | 共用针织、湿处理、组装、整理和包装资源 | 无法细分时采用最接近的实测物理驱动：设备用电按机器时间，蒸汽和热水按计量质量或能量，化学品和水按配方和批次质量，共用 HVAC 按调节面积和时间。记录驱动因子和计算。 | `ec-pef-method-2021-2279`; `eu-textiles-bat-2022-2508` |
| `allocation_rework` | 批次内返工 | 将所有返工投入、公用工程和损失保留在生产批次内；不得把返工件作为共产品或第二参考输出。 | `ec-pef-method-2021-2279` |
| `allocation_scrap` | 废纱、纺织裁片、不合格品和污泥 | 将离开前景边界的每种物料按各自废物流报告质量、组成和去向。本前景包内不采用避免负荷收益；下游回收或资源化按生命周期模型声明的分配方法处理。 | `ec-apparel-footwear-pefcr-2025`; `wiedemann-recycled-wool-sweater-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_knitting_batch` | `p_knitting` | 纱线、机油、电力、合格工件和针织废物 | 批次领用、仪表、生产和废物记录 | batch_id；款式；尺码组合；纱线 SKU；纤维组成；领用质量；退回质量；机油领用；仪表起止值；机器时间；合格质量；废纱质量；不合格质量；含湿状态 | 校准秤、库存台账、分表或有文件依据的设备时间分配以及批次核对 | kg；kWh；h | 每批次 | 有代表性的生产期间，通常至少连续 12 个月；较短生产活动则覆盖所有批次 | 生产声明产品的全部针织或钩编生产线 | 按原子流求和，并通过批次谱系除以相连接的合格净成衣质量 | 校准证书；纱线发票；批次单；仪表记录；废物单据；核对签字 |
| `cp_wet_batch` | `p_wet_processing` | 水、公用工程、每种化学品、工件、废水和污泥 | 批次配方、库存领用、仪表、实验室和处理记录 | batch_id；投入/输出质量和含湿状态；水表；电力；蒸汽；热水；天然气；柴油；化学品商品名；SDS；有效浓度；领用质量；废水体积；污泥湿质量；污泥干物质 | 批次级仪表和配方/库存核对；保留原始单位和换算因子 | kg；m3；kWh；MJ；L | 每湿处理批次 | 覆盖季节和配方变化的代表性生产期间 | 所有受控湿处理和处理单元 | 按批次汇总每个原子交换；归一到合格湿处理工件，再归一到参考成衣质量 | 仪表校准；配方批准；SDS；库存台账；实验室结果；废水和污泥记录 |
| `cp_wet_emissions` | `p_wet_processing` | 直接燃烧和干燥排放 | 烟道测量、许可报告或活动量-因子计算 | source_id；批次关联；燃料量；燃料组成；因子来源；监测期；污染物质量；减排状态 | 优先直接测量；否则用前景活动量和披露的源特定因子计算 | kg 污染物 | 每次监测和每报告期 | 与前景生产相同期间 | 服务于纳入过程的全部场内排放源 | 按实测燃料或热需求归属；每种污染物分别汇总 | 监测报告；仪器 QA；燃料证书；因子引用；计算工作簿 |
| `cp_assembly_batch` | `p_assembly` | 工件、缝纫线、闭合件、标签、电力、合格服装和废物 | 批次领用、计数、称量、仪表和不合格记录 | batch_id；工件质量；组件 SKU/件数/单件质量；电力；合格质量；裁片质量；线废料质量；不合格质量；去向 | 校准秤、组件领用核对、分表或设备时间分配 | kg；件；kWh | 每组装批次 | 有代表性的生产期间 | 全部缝合、裁剪和缝制生产线 | 汇总每个原子交换并归一到合格已组装服装质量 | 秤和仪表校准；组件发票；批次单；废物和不合格记录 |
| `cp_finishing_batch` | `p_finishing_quality` | 电力、蒸汽、热水、清洁配方、制冷剂、合格和不合格服装、废水 | 整理批次、仪表、质量、维修和废物记录 | batch_id；投入/输出质量；电力；蒸汽；热水；清洁剂商品名和质量；制冷剂充注和补充；不合格质量和失效模式；废水；起球和尺寸变化方法/结果 | 校准仪表和秤、化学品领用、设备维修日志和受控实验室测试 | kg；kWh；MJ；测试结果 | 每批次；制冷剂按每次维修事件 | 有代表性的生产期间 | 服务于产品的全部整理、检验、调湿和测试区域 | 按原子交换求和；仅在无分表时按面积和时间分配共用调节负荷 | 校准；维修日志；测试报告；方法版本；检验员签字；废水记录 |
| `cp_packaging_batch` | `p_packaging` | 净成衣、每个包装组件、包装用电和参考输出 | 包装领用、计数、称量、仪表和发运记录 | batch_id；服装件数和净质量；包装 SKU；组件件数；单件质量；托盘重复使用次数；电力；发运数量 | 校准秤、组件领用核对和分表或设备时间分配 | kg；件；kWh | 每包装批次 | 有代表性的生产期间 | 服务于产品的全部包装线和发运区域 | 每种包装材料按每 kg 净成衣单独报告；参考输出不含包装质量 | 秤校准；包装规格；采购和领用记录；发运记录；托盘重复使用日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 汇总加入可移除包装前合格服装的校准净质量；包含永久标签、闭合件和辅料。 | 合格单件质量或批次质量；皮重；调湿状态 | kg 净成衣 | `ec-pef-method-2021-2279` |
| `calc_item_mass` | 按件记录的组件或服装 | 件数乘以同一 SKU、款式和尺码的实测平均单件质量；保留样本数和变异。 | 件数；实测单件质量 | kg 组件或服装 | `ec-pef-method-2021-2279` |
| `calc_batch_normalization` | 所有清单行 | 原子批次交换量除以相连接的合格净成衣质量；保留未归一化批次记录。 | 原子交换量；批次谱系；合格净成衣质量 | 每 1 kg 参考产品的交换量 | `ec-pef-method-2021-2279` |
| `calc_mass_balance` | 针织、湿处理、组装和整理 | 核对投入质量与合格输出、退回物料、在制品、实测废物、已量化的废水携带物和库存变化；调查无法解释的损失，不得静默分配。 | 投入/输出/废物/退回/库存变化质量及含湿状态 | 过程质量平衡差异 | `eu-textiles-bat-2022-2508`; `ec-pef-method-2021-2279` |
| `calc_shared_resource` | 共用仪表 | 只有记录无法细分的理由后才按第 7 节规定的物理驱动分配。 | 共用仪表量；机器时间、批次质量、热需求或面积-时间驱动 | 已分配的原子公用工程量 | `ec-pef-method-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和所有批次关联 | 匹配 CPC 28226 语义范围，并声明产品子类、纤维组成、技术、着色路线、尺码范围和永久组件。 | 产品规格、物料清单、款式单、批次谱系和参考流身份 |
| `dq_company_specific` | 前景制造 | 对产品物料清单和受控制造过程使用公司特定数据；纳入所有已知投入和输出。 | 批次记录、发票、仪表、库存变化、废物记录和直接排放记录；`ec-pef-method-2021-2279` |
| `dq_temporal` | 所有前景行 | 使用一致的报告期，并披露缺口、停机、异常批次以及季节性配方或 HVAC 变化。 | 生产日历、仪表覆盖和批次总体摘要 |
| `dq_measurement` | 实测质量和公用工程 | 识别仪器、校准状态、原始单位、换算因子、抽样方法和不确定性或数据限制。 | 校准证书、仪表导出、称量表和换算工作簿 |
| `dq_chemical_identity` | 每个化学品行 | 每行识别一种供应商配方，并保留商品名、供应商、SDS 修订版、适用时的有效浓度和领用的配方产品质量。 | SDS、采购规格、配方和库存领用记录；`eu-textiles-bat-2022-2508` |
| `dq_performance` | 声明质量水平 | 保留所选洗涤/干燥程序、尺寸变化方法和起球方法及验收准则和结果；不得仅凭纤维类型推断耐用性。 | ISO 6330:2021 程序记录、ISO 5077:2007 结果和 ISO 12945-2:2020 结果或有依据的等效方法 |
| `dq_completeness` | 清单和排除项 | 明确报告缺失 UUID、缺失活动数据、代理数据集、外包阶段、排除的生命周期阶段和未解决的质量平衡差异。 | 数据缺口登记、供应商数据集登记、验证报告和 manifest 审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认产品流 UUID、Product flow 类型、精确产品名称、CPC 路径 2 > 28 > 282 > 2822 > 28226、Mass 属性 UUID、Units of mass UUID 和 kg 参考单位。 | `unsd-cpc-3-28226` |
| `validate_reference_mass` | 参考数量 | 参考输出等于 1 kg 校准净成衣质量，不含可移除的配送包装。 | `ec-pef-method-2021-2279` |
| `validate_required_qualifiers` | 数据集元数据 | 第 3 节每项必需限定信息均存在，并与物料清单、过程路线和质量记录一致。 | `ec-apparel-footwear-pefcr-2025`; `iso-6330-2021`; `iso-5077-2007`; `iso-12945-2-2020` |
| `validate_atomic_inventory` | 所有过程清单行 | 每行只表示一个产品、废物或基本流交换；拒绝合并公用工程、合并化学品、合并包装、合并废物和选择器标签。 | `ec-pef-method-2021-2279` |
| `validate_foreground_evidence` | 每个数量 | 每个数量连接一个采集协议和真实前景记录或已披露计算；没有可靠数量时保持为未解决前景要求，不得创建 AI 范围。 | `ec-pef-method-2021-2279` |
| `validate_wet_processing` | 条件性湿处理过程 | 发生湿处理时，核验水、电力、每种热载体或燃料、每种化学品配方、废水、污泥及适用直接排放的独立记录；不发生时核验上游供应商数据集和排除声明。 | `eu-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_mass_balance` | 针织、湿处理、组装和整理 | 协调含湿状态后调查并披露质量平衡差异；不得通过创建未测量废物或排放来闭合差异。 | `eu-textiles-bat-2022-2508`; `ec-pef-method-2021-2279` |
| `validate_allocation` | 共用过程和返工 | 确认首先尝试细分，所有剩余分配使用声明的物理驱动；返工留在原批次，废物不获得前景避免负荷收益。 | `ec-pef-method-2021-2279`; `wiedemann-recycled-wool-sweater-2022` |
| `validate_uuid_status` | 带 UUID 和未解决行 | 仅接受经精确混合检索和 state-100 直读双重确认的 UUID；其他候选流 UUID 均保持空白，并按 `row_id` 记录在 manifest 审查元数据中。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定的门到门前景制造数据集 |
| downstream_use | `secondary_dataset`；经独立审查且与使用者的地理、技术、时间和产品规格匹配时可作 `background_dataset` |
| allowed_use | 服装生产前景数据包；供应商特定制造清单；明确连接上游纱线以及下游配送、使用和生命末期阶段的生命周期模型 |
| excluded_use | 没有完整兼容生命周期模型的直接比较或环境声明；替代 T 恤、机织服装或其他排除产品；用作平均纱线生产或消费者使用数据集 |
| required_metadata | PCR id 和版本；产品子类；CPC 引用；核实的参考流身份；物料清单；纤维和再生含量证据；技术和针距；着色和湿处理路线；设施和国家；报告期；净质量方法；分配；包装；测试方法和结果；来源及 UUID 缺口 |
| required_quality_disclosure | 公司特定数据覆盖；仪表和秤校准；批次总体和代表性；供应商数据集覆盖；代理数据集；质量平衡差异；废物去向；化学品 SDS 覆盖；直接排放方法；未解决 UUID 和数量 |
| update_trigger | 产品规格、纤维或辅件组成、针织技术、湿处理配方或场址、能源系统、分配驱动、包装系统、参考流身份、适用法规或 BAT、质量方法发生变化，或出现重大数据质量审查发现 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-28226` | official_guidance | 联合国统计司，Central Product Classification Version 3.0 及子类 28226 结构，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-13） | 产品范围、分类层级和参考流身份校验 |
| `ec-apparel-footwear-pefcr-2025` | official_guidance | Apparel and Footwear 技术秘书处，Product Environmental Footprint Category Rules for Apparel and Footwear，version 3.1，2025-04-29，https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/；欧委会认可页面 https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en（检索日期 2026-08-13） | 服装生命周期框架、材料中立产品限定、物料清单和质量披露 |
| `ec-pef-method-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279R(01)（检索日期 2026-08-13） | 公司特定清单、完整投入输出、边界、分配、数据质量和验证 |
| `eu-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023-01，https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry（检索日期 2026-08-13） | 湿处理分解、纤维覆盖、预处理、染色和整理纳入 |
| `eu-textiles-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，https://eur-lex.europa.eu/eli/dec_impl/2022/2508（检索日期 2026-08-13） | 投入输出清单、水和能源监测、化学品记录、废水、排放和过程控制 |
| `iso-14040-2006` | standard | ISO 14040:2006，Environmental management — Life cycle assessment — Principles and framework，https://www.iso.org/standard/37456.html（检索日期 2026-08-13） | 目标与范围、清单和生命周期模型分离 |
| `iso-6330-2021` | standard | ISO 6330:2021，Textiles — Domestic washing and drying procedures for textile testing，https://www.iso.org/standard/75934.html（检索日期 2026-08-13） | 性能测试所声明的洗涤和干燥程序 |
| `iso-5077-2007` | standard | ISO 5077:2007，Textiles — Determination of dimensional change in washing and drying，https://www.iso.org/standard/41877.html（检索日期 2026-08-13） | 尺寸稳定性测试披露 |
| `iso-12945-2-2020` | standard | ISO 12945-2:2020，Textiles — Determination of fabric propensity to surface pilling, fuzzing or matting — Part 2: Modified Martindale method，https://www.iso.org/standard/75375.html（检索日期 2026-08-13） | 起球性能测试披露 |
| `wiedemann-wool-garment-2020` | literature | Wiedemann et al.，Environmental impacts associated with the production, use, and end-of-life of a woollen garment，International Journal of Life Cycle Assessment 25 (2020)，https://doi.org/10.1007/s11367-020-01766-0 | 毛衫过程分解，包括纺纱、染色、针织、整理和成衣制作 |
| `wiedemann-waste-wool-sweater-2021` | literature | Environmental and social performance of valorizing waste wool for sweater production，Sustainable Production and Consumption 25 (2021)，https://doi.org/10.1016/j.spc.2020.11.023 | 前景加工和成衣组装能源相关性 |
| `wiedemann-recycled-wool-sweater-2022` | literature | Wiedemann et al.，Reducing the Environmental Impacts of Garments through Industrially Scalable Closed-Loop Recycling，Sustainability 14 (2022) 1081，https://doi.org/10.3390/su14031081 | 分离的回收、针织、整理、成衣制作阶段及废料去向 |
| `bartl-alpaca-sweater-2023` | literature | Bartl et al.，Cradle-to-grave environmental analysis of an alpaca fiber sweater produced in Peru，Science of the Total Environment 905 (2023) 167023，https://doi.org/10.1016/j.scitotenv.2023.167023 | 通过访谈和问卷采集纺纱、染色、针织和成衣生产阶段的一手数据 |
