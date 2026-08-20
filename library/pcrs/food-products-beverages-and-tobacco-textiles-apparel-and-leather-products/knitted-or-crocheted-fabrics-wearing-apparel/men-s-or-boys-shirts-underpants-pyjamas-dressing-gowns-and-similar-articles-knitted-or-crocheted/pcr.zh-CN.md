---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-underpants-pyjamas-dressing-gowns-and-similar-articles-knitted-or-crocheted
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 针织或钩编的男式或男童衬衫、内裤、睡衣、晨衣及类似服装

## 1. 范围与适用性

本 PCR 用于生产针织或钩编的男式或男童衬衫、内裤、睡衣、晨衣以及具有相同 CPC 28222 功能和构造的可销售服装前景数据包。产品规格须声明服装子类型、针织或钩编构造、纤维组成、尺码基准、净质量、颜色、整理状态和制造路线。

前景边界始于交付至服装制造的针织或钩编织物及逐项识别的组件，包括裁剪、缝制与组装、条件性成衣湿整理、最终检验、包装，以及这些工序产生的废物和废水。纤维、纱线、织物生产、织物阶段湿处理、外购公用工程、包装生产和场外处理属于相连的上游过程，除非这些过程由已声明前景系统运营。

机织服装、CPC 28222 以外的 T 恤和汗衫、毛衣、袜类、婴儿服装、运动服、泳装、皮革或毛皮服装、分销、零售、消费者护理和生命末期不属于此前景数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-underpants-pyjamas-dressing-gowns-and-similar-articles-knitted-or-crocheted |
| classification_refs | CPC 3.0：28222，精确分类语境 |
| covered_products | 针织或钩编的男式或男童衬衫、内裤、睡衣、晨衣及类似服装 |
| excluded_products | 机织服装；T 恤和汗衫；西服、外套、夹克、长裤和短裤；毛衣；袜类；婴儿服装；运动服和泳装；毛皮、皮革、纯塑料或非纺织服装 |
| representative_product | 已声明子类型、纤维组成、针织或钩编构造、尺码、净质量、颜色、整理状态和闭合件配置的可销售 CPC 28222 服装 |
| production_route | 交付织物和组件 -> 裁剪 -> 缝制与组装 -> 条件性成衣湿整理 -> 检验与包装 |
| market_state | 制造工厂大门处的可销售成衣；参考产品质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 合格可销售的针织或钩编男式或男童衬衫、内裤、睡衣、晨衣或类似 CPC 28222 服装 |
| How much | 1 kg 成衣净质量，不含包装 |
| How well | 符合已声明产品及验收规格，包括组成、构造、尺码、颜色、整理、闭合件和含湿状态 |
| How long or cycle | 一个已声明生产批次或报告期；服装寿命和护理循环属于下游情景限定信息 |
| reference_flow_link | 前景清单的工厂大门质量参考；按件或按使用结果须另有实测单件质量以及有记录的使用与寿命假设 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成衣净质量 |
| 参考产品流 | 针织或钩编的男衬衫、男童衬衫、衬裤、睡衣裤、晨衣及类似物品 `833dd94b-bf2a-4273-99a9-e6bb3c59dedc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装子类型；预期穿着者类别；按质量计的纤维组成；针织或钩编构造；尺码或按产量加权的尺码组合；实测单件净质量；颜色；整理路线；闭合件和弹性组件；含湿状态；制造场址和地理；报告期；纳入及外包工序；包装排除 |

构建前景数据包时，`必需限定信息` 中列出的信息须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿后、包装前测量合格服装质量；把清单归一化至恰好 1 kg。 |
| `packaging_separation` | 初级和运输包装 | Mass | kg | 分材料测量包装，并从参考产品净质量中排除。 |
| `item_mass_conversion` | 按件记录的生产数据 | Mass | kg | 使用同一报告期、同一服装子类型和尺码层的实测净质量换算件数，并保留称量记录。 |
| `chemical_active_mass` | 供应的湿整理溶液 | Mass | kg 有效物质 | 保留供应溶液质量和浓度；只能根据已记录浓度计算有效物质质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至首个纳入服装制造工序的针织或钩编主体织物、缝纫线及逐项识别的服装组件 |
| starting_condition_role | 带有代表性生产负担的上游产品投入 |
| product_classification_scope | 参考产出为精确 CPC 28222；材料、公用工程、包装、运输和处理服务保留各自身份 |
| recursive_input_rule | 外购的 CPC 28222 成衣作为再使用或返工产品投入记录一次，并链接其既有上游数据集；不得在此前景包内递归重建其历史 |
| upstream_dataset_requirement | 为主体织物、缝纫线、松紧带、纽扣、拉链、标签、公用工程、包装、运输和场外处理链接代表性上游数据集 |
| disclosure | 声明运营者控制、纳入及外包工序、技术、地理、报告期、湿整理适用性、处理路线，以及每项缺失或代理上游链接 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 服装制造 | 纳入裁剪、缝制与组装、检验、包装及相关前景废物。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_rule_2` | 成衣湿整理 | 在前景控制下实施水洗、漂白、染色、印花、涂层或类似整理时，纳入水、能源、每种实际使用的工艺化学品、废水和适用处理。 | `epd-international-pcr-2024-03-apparel`; `eu-textiles-bat-2022` |
| `boundary_rule_3` | 外购投入和服务 | 不得把织物、组件、公用工程、包装、运输或场外处理视为无负担；须连接代表性上游数据集或披露缺口。 | `eu-pef-2021` |
| `boundary_rule_4` | 下游阶段 | 分销、零售、消费者护理、再使用和生命末期不属于工厂大门前景包，须作为单独 lifecyclemodel 阶段识别。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `garment_cutting` | 铺布与服装裁剪 | `required` | 始终纳入 | 把主体织物转换为合格服装组件 | kg 合格裁片 |
| `garment_assembly` | 缝制与服装组装 | `required` | 始终纳入 | 连接裁片以及已声明闭合件、弹性件和标签 | kg 合格组装服装 |
| `garment_wet_finishing` | 成衣湿整理 | `conditional` | 仅当前景控制下实际实施湿整理时纳入 | 形成已声明水洗、漂白、染色或化学整理状态 | kg 合格湿整理服装 |
| `quality_packaging` | 最终检验与包装 | `required` | 始终纳入 | 验证、包装并放行参考服装 | 1 kg 成衣合格净质量 |

### 过程：铺布与服装裁剪（`garment_cutting`）

#### 输入

##### 产品流

###### 针织或钩编主体织物（`knitted_body_fabric`）

主体织物作为已声明构造和组成的一项材料交换跨越裁剪边界。

- 选定流：Garment body fabric
- 流属性/单位：Mass / kg
- 数量规则：发放至裁剪工单的实测织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格服装裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 裁剪用电（`cutting_electricity`）

铺布、裁剪、抽排及直接归属控制设备使用的电力跨越本过程边界。

- 选定流：Electricity supplied to spreading and cutting equipment
- 流属性/单位：Energy / kWh
- 数量规则：裁剪工单的分表实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格服装裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格服装裁片（`cut_garment_components`）

合格衣片和部件作为一个内部前景产品交换离开裁剪。

- 选定流：Cut garment panel
- 流属性/单位：Mass / kg
- 数量规则：实测合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格服装裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

###### 裁剪织物废物（`cutting_fabric_waste`）

边角料和不合格裁片作为一个实测废物交换离开裁剪，并保留组成和去向。

- 选定流：Body-fabric cutting offcut
- 流属性/单位：Mass / kg
- 数量规则：实测裁剪废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格服装裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

### 过程：缝制与服装组装（`garment_assembly`）

#### 输入

##### 产品流

###### 进入组装的服装裁片（`assembly_cut_components`）

合格裁片作为一个内部产品交换进入缝制。

- 选定流：Cut garment panel
- 流属性/单位：Mass / kg
- 数量规则：发放至组装的实测裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 缝纫线（`sewing_thread`）

缝纫线与织物、松紧带、紧固件和标签分开记录。

- 选定流：Sewing thread for garment assembly
- 流属性/单位：Mass / kg
- 数量规则：发放至生产工单的实测缝纫线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 松紧带（`elastic_tape`）

仅当服装物料清单包含松紧带时，此交换跨越组装边界。

- 选定流：Garment elastic tape
- 流属性/单位：Mass / kg
- 数量规则：发放至生产工单的实测松紧带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 服装纽扣（`garment_buttons`）

存在纽扣时，把它作为独立闭合件交换记录。

- 选定流：Garment closure button
- 流属性/单位：Mass / kg
- 数量规则：发放至生产工单的实测纽扣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 拉链（`slide_fastener`）

已声明服装使用拉链时，拉链与纽扣及松紧带分开记录。

- 选定流：Slide fastener for garment closure
- 流属性/单位：Mass / kg
- 数量规则：发放至生产工单的实测拉链质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 护理与身份标签（`care_label`）

纺织标签作为独立产品交换记录，并保留基材和印刷信息。

- 选定流：Textile care and identity label
- 流属性/单位：Mass / kg
- 数量规则：发放至生产工单的实测标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 组装用电（`assembly_electricity`）

缝纫、连接、熨压及直接归属抽排设备使用的电力跨越本过程边界。

- 选定流：Electricity supplied to sewing and garment-assembly equipment
- 流属性/单位：Energy / kWh
- 数量规则：组装工单的分表实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格组装服装（`assembled_garment`）

完成已声明过程验收后，CPC 28222 组装服装离开缝制过程。

- 选定流：Assembled CPC 28222 garment
- 流属性/单位：Mass / kg
- 数量规则：实测合格组装服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`un-cpc-3-0`

##### 废物流

###### 缝纫线废物（`sewing_thread_waste`）

线头和未使用缝纫线作为一个单独称量的废物交换离开组装。

- 选定流：Waste sewing thread from garment assembly
- 流属性/单位：Mass / kg
- 数量规则：实测废缝纫线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 不合格组装服装（`rejected_assembled_garment`）

离开过程的组装不合格品与缝纫线废物和裁剪废物分开测量。

- 选定流：Rejected assembled CPC 28222 garment
- 流属性/单位：Mass / kg
- 数量规则：实测不合格组装服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

### 过程：成衣湿整理（`garment_wet_finishing`）

#### 输入

##### 产品流

###### 进入湿整理的组装服装（`wet_finish_garment_input`）

组装服装作为一个实测内部产品交换进入此条件性过程。

- 选定流：Assembled CPC 28222 garment
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 湿整理用水（`wet_finish_water`）

供应工艺水与内部回用水和废水分开记录。

- 选定流：Process water for garment wet finishing
- 流属性/单位：Volume / m3
- 数量规则：批次计量供水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 湿整理用电（`wet_finish_electricity`）

水洗、配料、泵送、脱水、干燥和控制使用的电力作为一个能源交换记录。

- 选定流：Electricity supplied to garment wet-finishing equipment
- 流属性/单位：Energy / kWh
- 数量规则：批次分表实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 湿整理外购蒸汽（`wet_finish_steam`）

仅在外购蒸汽跨越场址边界并用于已声明批次时记录。

- 选定流：Purchased process steam for garment wet finishing
- 流属性/单位：Mass / kg
- 数量规则：计量供应蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 氢氧化钠（`sodium_hydroxide`）

仅当已批准湿整理配方包含氢氧化钠时，此化学品才单独跨越边界。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg active substance
- 数量规则：已记录供应溶液质量和浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 过氧化氢（`hydrogen_peroxide`）

仅当已批准漂白配方包含过氧化氢时，此化学品才单独跨越边界。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg active substance
- 数量规则：已记录供应溶液质量和浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格湿整理服装（`wet_finished_garment`）

调湿后的服装作为一个实测内部产品交换离开湿整理。

- 选定流：Wet-finished CPC 28222 garment
- 流属性/单位：Mass / kg
- 数量规则：实测合格批次产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

###### 成衣湿处理废水（`garment_wet_process_wastewater`）

离开湿整理的废水作为一个实测废物交换记录，并披露去向和内部回用。

- 选定流：Wastewater from garment wet finishing
- 流属性/单位：Volume / m3
- 数量规则：批次计量排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格湿整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：最终检验与包装（`quality_packaging`）

#### 输入

##### 产品流

###### 最终检验前服装（`garment_before_qc`）

组装或湿整理服装作为一个实测内部产品交换进入最终检验。

- 选定流：CPC 28222 garment before final quality control
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验的实测服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 聚乙烯包装袋（`polyethylene_packaging_bag`）

聚乙烯成衣初级包装袋与纸板包装分开称量。

- 选定流：Polyethylene garment packaging bag
- 流属性/单位：Mass / kg
- 数量规则：合格产量消耗的实测包装袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 瓦楞运输纸箱（`corrugated_carton`）

瓦楞纸板纸箱作为一个独立包装交换记录。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：合格产量消耗的实测纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 检验与包装用电（`quality_packaging_electricity`）

检验、熨压、标签核验、封装和包装使用的电力作为一个能源交换记录。

- 选定流：Electricity supplied to inspection and packaging equipment
- 流属性/单位：Energy / kWh
- 数量规则：合格产量的分表实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### CPC 28222 成衣（`finished_cpc_28222_garment`）

最终调湿后的成衣合格净质量是已声明参考产品交换。

- 选定流：针织或钩编的男衬衫、男童衬衫、衬裤、睡衣裤、晨衣及类似物品 `833dd94b-bf2a-4273-99a9-e6bb3c59dedc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测成衣合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`un-cpc-3-0`

##### 废物流

###### 聚乙烯包装废料（`polyethylene_packaging_scrap`）

未使用或破损的聚乙烯薄膜作为一个单独称量的废物交换离开包装。

- 选定流：Waste polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：实测废薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 瓦楞纸箱废料（`corrugated_carton_scrap`）

破损纸箱和纸板边角料作为一个单独称量的废物交换离开包装。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：实测废纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 不合格成衣（`rejected_finished_garment`）

最终检验不合格服装作为一个实测废物交换离开，并记录其处置。

- 选定流：Rejected finished CPC 28222 garment
- 流属性/单位：Mass / kg
- 数量规则：实测不合格成衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成衣合格净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 产品特定材料、公用工程、废物和排放 | 任何分配前先使用批次、工单、生产线或仪表直接归属。 | `eu-pef-2021` |
| `allocation_rule_2` | 共享设备和仪表 | 无法细分时，采用代表实际使用的有记录物理驱动因子，例如机器时间、计量能源、加工质量或湿处理浴液体积。 | `eu-pef-2021` |
| `allocation_rule_3` | 内部返工 | 把返工保留在前景平衡内，并且只计量一次合格服装。 | `eu-pef-2021` |
| `allocation_rule_4` | 外运废物或回收材料 | 记录实测产出和实际去向；没有明确下游方法和已披露分配时不得赋予避免负担。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_records` | `garment_cutting` | 主体织物、电力、裁片、裁剪废物 | 裁剪工单、领料单、仪表、秤具、废物记录 | order_id; fabric_spec; issued_mass; meter_start; meter_end; accepted_component_mass; waste_mass; waste_destination | 对每个裁剪工单读取经校准秤具和电表。 | kg; kWh | 每工单采集、每月核对 | 与参考生产相同期间 | 所有纳入裁剪线 | 汇总每项原子交换并按合格裁片质量归一化。 | 校准记录、工单、仪表导出和废物转移记录 |
| `cp_assembly_records` | `garment_assembly` | 裁片、缝纫线、松紧带、纽扣、拉链、标签、电力、组装产出、组装废物 | 物料清单、领料单、计数器、仪表、秤具、不合格记录 | order_id; component_id; component_mass; meter_start; meter_end; accepted_mass; thread_waste_mass; reject_mass; disposition | 分开记录每项组件并与组装工单核对。 | kg; kWh | 每工单采集、每月核对 | 与参考生产相同期间 | 所有纳入组装线 | 不合并材料，逐行汇总后按合格组装服装质量归一化。 | 批准物料清单、领料记录、校准、仪表导出和不合格记录 |
| `cp_wet_finishing_records` | `garment_wet_finishing` | 服装、水、电力、蒸汽、氢氧化钠、过氧化氢、整理服装、废水 | 批次单、配方记录、仪表、秤具、排放记录 | batch_id; input_mass; output_mass; water_volume; electricity; steam_mass; chemical_name; solution_mass; active_fraction; wastewater_volume; destination | 使用批次关联仪表和批准配方；每种化学品保留独立行。 | kg; m3; kWh | 每批采集、每月核对 | 与参考生产相同期间 | 所有纳入湿整理线 | 汇总每项原子交换并按合格湿整理服装质量归一化。 | 仪表校准、配方批准、加料日志、实验室或排放记录 |
| `cp_quality_packaging_records` | `quality_packaging` | 来料服装、聚乙烯袋、纸箱、电力、合格产出、包装废物、不合格品 | 检验记录、包装领用、仪表、秤具、废物记录 | order_id; incoming_mass; bag_mass; carton_mass; electricity; accepted_mass; film_waste_mass; carton_waste_mass; reject_mass; disposition | 最终调湿后分开称量成衣净质量和每种包装材料。 | kg; kWh | 每工单采集、每月核对 | 与参考生产相同期间 | 所有纳入检验包装线 | 汇总每项原子交换并按成衣合格净质量归一化。 | 秤具和仪表校准、检验放行、包装领用和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 报告期交换量 / 报告期参考服装合格净质量 | 实测交换；实测合格质量 | 每 1 kg 参考产品交换量 | `eu-pef-2021` |
| `calc_item_mass` | 仅有件数的服装记录 | 合格件数 × 同一子类型和尺码层的实测平均净质量 | 件数；样品质量；层权重 | kg 合格服装 | `eu-pef-2021` |
| `calc_active_chemical` | 氢氧化钠和过氧化氢溶液 | 供应溶液质量 × 已记录有效分数 | 溶液质量；有效分数 | kg 有效物质 | `eu-textiles-bat-2022` |
| `calc_shared_energy` | 共享电力或蒸汽仪表 | 扣除直接计量后，按已披露物理驱动因子分配经核对的共享总量 | 仪表总量；直接使用量；各产品驱动因子 | 各产品分配能源 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考服装 | 保留精确 CPC 28222 范围、服装子类型、构造、组成、尺码基准、单件质量、颜色、整理、闭合件、场址和期间。 | 批准规格、物料清单、生产工单和秤重记录 |
| `dq_atomic_inventory` | 所有前景交换 | 每项材料、公用工程、化学品、废物或产品交换保留一条记录；集合标签或选择器不得替代交换。 | 逐行领料、仪表、配方、产出和废物记录 |
| `dq_temporal_scope` | 前景记录 | 使用一个代表性且内部一致的期间，并披露停机、缺失区间和异常生产。 | 生产日历和覆盖核对 |
| `dq_measurement` | 质量、水、能源、化学品、废水和废物 | 保留仪器、校准、单位、频率、汇总和缺失数据处理。 | 校准证书、仪表导出、秤重票据、配方和实验室记录 |
| `dq_upstream_fit` | 外购产品和服务 | 评估每个相连上游数据集的组成、技术、地理、时间和边界匹配。 | 供应商规格和上游数据集元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考身份 | 参考行必须同时为公开 Product 流 `833dd94b-bf2a-4273-99a9-e6bb3c59dedc`、精确 CPC 链 2>28>282>2822>28222、Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 kg，否则失败。 | `un-cpc-3-0` |
| `validation_rule_2` | 产品范围 | 产品不属于针织或钩编男式或男童 CPC 28222 衬衫、内裤、睡衣、晨衣及类似服装时失败。 | `un-cpc-3-0` |
| `validation_rule_3` | 必需过程 | 缺少裁剪、组装或最终检验与包装时失败；须明确判断成衣湿整理是否适用。 | `epd-international-pcr-2024-03-apparel` |
| `validation_rule_4` | 原子交换 | 卡片合并材料、公用工程、化学品、包装、废物或排放，或选定流为选择指令时失败。 | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `validation_rule_5` | 数量 | 任一清单数量是 AI 估算、无支持默认值或不可追溯值，而不是前景记录或基于这些记录的计算时失败。 | `eu-pef-2021` |
| `validation_rule_6` | 条件性湿整理 | 湿整理适用时，缺少供水、电力、适用蒸汽、每种实际使用的配方化学品、服装产出或废水时失败。 | `eu-textiles-bat-2022` |
| `validation_rule_7` | UUID 控制 | 除参考流外，任何 UUID 未由 hybrid 发现和 state-100 确定性直读共同确认时，不得发布。 | |
| `validation_rule_8` | 双语对齐 | 中英文的 process_id、row_id、rule_id、source_id、受控 token 或 UUID 顺序不一致时失败。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 精确 CPC 28222 针织或钩编服装的前景制造数据集 |
| downstream_use | `secondary_dataset`；`background_dataset`；下游 `process` 和 `lifecyclemodel` 投影的数据源 |
| allowed_use | 与已声明服装子类型、组成、构造、尺码基准、制造路线、技术、地理、期间和工厂大门边界匹配的研究 |
| excluded_use | 机织或其他服装类别；没有相连上游和下游阶段的完整从摇篮到坟墓声明；缺少功能、寿命和护理等效性的比较 |
| required_metadata | PCR id 和状态；CPC 28222；参考 UUID；服装子类型；组成；构造；尺码基准；单件质量；颜色和整理；闭合组件；场址；地理；期间；纳入及外包工序；包装排除；上游链接；分配 |
| required_quality_disclosure | 记录覆盖、校准、质量和公用工程核对、湿整理适用性和配方完整性、废物及废水去向、上游代表性、分配驱动因子、不确定性、缺失数据、拒绝写入的 UUID |
| update_trigger | 产品身份、物料清单、构造、供应商路线、技术、场址、能源或水系统、湿整理配方、处理、分配、边界或报告期代表性发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, CPC 28222 and hierarchy 2>28>282>2822>28222. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/3/28222（检索于 2026-08-13）。 | 精确产品身份、纳入服装类型、排除项和分类校验 |
| `epd-international-pcr-2024-03-apparel` | `standard` | International EPD System, PCR 2024:03, Apparel, except fur and leather apparel, version 1.0.0, registered 2024 and valid through 2028-05-28. https://www.environdec.com/pcr-library/pcr_fe5934d8-029d-4c48-19ea-08db3f138c24（检索于 2026-08-13）。 | 服装产品系统范围、上游/核心/下游分离、服装制造、包装、废物和数据记录 |
| `eu-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-13）。 | 生命周期边界、清单流、分配层级、数据质量、核查和报告 |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13）。 | 条件性纺织湿处理分解；过程级水、能源、化学品、废水和监测记录 |
