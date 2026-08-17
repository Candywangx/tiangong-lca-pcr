---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.panty-hose-tights-stockings-socks-and-other-hosiery-knitted-or-crocheted
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 针织或钩编的连裤袜、紧身衣裤、长袜、短袜及其他袜类

## 1. 范围与适用性

本 PCR 规范 CPC 3.0 类别 28210 范围内针织或钩编连裤袜、紧身衣裤、长袜、短袜及其他袜类成品的前景数据包生产。产品在制造厂门可销售，且声明纤维组成、结构、尺码基准、单只或成双口径、整理方式及包装排除边界时，可适用于消费、职业、医用支撑、运动、校服或工作用途袜类。

前景边界从已识别的纱线、缝纫线、组件、工艺化学品、包装和公用工程进入袜类制造系统开始，覆盖针织或钩编、缝头或缝合与装配、条件性湿处理与定型、检验、配对、贴标、包装、制造废物以及条件性的场内废水处理。纤维生产、纺纱或变形加工、化学品和包装生产、外购能源、进厂运输及场外废物处理应连接可追溯上游数据集；若这些操作在所声明前景运营方控制下，则纳入前景。

本 PCR 不覆盖机织袜类、主要身份属于受监管医疗器械且不具服装产品功能的压力产品、鞋类、作为中间产品销售的针织物、手套、非袜类紧身裤或长裤，以及以皮革、毛皮或塑料为主要产品材料的服装。分销、零售、消费者使用与洗护、再使用和寿命终止不在本制造前景数据集内，可在下游生命周期模型中连接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.panty-hose-tights-stockings-socks-and-other-hosiery-knitted-or-crocheted |
| classification_refs | CPC 3.0：28210，精确分类语境 |
| covered_products | 针织或钩编连裤袜、紧身衣裤、长袜、短袜、及膝袜、踝袜、船袜及类似袜类成品，包括成双或单只销售的产品 |
| excluded_products | 机织袜类；作为中间产品销售的针织或钩编织物；手套；非袜类紧身裤或长裤；鞋类；以皮革、毛皮或塑料为主要材料的服装；不具服装产品功能的医疗器械 |
| representative_product | 一双可销售的针织短袜，声明纤维组成、纱线结构、尺码、针织结构、颜色、整理、单只及成双质量和包装配置 |
| production_route | 交付纱线和组件 -> 针织或钩编 -> 缝头或缝合与装配 -> 条件性染色、洗涤、整理、干燥或定型 -> 检验、配对、贴标和包装 |
| market_state | 制造厂门可销售袜类成品；参考产品质量不含消费包装和运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造厂门针织或钩编袜类可销售成品 |
| How much | 1 kg 袜类成品净质量，不含包装 |
| How well | 符合所声明产品规范及组成、尺寸、结构、弹性或所声称支撑等级、颜色、整理和含湿状态验收准则 |
| How long or cycle | 一个声明生产期或批次；预期使用寿命、穿着日数、配对损失和洗护情景属于独立的下游使用限定信息 |
| reference_flow_link | 质量归一化制造参考流；转换为单只、一双或一个穿着日功能单位时，应使用实测单只或成双质量以及单独记录的使用寿命和使用情景 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 验收合格袜类成品净质量 |
| 参考产品流 | Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted `c00d32b4-7e02-479b-8cae-d94b50ed1a7a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 袜类类型；单只或成双口径；纤维组成及质量百分比；具有实质影响时的纱支和纱线结构；针织或钩编结构；尺码或生产量加权尺码组合；单只或成双净质量；颜色和染色路线；整理和定型路线；适用时的弹性、压力、保暖、防护或医用支撑声明；成品含湿状态；制造场址和地理位置；纳入的生产步骤；报告期；包装排除；投影到基于使用的功能单位时的预期使用次数和洗护情景 |

构建前景数据包时，`必需限定信息` 中每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及全部归一化结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿后、包装前测量验收合格袜类净质量。将每项前景数量归一化至恰好 1 kg 验收合格袜类成品净质量。 |
| `pair_and_item_conversion` | 以单只、双、打或包记录的数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一产品、尺码层、配对口径和报告期的实测净质量换算计数，并保留样本量、称量方法、均值和变异性。 |
| `packaging_mass_separation` | 消费包装和运输包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料分别测量包装，不得将包装质量计入 1 kg 参考产品。 |
| `composition_mass_closure` | 纤维、纱线、缝纫线、弹性组件、整理增重和产品声明 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和质量 % | 使用一致的调湿质量基准，将声明组成质量与验收成品净质量核对，并声明水分和整理增重。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的纱线、缝纫线、产品组件、湿处理化学品、包装和公用工程进入首个前景袜类制造操作 |
| starting_condition_role | 可追溯的袜类制造上游产品投入；任何交付投入均不得视为无负荷 |
| product_classification_scope | 参考成品为 CPC 3.0 28210；纱线、化学品、公用工程、包装、运输和处理服务保留其自身身份 |
| recursive_input_rule | 采购的 CPC 28210 成品若用于返工、配对替换或装配，应记录为已识别的袜类成品投入，不在本前景数据包内递归重建其历史 |
| upstream_dataset_requirement | 每种材料投入、纤维和纱线生产、适用时的纱线变形或染色、工艺化学品、包装制造、外购能源、进厂运输以及场外废物或废水处理均须采用有代表性的上游数据集 |
| disclosure | 声明针织、缝头、缝合、装配、染色、洗涤、整理、干燥、定型、检验、配对、包装、废水处理和废物处理是否在运营方控制内；披露场址、地理位置、技术、报告期、外包步骤以及每个通用或代理数据集 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | 袜类制造 | 纳入所声明路线的针织或钩编、缝头或缝合与装配、检验、配对、贴标、包装及制造废物。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_conditional_operations` | 湿整理、定型和处理 | 在前景控制下进行时，纳入染色、洗涤、漂白、整理、干燥、定型、场内蒸汽或热力生产、直接排放和废水处理；否则连接有代表性的上游或服务数据集并防止重复计算。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_upstream_traceability` | 采购材料和服务 | 不得把纱线、缝纫线、化学品、包装、电力、蒸汽、运输或场外处理视为无负荷；每项材料交换应连接有代表性的上游数据集或披露数据缺口。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `boundary_inventory_completeness` | 产品系统 | 至少覆盖产品内容质量和能源使用的 99%，并评估排除项的环境相关性；记录每项截断及其核验证据。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_downstream_separation` | 数据集使用 | 将分销、零售、消费者洗护、再使用和寿命终止保持在本制造前景数据集之外，同时保留在生命周期模型中连接这些阶段所需的元数据。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `boundary_atomic_exchange` | 清单构建 | 每种纱线、化学品、公用工程、包装组件、废物流和基本流排放均表示为独立交换；不得使用集合标签或选择指令作为流。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hosiery_knitting` | 袜类针织或钩编 | required | 始终 | 将声明纱线转化为针织或钩编袜坯 | kg 验收针织袜坯 |
| `toe_closing_assembly` | 缝头、缝合与装配 | required | 始终；若操作集成于针织，应记录 | 封闭袜头、形成接缝并连接产品特定组件 | kg 验收装配袜类 |
| `wet_finishing_boarding` | 湿整理、干燥与定型 | conditional | 纳入前景控制下的每项洗涤、漂白、染色、柔软、热定型、干燥或袜板定型 | 形成声明颜色、整理、尺寸和形状 | kg 验收湿整理袜类 |
| `inspection_packaging` | 检验、配对、贴标与包装 | required | 始终 | 验证符合性，适用时配对，并贴标、包装和放行产品 | 1 kg 验收袜类成品净质量 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 袜类制造废水在场内处理时纳入 | 处理实测湿加工废水并报告剩余排放和污泥 | m3 处理废水 |

### 过程：袜类针织或钩编（`hosiery_knitting`）

#### 输入

##### 产品流

###### 棉纱（`cotton_yarn_input`）

仅当产品物料清单包含棉纱时记录；纱支、捻度、颜色、再生含量或供应商存在实质差异时，应拆分为独立数据集交换。

- 选定流：Cotton yarn, ring-spun, with declared yarn count and fibre origin
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，并调整退回筒子及期初、期末在制品库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 聚酰胺 6 连续长丝纱（`polyamide6_yarn_input`）

存在聚酰胺 6 连续长丝纱时记录，并声明线密度、长丝结构、变形、颜色和再生含量。

- 选定流：Polyamide 6 continuous filament yarn
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，并调整退回筒子及期初、期末在制品库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 聚酯连续长丝纱（`polyester_yarn_input`）

存在聚酯连续长丝纱时记录，并声明线密度、长丝结构、变形、颜色和再生含量。

- 选定流：Polyethylene terephthalate continuous filament yarn
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，并调整退回筒子及期初、期末在制品库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 氨纶长丝纱（`elastane_yarn_input`）

为伸缩、贴合、支撑或压力功能使用氨纶时记录，并保留线密度、包覆结构和供应商规范。

- 选定流：Elastane filament yarn
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，并调整退回筒子及期初、期末在制品库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 针织用电（`knitting_electricity`）

按场址供电身份和电压等级记录针织或钩编设备及其直接配套抽排风或压缩空气设备的电力。

- 选定流：Electricity, grid supply at the hosiery-manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或与场址总表核对的设备电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收针织袜坯（`knitted_hosiery_body_output`）

按声明产品结构和组成记录转入缝头、缝合或装配的验收针织或钩编袜坯。

- 选定流：Knitted hosiery body of the declared product composition and construction
- 流属性/单位：Mass / kg
- 数量规则：实测验收转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_output_waste`
- 来源：`mass-balance-identity`

##### 废物流

###### 棉纱废物（`cotton_yarn_waste`）

将棉纱线头、不可用筒脚和棉为主的针织不良品与合成纱废物分开记录，并记录实际去向。

- 选定流：Cotton yarn waste
- 流属性/单位：Mass / kg
- 数量规则：实测棉纱废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_output_waste`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 聚酰胺 6 纱废物（`polyamide6_yarn_waste`）

将聚酰胺 6 纱线头和不可用筒脚与棉纱、聚酯废物分开记录，并声明污染状态和实际去向。

- 选定流：Polyamide 6 filament yarn waste
- 流属性/单位：Mass / kg
- 数量规则：实测聚酰胺 6 纱废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_output_waste`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 聚酯纱废物（`polyester_yarn_waste`）

将聚酯纱线头和不可用筒脚与棉纱、聚酰胺废物分开记录，并声明污染状态和实际去向。

- 选定流：Polyethylene terephthalate filament yarn waste
- 流属性/单位：Mass / kg
- 数量规则：实测聚酯纱废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收针织袜坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_knitting_output_waste`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

### 过程：缝头、缝合与装配（`toe_closing_assembly`）

#### 输入

##### 产品流

###### 针织袜坯（`knitted_body_input`）

记录从针织转入的产品特定袜坯，并与上游内部输出和库存变化核对质量。

- 选定流：Knitted hosiery body of the declared product composition and construction
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收装配袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`mass-balance-identity`

###### 聚酯缝纫线（`polyester_sewing_thread_input`）

记录缝头或缝合所用聚酯缝纫线，并声明线支、结构、颜色和供应商规范。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：实测领用减退回，并与工单和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收装配袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 装配用电（`assembly_electricity`）

按场址供电身份记录连接、缝合、缝纫及其直接配套设备的电力。

- 选定流：Electricity, grid supply at the hosiery-manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或与场址总表核对的设备电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收装配袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收装配袜类（`assembled_hosiery_output`）

记录缝头、缝合和组件连接后转入整理或检验的验收装配袜类。

- 选定流：Assembled hosiery of the declared product composition and construction
- 流属性/单位：Mass / kg
- 数量规则：实测验收输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收装配袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`mass-balance-identity`

##### 废物流

###### 边角料或不良袜类材料（`offcut_hosiery_waste`）

仅在物理组成和处理路线相同的情况下，将剪下的缝边、袜头余料和不良装配品作为一个产品组成特定废物流记录。

- 选定流：Hosiery production waste of the declared finished-product composition
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收装配袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

### 过程：湿整理、干燥与定型（`wet_finishing_boarding`）

#### 输入

##### 产品流

###### 装配袜类（`assembled_hosiery_input`）

记录进入声明湿整理或定型路线的装配袜类，并与装配输出和库存变化核对。

- 选定流：Assembled hosiery of the declared product composition and construction
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`mass-balance-identity`

###### 工艺水（`process_water_input`）

按实际水源和处理状态记录进入洗涤、染色、漂洗、柔软或蒸汽生产的计量用水。

- 选定流：Process water supplied to the hosiery wet-finishing line
- 流属性/单位：Volume / m3
- 数量规则：批次或产线计量用量，并与场址水量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 湿整理用电（`wet_finishing_electricity`）

记录湿处理设备、泵、干燥机、定型机及其直接控制设备消耗的电力。

- 选定流：Electricity, grid supply at the hosiery-manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或与场址总表核对的设备电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 外购蒸汽（`purchased_steam_input`）

仅在蒸汽跨越前景边界时记录，并声明压力、温度、冷凝水回收和供应路线。

- 选定流：Purchased saturated steam at declared pressure
- 流属性/单位：Energy / MJ
- 数量规则：蒸汽交付计量或与生产期核对的供应商账单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 活性黑 5 染料（`reactive_black5_input`）

仅对实际使用该染料的声明配方记录活性黑 5；其他染料应建立独立化学品卡，不得替代写入本行。

- 选定流：Reactive Black 5 dyestuff, CAS 17095-24-8
- 流属性/单位：Mass / kg
- 数量规则：批次配方领用并与库存及退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 氯化钠（`sodium_chloride_input`）

仅在声明湿处理配方使用氯化钠时记录，并保留等级和浓度证据。

- 选定流：Sodium chloride, CAS 7647-14-5
- 流属性/单位：Mass / kg
- 数量规则：批次配方领用并与库存及退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 碳酸钠（`sodium_carbonate_input`）

仅在声明湿处理配方使用碳酸钠时记录，并保留等级和浓度证据。

- 选定流：Sodium carbonate, CAS 497-19-8
- 流属性/单位：Mass / kg
- 数量规则：批次配方领用并与库存及退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 乙酸（`acetic_acid_input`）

仅在声明中和或整理配方使用乙酸时记录，并保留溶液浓度和交付质量。

- 选定流：Acetic acid, CAS 64-19-7
- 流属性/单位：Mass / kg
- 数量规则：交付溶液质量乘以核实的有效浓度，并与批次领用和库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收湿整理袜类（`wet_finished_hosiery_output`）

按声明的洗涤、染色、整理、干燥和定型路线记录指定含湿状态下的验收袜类。

- 选定流：Wet-finished hosiery of the declared product composition, colour, finish, and moisture condition
- 流属性/单位：Mass / kg
- 数量规则：实测验收调湿输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`mass-balance-identity`

##### 废物流

###### 湿整理废水（`wet_finishing_wastewater_output`）

记录湿整理过程流向场内或场外处理的实测废水流，并声明路线、pH、温度和采样组成。

- 选定流：Hosiery wet-finishing wastewater with declared treatment route
- 流属性/单位：Volume / m3
- 数量规则：与所代表生产批次匹配的计量排水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿整理袜类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

### 过程：检验、配对、贴标与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 湿整理或装配袜类（`wet_finished_hosiery_input`）

记录进入检验和包装的验收袜类，使用实际路线输出并保留含湿状态。

- 选定流：Finished hosiery intermediate of the declared product composition and route
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_records`
- 来源：`mass-balance-identity`

###### 包装线用电（`packaging_electricity`）

记录检验、测试、配对、贴标和包装设备消耗的电力。

- 选定流：Electricity, grid supply at the hosiery-manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或与场址总表核对的设备电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 瓦楞纸板箱（`corrugated_box_input`）

将运输箱用瓦楞纸板与薄膜、标签、衣架和托盘分开记录，并声明纸板等级和再生含量。

- 选定流：Corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：实测领用减未用退回，并与包装输出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 低密度聚乙烯袋（`ldpe_bag_input`）

将每种低密度聚乙烯消费袋或集合袋与其他包装聚合物分开记录，并声明薄膜厚度和再生含量。

- 选定流：Low-density polyethylene film bag
- 流属性/单位：Mass / kg
- 数量规则：实测领用减未用退回，并与包装输出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 纸质产品标签（`paper_label_input`）

将纸标签或纸腰封与聚合物标签、粘合剂和纸箱分开记录，并声明纸张等级和印刷路线。

- 选定流：Printed paper product label
- 流属性/单位：Mass / kg
- 数量规则：组件数量乘以核实单件质量，并与领用库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收袜类成品净质量（`reference_hosiery_output`）

使用经核验的公开 TianGong 产品流身份，记录检验和配对后、包装前的可销售袜类成品。

- 选定流：Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted `c00d32b4-7e02-479b-8cae-d94b50ed1a7a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：验收调湿产品净质量归一化至恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_output_records`
- 来源：`mass-balance-identity`

##### 废物流

###### 不合格袜类成品（`offspec_finished_hosiery_waste`）

将检验后不可作为产品销售的袜类记录为产品组成特定废物流，并保留实际再使用、回收或处理去向。

- 选定流：Off-spec finished hosiery of the declared product composition
- 流属性/单位：Mass / kg
- 数量规则：实测不合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 瓦楞纸板包装废物（`cardboard_packaging_waste`）

将损坏和废弃的瓦楞纸板与纸标签、聚合物薄膜分开记录，并记录实际处理路线。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：实测废弃瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 低密度聚乙烯包装废物（`ldpe_packaging_waste`）

将损坏和废弃的低密度聚乙烯薄膜与其他聚合物分开记录，并声明污染状态和实际处理路线。

- 选定流：Low-density polyethylene film packaging waste
- 流属性/单位：Mass / kg
- 数量规则：实测废弃低密度聚乙烯薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收袜类成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 接收处理的湿整理废水（`wastewater_treatment_input`）

记录进入场内处理的内部废水流，并将其体积和采样污染物负荷与湿整理排水记录核对。

- 选定流：Hosiery wet-finishing wastewater with declared composition
- 流属性/单位：Volume / m3
- 数量规则：与湿整理生产匹配的计量进水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 废水处理用电（`wastewater_treatment_electricity`）

按场址供电身份记录泵送、曝气、加药、脱水和处理控制消耗的电力。

- 选定流：Electricity, grid supply at the hosiery-manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：处理设施分表用电，并与场址总表核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅在 pH 调节或处理实际使用时记录氢氧化钠，并保留交付浓度和有效质量。

- 选定流：Sodium hydroxide, CAS 1310-73-2
- 流属性/单位：Mass / kg
- 数量规则：交付溶液质量乘以核实有效浓度，并与加药记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 脱水废水处理污泥（`dewatered_sludge_output`）

记录脱水污泥湿质量、干物质比例、危险属性和实际处理去向。

- 选定流：Dewatered textile wastewater-treatment sludge with declared dry-matter fraction
- 流属性/单位：Mass / kg
- 数量规则：实测污泥湿质量，并另行报告实测干物质比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

##### 基本流

###### 排入淡水的化学需氧量（`cod_to_freshwater`）

根据配对的出水浓度和体积记录排入声明淡水隔室的化学需氧量。

- 选定流：Chemical oxygen demand to freshwater
- 流属性/单位：Mass / kg
- 数量规则：同期出水 COD 浓度乘以处理排水量并进行单位换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 排入淡水的总氮（`total_nitrogen_to_freshwater`）

根据配对的出水浓度和体积记录排入声明淡水隔室的总氮。

- 选定流：Total nitrogen to freshwater
- 流属性/单位：Mass / kg
- 数量规则：同期出水总氮浓度乘以处理排水量并进行单位换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

###### 排入淡水的总磷（`total_phosphorus_to_freshwater`）

根据配对的出水浓度和体积记录排入声明淡水隔室的总磷。

- 选定流：Total phosphorus to freshwater
- 流属性/单位：Mass / kg
- 数量规则：同期出水总磷浓度乘以处理排水量并进行单位换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`epd-international-pcr-2024-03-apparel`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享操作和仪表 | 首先按过程、产线、批次、产品和报告期细分并采集直接前景数据。不得分配直接计量数量。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `allocation_physical` | 剩余共享公用工程或服务 | 无法细分时，仅使用机器时间、计量需求、处理体积或质量吞吐量等有记录的物理因果驱动分配剩余共享数量；分配总量须与源记录核对。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `allocation_economic_fallback` | 缺乏合理物理关系的多输出过程 | 仅可将报告期经济分配作为有记录的后备方案，保留价格和数量证据，并进行价格变化敏感性分析。 | `epd-international-pcr-2024-03-apparel` |
| `allocation_pairing_and_rework` | 配对不良、返工和替换袜只 | 可追溯时，将返工投入和损失分配至导致其发生的产品工单；否则在同一袜类类型、尺码、组成和期间内使用生产量加权驱动。 | `mass-balance-identity` |
| `allocation_waste_status` | 纱线废物、不合格袜类、包装废物和污泥 | 在有记录的废物终止条件满足前，将废物处理负荷保留在产生废物的产品系统内。出售、收集回收或计划回收本身不构成共产品抵扣依据。 | `epd-international-pcr-2024-03-apparel` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_balance` | `hosiery_knitting` | 每种纱线投入 | 物料清单、收料、筒子领退、库存盘点、供应商规范 | product id; yarn id; polymer or fibre; count; construction; colour; recycled content; opening stock; receipts; issues; returns; closing stock; mass | 按纱线身份使用校准秤和库存核对 | kg | 每批次和工单；月度库存结账 | 与针织输出相同的代表期 | 控制下的每个针织场址和外包操作 | 期初 + 收料 - 退料 - 期末，并通过可追溯工单归属 | 秤校准；供应商规范；库存核对；差异记录 |
| `cp_knitting_output_waste` | `hosiery_knitting` | 验收袜坯及每种纱线特定废物 | 机器、工单、验收、不良和废物记录 | machine; product; yarn lot; input mass; accepted body mass; waste mass by material; stock change | 校准秤和机器工单核对 | kg | 每工单或班次 | 代表生产期 | 范围内每条针织产线 | 将纱线投入与验收袜坯、材料特定废物和库存变化核对 | 秤校准；工单签字结单；材料平衡残差 |
| `cp_assembly_records` | `toe_closing_assembly` | 袜坯、缝纫线、验收装配品和边角料 | 转移、领用、工单、输出和不良记录 | product; size; input mass; thread issue and return; accepted mass; waste mass; rework | 校准秤和工单记录 | kg; count | 每工单 | 与针织和产品输出相同期间 | 范围内每条装配线 | 核对投入、缝纫线、验收输出、废物、返工和库存变化 | 秤校准；工单追溯；验收记录 |
| `cp_wet_finishing_records` | `wet_finishing_boarding` | 袜类投入/输出、水和路线条件 | 批次单、仪表、配方、干燥和定型记录 | batch; product; input and output mass; moisture; water; temperature; time; machine; finish route | 批次记录、校准仪表和秤 | kg; m3; °C; h | 每批次；月度核对 | 与验收输出相同期间 | 范围内每条湿处理、干燥和定型线 | 汇总声明批次并按验收调湿输出归一化 | 仪表和秤校准；批准配方；批次验收；水量和质量平衡 |
| `cp_chemical_recipe_records` | `wet_finishing_boarding` | 每种化学品特定投入 | 批准配方、领退、库存和供应商记录 | chemical identity; CAS; concentration; active content; batch issue; return; opening and closing stock; supplier lot | 称量领用和库存核对；仅按核实浓度计算有效质量 | kg | 每批次；月度库存结账 | 与所代表湿处理相同期间 | 每个前景湿处理场址 | 按化学品一致汇总有效或交付质量；不得合并化学品 | 批准配方；SDS；分析证书；秤校准；库存核对 |
| `cp_energy_records` | 全部前景过程 | 电力和外购蒸汽 | 仪表、账单、设备日志、生产小时 | meter; start and end reading; carrier; quantity; unit; equipment; product order; operating time | 优先分表；剩余共享用量按有记录因果驱动分配 | kWh; MJ | 连续或每班；月度核对 | 所有核心过程同一期间 | 每个场址和相关产线 | 汇总计量用量；仅分配剩余共享用量；与场址总量核对 | 仪表校准；账单核对；分配工作表；供电证据 |
| `cp_packaging_records` | `inspection_packaging` | 每个包装组件和包装废物 | 物料清单、领退日志、组件计数、供应商规范、废物记录 | component id; material; grade; unit mass; recycled content; issue; return; packed count; waste mass | 按组件核实单件质量并进行库存核对 | kg; count | 每包装工单；月度结账 | 与包装输出相同期间 | 每个包装场址 | 按组件计算净领用并按验收产品净质量归一化；核对包装废物 | 秤校准；供应商规范；库存和计数核对 |
| `cp_product_output_records` | `inspection_packaging` | 检验、配对、验收、不良和返工袜类 | 生产、检验、配对、称量和放行记录 | product; hosiery type; size; single or pair convention; count; net mass; moisture; accepted; rejected; reworked; release date | 校准秤和质量体系记录 | count; pair; kg | 每批次或工单 | 代表生产期 | 全部放行场址 | 按产品和尺码层进行生产量加权汇总；排除包装 | 秤校准；验收准则；配对记录；放行授权 |
| `cp_wastewater_records` | `wet_finishing_boarding` | 湿整理排出废水 | 排水仪表、采样和路线记录 | batch; volume; pH; temperature; COD; nitrogen; phosphorus; treatment destination; sampling time | 校准流量计和有记录采样 | m3; concentration units | 连续计量体积；按许可或过程频率采样 | 与所代表湿处理批次匹配 | 范围内每个排放点 | 将排水体积和样本与生产期匹配；披露未匹配覆盖 | 仪表校准；实验室报告；样品链；路线证据 |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | 进水、电力、氢氧化钠、出水排放和污泥 | 进出水仪表、实验室结果、化学品记录、污泥票据 | volume; concentration; chemical solution mass and concentration; electricity; sludge wet mass and dry matter; discharge compartment | 校准仪表、实验室检测、加药记录和地磅票 | m3; kg; kWh | 连续计量体积；许可采样；每次污泥转移 | 与湿处理生产相同期间 | 每个场内处理单元 | 在匹配期间进行水量和污染物平衡，并归一化至处理体积和参考产品 | 仪表校准；实验室 QA；许可记录；加药核对；污泥处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景数量 | 归一化数量 = 报告期可归属数量 / 报告期验收袜类成品净质量 | 各原子流数量；验收产品净质量 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_material_consumption` | 每种纱线、缝纫线、化学品和包装组件 | 消耗质量 = 期初库存 + 收料 - 退供应商 - 期末库存；核对工单领用和未解释差异 | 库存和交易记录 | 各原子材料身份的消耗 kg | `mass-balance-identity` |
| `calc_item_pair_mass` | 仅计数输出记录 | 产品净质量 = 验收只数或双数 × 同产品同尺码层实测平均净质量 | 计数；配对口径；样本质量；生产权重 | kg 验收袜类成品净质量 | `mass-balance-identity` |
| `calc_process_mass_balance` | 针织、装配、湿整理和包装 | 残差 = 投入 + 期初在制品 - 验收输出 - 实测废物 - 期末在制品；水分或整理增重单独报告 | 各原子流实测质量记录 | 过程残差和核对说明 | `mass-balance-identity` |
| `calc_active_chemical_mass` | 交付化学品溶液 | 有效化学品质量 = 交付溶液质量 × 核实质量分数；另保留交付溶液量 | 交付质量；证书浓度 | kg 有效化学品 | `mass-balance-identity` |
| `calc_shared_utility` | 剩余共享仪表 | 分配公用工程 = 仪表剩余量 × 产品因果驱动份额；分配总量须等于仪表剩余量 | 源仪表；直接归属量；各产品因果驱动 | 各产品分配公用工程 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `calc_effluent_load` | COD、总氮和总磷 | 排放负荷 = 同期浓度 × 处理排水量，并明确单位换算 | 浓度；体积；样本覆盖 | kg 污染物进入声明淡水隔室 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留袜类类型、单只或成双口径、组成百分比、纱线结构、针织结构、尺码或尺码组合、净质量、颜色、整理、性能声明、含湿状态、路线、场址、地理位置和报告期。 | 批准规范；物料清单；生产工单；称量和质量记录 |
| `dq_core_specific_data` | 全部前景核心过程 | 对前景控制下操作使用场址特定记录，并确保全部核心数据代表同一期间；偏离须披露并说明理由。 | 仪表；账单；生产、仓储、配方、质量、废物和处理记录；`epd-international-pcr-2024-03-apparel` |
| `dq_upstream_representativeness` | 纱线、化学品、包装、能源、运输和处理数据集 | 评估纤维或聚合物、技术、地理、时间、再生含量和边界匹配；主要投入优先使用供应商特定数据并披露通用和代理份额。 | 供应商数据集；代表性评估；敏感性分析；`epd-international-pcr-2024-03-apparel` |
| `dq_completeness` | 产品系统 | 证明至少覆盖产品内容质量和能源的 99%，并评估全部排除项的环境相关性。 | 材料和能源核对；排除登记；敏感性或专家审查；`epd-international-pcr-2024-03-apparel` |
| `dq_measurement` | 质量、计数、能源、水、化学品、废物和排放 | 识别仪器、校准、单位、采样频率、适用时的检出限、缺失数据处理和汇总方法。 | 校准证书；实验室 QA；仪表、秤和采样日志 |
| `dq_atomic_identity` | 每项清单交换 | 保留单一材料或物质身份、规范及适用时的供应商或路线；仅在公开核验时写入 Tiangong UUID；不得在一行合并多种化学品、能源载体、包装材料、废物或排放。 | 物料清单；SDS 或规范；供应商记录；UUID 核验记录 |
| `dq_allocation` | 共享过程 | 保留细分尝试、物理因果关系、驱动值、分配总量以及经济后备方案的敏感性证据。 | 分配工作表；仪表核对；价格证据；敏感性分析；`epd-international-pcr-2024-03-apparel` |
| `dq_waste_route` | 每项废物流 | 识别组成、质量基准、去向、处理、承运方和废物终止证据；不得仅凭回收收集假定已回收。 | 转移联单；地磅记录；处理回执；废物终止证据 |
| `dq_uncertainty_and_gaps` | 发布数据集 | 披露未解决 UUID、代理数据、缺失期间、排除项、材料或能源不平衡、分配和敏感性结果；不得用 AI 生成范围替代缺失前景数量。 | 质量披露和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品身份 | 缺失 CPC 28210 语境、袜类类型、针织或钩编结构、纤维组成、尺码基准、单只或成双口径、净质量、颜色或整理、路线、场址或报告期时失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_reference_flow` | 定量参考 | 除非归一化输出恰为 1 kg 验收袜类成品净质量，使用 Product flow `c00d32b4-7e02-479b-8cae-d94b50ed1a7a`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg，否则失败。 | `mass-balance-identity` |
| `validate_pair_item_conversion` | 计数记录 | 若只、双、打或包记录未使用产品和尺码特定的实测净质量及声明配对口径进行换算，则失败。 | `mass-balance-identity` |
| `validate_packaging_separation` | 包装 | 若包装质量计入参考产品质量，或瓦楞纸板、聚乙烯薄膜、纸标签及其他包装材料未分开报告，则失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_required_processes` | 过程覆盖 | 缺失针织或钩编、缝头或装配，或检验、配对、贴标与包装时失败；湿整理、定型和场内废水处理须有适用性决定。 | `epd-international-pcr-2024-03-apparel` |
| `validate_atomic_flows` | 清单行 | 选定流是复合集合、材料或公用工程选择器、合并废物或合并排放流时失败；每种化学品和排放均须保留具体身份和隔室。 | `mass-balance-identity` |
| `validate_material_balance` | 质量过程 | 若投入、验收输出、废物、返工、水分或整理增重和库存变化无法在有记录的测量不确定性内核对，或残差被归一化隐藏，则失败。 | `mass-balance-identity` |
| `validate_energy_water_chemicals` | 核心公用工程和湿处理配方 | 纳入操作缺失前景能源记录、用水未计量且无核对，或配方化学品未按化学身份和有效浓度分别报告时失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_wastewater_emissions` | 湿处理和场内处理 | 缺失废水路线、匹配体积、采样覆盖、污泥去向或适用原子污染物负荷，或合并不相容环境隔室时失败。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_completeness` | 产品系统 | 数据集无法证明产品内容质量和能源覆盖 99%，或未记录和评估截断时失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_allocation` | 共享过程 | 分配未经说明即跳过细分、缺乏合理物理关系，或经济分配缺少报告期数值和敏感性分析时失败。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_upstream_links` | 采购投入和服务 | 纱线、主要化学品、包装、能源、运输或场外处理被视为无负荷，或连接未经评估的通用或代理数据集时失败。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_uuid_evidence` | 带 UUID 的引用 | 任何清单 UUID 若没有相关混合检索结果和直接公开 state_code=100 身份读取则失败；未解决行须保持 UUID 缺失并按 row_id 披露。 | `mass-balance-identity` |
| `validate_data_quality_disclosure` | 发布前景数据集 | 未披露报告期、地理、技术、供应商特定或通用状态、测量方法、分配、截断、不确定性和未解决身份引用时失败。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针织或钩编连裤袜、紧身衣裤、长袜、短袜及其他袜类成品的前景制造数据集 |
| downstream_use | `secondary_dataset`；供需要袜类制造阶段的产品系统用作 `background_dataset`；作为下游 `process` 和 `lifecyclemodel` 投影来源 |
| allowed_use | 袜类制造 LCI、供应商特定或代表性生产建模、热点分析，以及与单独建模的上游纱线和下游分销、使用及寿命终止阶段连接 |
| excluded_use | 未连接上游和下游阶段即声称完整从摇篮到坟墓袜类结果；在功能、压力或支撑、寿命、配对损失、尺码基准、组成或洗护情景不同且无功能等价时进行比较；作为纱线生产数据集使用 |
| required_metadata | PCR id 和版本状态；产品和流身份；袜类和配对口径；组成；纱线和针织结构；尺码基准；单只和成双净质量；颜色、整理和声称性能；纳入路线；场址和地理；报告期；经核验参考 UUID；上游数据集身份；分配；截断；数据源 |
| required_quality_disclosure | 特定、选定通用和代理数据份额；测量和采样方法；时间、地理和技术代表性；材料和能源闭合；化学品身份；废水和废物路线；假设；不确定性；敏感性；未解决 UUID；未提供默认定量范围 |
| update_trigger | 产品结构、组成、纱线供应商、针织技术、场址、能源供应、染色或整理配方、定型路线、包装、废水或废物处理、分配或数据期间发生足以实质改变清单数量或声明结果的变化；纠正错误或更新陈旧上游数据集 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-28210` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 28210, "Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted." https://unstats.un.org/unsd/classifications/Econ，访问于 2026-08-13。 | 官方分类身份和产品类别范围 |
| `epd-international-pcr-2024-03-apparel` | standard | International EPD System, PCR 2024:03, Apparel, except fur and leather apparel, version 1.0.0, 2024-05-28, valid to 2028-05-28. https://www.environdec.com/pcr-library/pcr_fe5934d8-029d-4c48-19ea-08db3f138c24（官方 PDF：https://api.prod.environdec.com/api/v2/EPDLibrary/Files/e91dc7c8-2c6c-4f16-e74f-08dc7a67eb3e/Data），访问于 2026-08-13。 | 明确纳入 CPC 2821 袜类；功能使用限定；上游、核心和下游过程覆盖；制造、质量控制、包装、废物和废水处理；99% 完整性；分配层级；场址特定核心数据和披露要求 |
| `ec-pef-method-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf，访问于 2026-08-13。 | 功能单位、参考流、生命周期阶段、企业特定和次级数据、分配、数据质量、核验，以及前景数据与完整产品足迹的连接 |
| `mass-balance-identity` | method_factor | 将质量守恒恒等式用于实测前景投入、输出、废物、库存变化、有效浓度和归一化产品质量；不采用外部数值因子。 | 参考归一化、材料消耗、过程核对、有效化学品计算、污染物负荷计算和校验 |
