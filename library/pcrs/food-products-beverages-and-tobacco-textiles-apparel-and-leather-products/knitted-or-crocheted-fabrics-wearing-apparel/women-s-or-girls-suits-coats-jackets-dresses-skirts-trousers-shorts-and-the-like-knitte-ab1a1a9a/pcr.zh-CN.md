---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-knitte-ab1a1a9a
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 针织或钩编的女式或女童套装、大衣、夹克、连衣裙、裙子、裤子、短裤及类似品

## 1. 范围与适用性

本 PCR 适用于女式或女童套装、大衣、夹克、连衣裙、裙子、裤子、短裤及类似服装制造的工厂门口前景数据包，且形成服装的纺织材料为针织或钩编材料。它覆盖排料与裁剪、缝纫与组装、报告设施实施的任何成衣湿法后整理、熨烫、检验及销售包装。它适用于已声明的具体产品款式和物料清单，而不是未定义的市场平均服装。

纤维、纱线、针织或钩编织物、辅料、化学品、能源载体和包装材料的生产使用独立上游数据集表示。配送、零售、消费者使用、维修、再使用及生命末期不属于前景制造数据包，但该数据包可支持下游服装生命周期模型。非针织或非钩编服装、袜类、CPC 28223 以外的衬衫和内衣、婴儿服装、单列的运动服装子类、毛皮服装、皮革服装和鞋类均不属于本范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-knitte-ab1a1a9a |
| classification_refs | CPC 3.0: 28223（精确范围参考） |
| covered_products | 针织或钩编的女式或女童套装、大衣、夹克、连衣裙、裙子、裤子、短裤及类似服装 |
| excluded_products | 非针织或非钩编服装；袜类；女式或女童罩衫、衬衫、内衣、睡衣和晨衣；T 恤和背心；套头衫和开衫；婴儿服装；田径服、滑雪服、泳装及其他单列服装；服饰配件；毛皮、皮革、塑料、毡或非织造服装；鞋类 |
| representative_product | 按一个已声明款式、尺码组合、纤维组成和辅料规格生产并在工厂门口交付的销售包装针织或钩编女式或女童服装 |
| production_route | 接收成品针织或钩编织物和辅料；排料与裁剪；缝纫与组装；条件适用的成衣湿法后整理；熨烫与检验；销售包装 |
| market_state | 在制造设施门口已完工、检验合格并完成销售包装的服装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 28223 范围内的针织或钩编女式或女童成衣，具有已声明的款式、纤维组成、辅料清单、后整理路线和包装配置 |
| How much | 1 kg 合格成衣净质量；销售包装单独报告并纳入前景清单 |
| How well | 符合已声明的产品规格、尺码组合、做工和检验准则、纤维成分声明、颜色/后整理规格及销售包装规格 |
| How long or cycle | 一次工厂门口生产与交付事件；该前景参考流不表示消费者使用寿命 |
| reference_flow_link | 参考产品输出 `final_packaged_garment` 按 1 kg 成衣净质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成衣净质量 |
| 参考产品流 | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, knitted or crocheted `06ca6094-ac7b-482e-a629-0def31609f23` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装类型和款式代码；女式或女童标识；针织或钩编结构；按质量计的纤维组成；尺码组合；成衣净质量；辅料和配件清单；染色与后整理路线；湿法后整理适用性；生产地域和期间；销售包装配置；再生含量声明；质量验收准则 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有纺织材料、辅料、化学品、包装、废物和直接排放质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有交换按 1 kg 验收合格成衣净质量归一化。销售包装须单独称量，不得计入参考质量。 |
| `electricity_measurement` | 各过程的电力行 | Energy | kWh | 记录已声明生产期间的电表、分表或有记录依据的发票电量分配，并按合格成衣质量归一化。不得把电力与蒸汽或燃料合并。 |
| `steam_measurement` | 各外购蒸汽行 | Energy 或带有已声明换算依据的蒸汽质量 | MJ 或 kg steam | 保留计量数量、压力/焓基准及采用的换算。不得把蒸汽与天然气或电力合并。 |
| `fuel_measurement` | 现场燃烧的天然气 | Energy 或带有已声明换算依据的标准体积 | MJ 或 m3 | 记录采购或计量燃料数量、低位或高位热值基准及换算到模型单位的方法。 |
| `water_measurement` | 湿法后整理工艺用水和废水 | 平衡需要的体积和质量 | m3 和 kg | 进水与排水分别计量；保留批次数、配方及质量报告所采用的密度换算。 |
| `component_count_to_mass` | 纽扣、拉链、洗护标签及其他按件管理的部件 | Mass | kg | 使用同一部件规格和生产期间的代表性实测单件质量，将合格和报废部件数量换算为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在服装制造设施接收的成品针织或钩编织物、缝纫线、产品特定辅料、工艺化学品、公用工程和包装材料 |
| starting_condition_role | 这些输入产品是上游数据集接口；其生产不在服装前景数据包内重复创建 |
| product_classification_scope | 仅限 CPC 28223 女式或女童成衣；中间织物和辅料输入保留各自产品身份 |
| recursive_input_rule | 若 CPC 28223 服装作为返工或再制造输入，须以单独识别的输入产品记录其来源、状态和质量；不得递归展开为新的服装生产 |
| upstream_dataset_requirement | 每项织物、辅料、化学品、电力、蒸汽、天然气、水和包装输入均连接具有地域和技术代表性的上游数据集；任何代理均须披露 |
| disclosure | 声明设施地域、报告期间、纳入场址、款式和尺码组合、纤维和辅料组成、湿法后整理路线、公用工程供应、废物去向、销售包装、数据缺口和分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 所有前景数据包 | 若由报告设施实施或委托实施，纳入排料与裁剪、缝纫与组装、熨烫、检验和销售包装；仅在已声明产品实际发生时纳入成衣湿法后整理。 | `ec-apparel-footwear-pefcr-2025`; `ijlc-lyocell-dress-2026` |
| `boundary_input_output_inventory` | 各纳入过程 | 记录跨越过程边界的纺织材料、工艺化学品、水、能源、废水、直接排放和每种废物的数量及特征。 | `eu-textiles-bat-2022-2508` |
| `boundary_upstream_separation` | 织物、辅料、化学品、公用工程和包装 | 将上游生产保留在相连数据集中，并保留选择这些数据集所需的实际供应商、地域、技术和再生含量属性。 | `eu-ef-recommendation-2021` |
| `boundary_downstream_exclusion` | 配送、零售、使用和生命末期 | 从工厂门口前景数据包排除这些阶段，并披露完整服装生命周期评价必须在下游连接这些阶段。 | `ec-apparel-footwear-pefcr-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01_pattern_cutting` | 排料与裁剪 | `required` | 所有裁剪缝制服装均纳入 | 将输入针织或钩编织物转化为裁片和分流的裁剪边角料 | 每 1 kg 验收合格成衣净质量 |
| `p02_sewing_assembly` | 缝纫与服装组装 | `required` | 所有覆盖服装均纳入 | 将裁片和产品特定辅料连接成组装服装 | 每 1 kg 验收合格成衣净质量 |
| `p03_wet_finishing` | 成衣湿法后整理 | `conditional` | 组装后发生成衣洗涤、成衣染色、柔软或其他湿法后整理时纳入 | 应用已声明湿法配方，并记录水、化学品、能源、废水、污泥和燃料直接排放 | 每 1 kg 接受该路线的验收合格成衣净质量 |
| `p04_pressing_inspection` | 熨烫、最终整理与检验 | `required` | 所有覆盖服装均纳入；仅有记录证明无蒸汽路线时蒸汽可为零 | 生产合格未包装成衣，并通过适用废物流单独记录不合格输出 | 每 1 kg 验收合格成衣净质量 |
| `p05_packaging` | 销售包装 | `required` | 所有工厂门口产品均纳入 | 将合格成衣与已声明的销售和运输包装组合 | 每 1 kg 验收合格成衣净质量 |

### 过程：排料与裁剪（`p01_pattern_cutting`）

#### 输入

##### 产品流

###### 针织或钩编服装织物（`cutting_fabric`）

记录为已声明款式接收并进入裁剪边界的成品织物，并保留其纤维组成、织物质量、再生含量、幅宽和供应商批次。

- 选定流：Knitted or crocheted textile fabric for the declared garment composition
- 流属性/单位：Mass / kg
- 数量规则：已声明生产批次发往裁剪的称量或发票核对织物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`eu-textiles-bat-2022-2508`

###### 裁剪用电（`cutting_electricity`）

铺布、裁剪、抽吸和直接相关裁剪设备的电力与所有热能分开记录。

- 选定流：Electricity supplied to garment cutting equipment at the declared voltage and geography
- 流属性/单位：Energy / kWh
- 数量规则：过程分表读数，或从设施电表采用有记录的因果分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_energy`
- 来源：`eu-ef-recommendation-2021`; `ijlc-lyocell-dress-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 服装裁片（`cut_panels`）

裁剪过程输出的合格裁片采用称量或受控捆包记录计算，并与织物投入和边角料核对。

- 选定流：Cut knitted garment panels
- 流属性/单位：Mass / kg
- 数量规则：转交缝纫组装的合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`ijlc-lyocell-dress-2026`

##### 废物流

###### 针织纺织裁剪边角料（`cutting_textile_waste`）

裁剪产生的边角料和报废裁片作为单一组成特定废物流记录，并与缝纫废物分开。

- 选定流：Knitted textile cutting scrap
- 流属性/单位：Mass / kg
- 数量规则：按纤维组成和去向称量边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`eu-textiles-bat-2022-2508`; `ijlc-lyocell-dress-2026`

##### 基本流

### 过程：缝纫与服装组装（`p02_sewing_assembly`）

#### 输入

##### 产品流

###### 进入组装的服装裁片（`assembly_panels`）

记录从裁剪转入组装边界的合格裁片。

- 选定流：Cut knitted garment panels
- 流属性/单位：Mass / kg
- 数量规则：与 `cut_panels` 核对的转移裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_balance`
- 来源：`ijlc-lyocell-dress-2026`

###### 缝纫线（`sewing_thread`）

按实际纤维组成和规格记录已声明款式领用的缝纫线。

- 选定流：Sewing thread of the declared fibre composition
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用质量减去退回的未用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_balance`
- 来源：`eu-textiles-bat-2022-2508`

###### 服装纽扣（`garment_button`）

仅在款式使用纽扣时纳入，并按已声明材料和部件规格记录。

- 选定流：Garment button of the declared material
- 流属性/单位：Mass / kg
- 数量规则：合格部件数量乘以实测单件质量，再加上记录的组装损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_components`
- 来源：`eu-textiles-bat-2022-2508`

###### 服装拉链（`garment_zipper`）

仅在款式使用拉链时纳入，并按已声明材料、长度和结构记录。

- 选定流：Garment zipper of the declared material and length
- 流属性/单位：Mass / kg
- 数量规则：合格部件数量乘以实测单件质量，再加上记录的组装损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_components`
- 来源：`eu-textiles-bat-2022-2508`

###### 纺织衬料（`garment_interfacing`）

仅在已声明物料清单中存在时纳入衬料，并按组成和胶黏体系记录。

- 选定流：Textile interfacing of the declared composition
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用质量减去退回的未用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_balance`
- 来源：`eu-textiles-bat-2022-2508`

###### 印刷纺织洗护标签（`garment_care_label`）

缝入式洗护或成分标签与包装过程中使用的纸质吊牌分开记录。

- 选定流：Printed textile care label
- 流属性/单位：Mass / kg
- 数量规则：合格标签数量乘以实测单件质量，再加上记录的组装损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_components`
- 来源：`eu-textiles-bat-2022-2508`

###### 缝纫与组装用电（`assembly_electricity`）

缝纫、包缝、适用时的压胶及直接相关组装设备用电作为一个过程特定电力交换记录。

- 选定流：Electricity supplied to sewing equipment at the declared voltage and geography
- 流属性/单位：Energy / kWh
- 数量规则：过程分表读数，或从设施电表采用有记录的因果分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`eu-ef-recommendation-2021`; `ijlc-lyocell-dress-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 组装服装（`assembled_garment`）

在任何成衣湿法后整理或熨烫之前，记录从组装过程转出的服装。

- 选定流：Assembled knitted or crocheted garment before wet finishing or pressing
- 流属性/单位：Mass / kg
- 数量规则：从本过程转出的称量或统计受控组装服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_balance`
- 来源：`ijlc-lyocell-dress-2026`

##### 废物流

###### 缝纫阶段纺织废料（`sewing_textile_waste`）

线头、修缝废料和报废纺织部件作为单一组成特定缝纫阶段纺织废物流收集，并与裁剪边角料分开。

- 选定流：Sewing-stage knitted textile scrap
- 流属性/单位：Mass / kg
- 数量规则：按已声明纤维组成和去向称量缝纫阶段纺织废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_balance`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

### 过程：成衣湿法后整理（`p03_wet_finishing`）

#### 输入

##### 产品流

###### 湿法后整理用组装服装（`wet_finish_garment_input`）

仅当已声明服装在组装后接受洗涤、染色、柔软或其他湿法后整理时记录该中间产品。

- 选定流：Assembled knitted or crocheted garment for wet finishing
- 流属性/单位：Mass / kg
- 数量规则：与组装转移记录核对的批次装载质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受湿法后整理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 湿法后整理工艺用水（`wet_finish_water`）

进入成衣湿法后整理设备的水与排放废水分开计量。

- 选定流：Process water for garment wet finishing
- 流属性/单位：Volume / m3
- 数量规则：分配到已声明湿法后整理批次的批次或期间计量进水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受湿法后整理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_batch`
- 来源：`eu-textiles-bat-2022-2508`

###### 非离子纺织洗涤剂（`wet_finish_detergent`）

湿法后整理配方实际使用的洗涤剂配方作为单独化学品输入记录。

- 选定流：Non-ionic textile washing detergent
- 流属性/单位：Mass / kg
- 数量规则：配方领用记录与库存变化及退回未用材料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受洗涤剂路线的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_chemicals`
- 来源：`eu-textiles-bat-2022-2508`

###### 纺织染料（`wet_finish_dye`）

仅在成衣染色路线中纳入染料，并须按实际配方化学品或商业制剂识别。

- 选定流：Textile dye used in the declared garment-dyeing recipe
- 流属性/单位：Mass / kg
- 数量规则：配方领用记录与库存变化及退回未用材料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受成衣染色的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_chemicals`
- 来源：`eu-textiles-bat-2022-2508`

###### 纺织柔软剂（`wet_finish_softener`）

仅在成衣后整理配方规定时纳入柔软剂，并与洗涤剂和染料分开。

- 选定流：Textile softening agent used in the declared finishing recipe
- 流属性/单位：Mass / kg
- 数量规则：配方领用记录与库存变化及退回未用材料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受柔软处理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_chemicals`
- 来源：`eu-textiles-bat-2022-2508`

###### 湿法后整理用电（`wet_finish_electricity`）

洗涤机、染色机、泵、离心机、烘干机及直接相关控制设备的用电与蒸汽和天然气分开记录。

- 选定流：Electricity supplied to wet-finishing equipment at the declared voltage and geography
- 流属性/单位：Energy / kWh
- 数量规则：过程分表读数，或从设施电表采用有记录的因果分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受湿法后整理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_energy`
- 来源：`eu-textiles-bat-2022-2508`

###### 湿法后整理外购蒸汽（`wet_finish_steam`）

跨越设施或过程边界的外购蒸汽单独记录。现场产汽路线以锅炉燃料和有记录的蒸汽分配表示，同一热量不得同时记录外购蒸汽和燃料。

- 选定流：Purchased steam supplied to garment wet finishing
- 流属性/单位：Mass or energy / kg steam or MJ
- 数量规则：分配到已声明湿法后整理批次的计量蒸汽，并保留压力或焓基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 使用外购蒸汽进行湿法后整理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_energy`
- 来源：`eu-textiles-bat-2022-2508`

###### 湿法后整理直接供热天然气（`wet_finish_natural_gas`）

仅在已声明湿法后整理或烘干路线现场燃烧天然气时纳入，并与外购蒸汽和电力分开。

- 选定流：Natural gas combusted in wet-finishing equipment
- 流属性/单位：Energy or standard volume / MJ or m3
- 数量规则：分配到已声明湿法后整理批次的计量或发票核对燃料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受天然气直接供热的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_fuel`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法后整理服装（`wet_finished_garment`）

湿法后整理输出的服装在已声明调湿状态后称量，并转交熨烫与检验。

- 选定流：Wet-finished knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：湿法后整理转出的合格调湿服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受湿法后整理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_batch`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

###### 湿法后整理废水（`wet_finish_wastewater`）

湿法后整理过程输出的废水在场外排放或转入处理前记录，并保留配方及相关水质参数。

- 选定流：Wastewater from garment wet finishing
- 流属性/单位：Volume / m3
- 数量规则：分配到已声明湿法后整理批次的计量排水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受湿法后整理的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_wastewater`
- 来源：`eu-textiles-bat-2022-2508`

###### 湿法后整理废水处理污泥（`wet_finish_sludge`）

仅在现场处理已声明湿法后整理废水并产生污泥时纳入，且与废水分开记录。

- 选定流：Textile wet-finishing wastewater treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：称量湿污泥，并记录干物质含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 其废水产生该污泥的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finish_wastewater`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

###### 直接化石二氧化碳（`direct_fossil_co2`）

仅针对前景边界内燃烧的天然气计算直接化石二氧化碳；上游燃料供应排放保留在相连燃料数据集中。

- 选定流：Carbon dioxide, fossil, emitted to air
- 流属性/单位：Mass / kg
- 数量规则：按照 `calc_direct_fossil_co2`，由采集的天然气用量、经核实的碳含量或适用排放因子、氧化因子及分子质量换算计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受天然气直接供热的验收合格成衣净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finish_fuel`
- 来源：`eu-textiles-bat-2022-2508`

### 过程：熨烫、最终整理与检验（`p04_pressing_inspection`）

#### 输入

##### 产品流

###### 待熨烫服装（`pressing_garment_input`）

组装服装或在适用时的湿法后整理服装，以一个已声明路线状态进入熨烫过程。

- 选定流：Knitted or crocheted garment ready for pressing
- 流属性/单位：Mass / kg
- 数量规则：与前序路线输出核对的转移服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_output`
- 来源：`ijlc-lyocell-dress-2026`

###### 熨烫与检验用电（`pressing_electricity`）

熨烫、检验照明、适用时的金属检测及直接相关设备用电与蒸汽分开记录。

- 选定流：Electricity supplied to garment pressing equipment at the declared voltage and geography
- 流属性/单位：Energy / kWh
- 数量规则：过程分表读数，或从设施电表采用有记录的因果分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_energy`
- 来源：`eu-ef-recommendation-2021`

###### 熨烫外购蒸汽（`pressing_steam`）

熨斗、压烫机或整理柜使用的外购蒸汽作为单独交换记录。有记录的无蒸汽路线可将本行报告为不适用。

- 选定流：Purchased steam supplied to garment pressing
- 流属性/单位：Mass or energy / kg steam or MJ
- 数量规则：分配到已声明产品的计量蒸汽，并保留压力或焓基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 使用外购蒸汽的验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_energy`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装成衣（`finished_unpacked_garment`）

只有符合已声明最终检验准则的服装方可进入销售包装。

- 选定流：Finished knitted or crocheted garment before sale packaging
- 流属性/单位：Mass / kg
- 数量规则：称量或统计受控的合格输出质量；不合格服装单独披露且不计入参考输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_output`
- 来源：`eu-ef-recommendation-2021`

##### 废物流

##### 基本流

### 过程：销售包装（`p05_packaging`）

#### 输入

##### 产品流

###### 进入包装的成衣（`packaging_garment_input`）

合格未包装服装进入包装过程，其参考净质量不发生变化。

- 选定流：Finished knitted or crocheted garment before sale packaging
- 流属性/单位：Mass / kg
- 数量规则：与 `finished_unpacked_garment` 核对的合格成衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_balance`
- 来源：`eu-ef-recommendation-2021`

###### 瓦楞纤维板运输纸箱（`corrugated_carton`）

实际瓦楞纸箱质量与成衣袋和纸质吊牌分开记录。

- 选定流：Corrugated fibreboard shipping carton
- 流属性/单位：Mass / kg
- 数量规则：领用纸箱数量乘以实测单件质量，并与库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_balance`
- 来源：`eu-ef-recommendation-2021`

###### 低密度聚乙烯成衣袋（`ldpe_bag`）

按聚合物、膜厚、再生含量和实测单件质量记录实际成衣袋。

- 选定流：Low-density polyethylene garment bag
- 流属性/单位：Mass / kg
- 数量规则：领用袋数量乘以实测单件质量，并与库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_balance`
- 来源：`eu-ef-recommendation-2021`

###### 印刷纸质成衣吊牌（`paper_hangtag`）

纸质吊牌与缝入式纺织洗护标签分开记录。

- 选定流：Printed paper garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：领用吊牌数量乘以实测单件质量，并与库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_balance`
- 来源：`eu-ef-recommendation-2021`

###### 包装用电（`packaging_electricity`）

封装、贴标、称量及直接相关包装设备用电单独记录。

- 选定流：Electricity supplied to garment packaging equipment at the declared voltage and geography
- 流属性/单位：Energy / kWh
- 数量规则：过程分表读数，或从设施电表采用有记录的因果分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`eu-ef-recommendation-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 销售包装成衣（`final_packaged_garment`）

这是参考产品输出。其数量按 1 kg 成衣净质量归一化，而包装材料仍作为单独定量输入。

- 选定流：Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, knitted or crocheted `06ca6094-ac7b-482e-a629-0def31609f23`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：验收合格成衣净质量归一化为恰好 1 kg；销售包装质量不计入该数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_output`
- 来源：`unsd-cpc-v3-2025`

##### 废物流

###### 瓦楞纤维板包装废物（`packaging_cardboard_waste`）

包装产生的破损纸箱和纸箱边角料与塑料膜废物分开记录。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：分配到已声明生产期间及处置或回收路线的称量废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_balance`
- 来源：`eu-textiles-bat-2022-2508`

###### 低密度聚乙烯包装废物（`packaging_polyethylene_waste`）

包装产生的报废成衣袋和聚乙烯膜废料作为单独聚合物特定废物流记录。

- 选定流：Low-density polyethylene film packaging waste
- 流属性/单位：Mass / kg
- 数量规则：分配到已声明生产期间及处置或回收路线的称量废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成衣净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_balance`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享生产线、公用工程和处理系统 | 在可行范围内，通过过程细分、过程特定计量、批次记录和单独废物计量避免分配。 | `eu-ef-recommendation-2021`; `eu-textiles-bat-2022-2508` |
| `allocation_causal_driver` | 无法细分的共享投入和产出 | 使用有记录的因果驱动因素：电力使用机器运行时间或计量负荷，蒸汽使用计量蒸汽或热负荷，湿法后整理投入和废水使用批次装载与配方，物料平衡使用实测产出或废物质量。仅在证明受影响产品以实质等同方式使用共享作业时方可采用质量分配。 | `eu-ef-recommendation-2021` |
| `allocation_scrap` | 送往回收或资源化的纺织和包装废物 | 在前景边界报告废物质量和去向。不得在该工厂门口数据包内计入替代生产收益；任何回收收益或负荷须在下游生命周期情景中透明建模。 | `eu-ef-recommendation-2021` |
| `allocation_rework` | 同一报告期间内返回的返工 | 将内部返工保留在过程平衡中，仅把未回收的不合格材料计作废物。披露返工率并避免中间服装质量重复计算。 | `eu-textiles-bat-2022-2508` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_material_balance` | `p01_pattern_cutting` | 织物投入、合格裁片和裁剪边角料 | 称量记录、领退料记录和废物票据 | style_code; fabric_lot; fibre_composition; fabric_input_kg; panels_output_kg; scrap_kg; scrap_destination; timestamp | 经校准秤具，并与仓储和裁剪捆包记录核对 | kg | 每生产批次，按月汇总 | 完整覆盖已声明报告期间 | 每个纳入裁剪场址 | 按款式和纤维组成求和；核对投入、裁片、边角料和有记录的库存变化 | 秤具校准；签署的领料记录；废物转移证据；核对差异 |
| `cp_cutting_energy` | `p01_pattern_cutting` | 裁剪电力 | 电表或分表日志 | meter_id; start_kwh; end_kwh; production_lot; machine_hours; allocation_driver | 直接分表；否则按有记录的机器负荷和运行时间分配设施电表 | kWh | 计量间隔不超过一个月 | 完整覆盖已声明报告期间 | 每个纳入裁剪场址 | 汇总直接读数或因果分配；按合格产出质量归一化 | 电表标识；校准或公用事业发票；分配工作表 |
| `cp_assembly_material_balance` | `p02_sewing_assembly` | 裁片、缝纫线、衬料、组装服装和缝纫废料 | 领退料、转移、称量和废物记录 | style_code; panel_input_kg; thread_issued_kg; thread_returned_kg; interfacing_kg; assembled_output_kg; sewing_scrap_kg; destination | 受控仓储记录和经校准秤具 | kg | 每生产批次，按月汇总 | 完整覆盖已声明报告期间 | 每个纳入组装场址 | 按款式求和；核对材料投入、产出、废料、返工和库存变化 | 仓储核对；秤具校准；转移签认；废物票据 |
| `cp_assembly_components` | `p02_sewing_assembly` | 纽扣、拉链和洗护标签 | 物料清单、领退料记录和单件质量样本 | component_id; material; count_issued; count_returned; count_rejected; sample_count; sample_mass_kg | 受控计数，并对同一规格进行代表性单件质量测量 | count 和 kg | 每部件批次和款式 | 完整覆盖已声明报告期间 | 每个纳入组装场址 | 净数量乘以实测单件质量；计入已记录损失 | 批准物料清单；部件规格；秤具校准；样本记录 |
| `cp_assembly_energy` | `p02_sewing_assembly` | 缝纫电力 | 电表或分表日志 | meter_id; start_kwh; end_kwh; machine_hours; style_code; allocation_driver | 直接分表；否则按设备负荷和运行时间因果分配 | kWh | 计量间隔不超过一个月 | 完整覆盖已声明报告期间 | 每个纳入组装场址 | 汇总或分配到款式，再按合格产出质量归一化 | 电表标识；公用事业发票；设备清单；分配工作表 |
| `cp_wet_finish_batch` | `p03_wet_finishing` | 服装装载、水和湿法后整理产出 | 批次票、计量记录和称量记录 | recipe_id; batch_id; garment_input_kg; water_m3; garment_output_kg; start_time; end_time; conditioning_state | 批次受控记录、水表和经校准秤具 | kg 和 m3 | 每湿法后整理批次 | 完整覆盖已声明报告期间 | 每个纳入湿法后整理场址 | 按配方和款式求和；按接受该路线的合格成衣质量归一化 | 批准配方；电表标识；秤具校准；批次放行记录 |
| `cp_wet_finish_chemicals` | `p03_wet_finishing` | 洗涤剂、染料和柔软剂 | 配方领用和库存记录 | chemical_id; commercial_name; function; batch_id; issued_kg; returned_kg; stock_change_kg; safety_data_sheet | 受控化学品投加并与库存核对 | kg | 每湿法后整理批次 | 完整覆盖已声明报告期间 | 每个纳入湿法后整理场址 | 按化学品身份和配方计算净领用质量 | 批准配方；投加校准；库存核对；安全数据表 |
| `cp_wet_finish_energy` | `p03_wet_finishing` | 电力和外购蒸汽 | 电力和蒸汽表日志 | meter_id; electricity_kwh; steam_kg_or_mj; pressure; enthalpy_basis; batch_id; allocation_driver | 直接过程计量；否则进行批次因果分配 | kWh、kg steam 或 MJ | 每批次或计量间隔不超过一个月 | 完整覆盖已声明报告期间 | 每个纳入湿法后整理场址 | 电力和蒸汽保持分开；按计量负荷、批次时间和热需求分配 | 计量记录；供应商发票；换算工作表；批次日志 |
| `cp_wet_finish_fuel` | `p03_wet_finishing` | 天然气和直接化石二氧化碳 | 燃料表、发票和经核实因子记录 | meter_id; natural_gas_m3_or_mj; heating_value_basis; carbon_content_or_factor; oxidation_factor; batch_id | 直接燃料表或发票核对；使用适用经核实因子计算直接 CO2 | m3 或 MJ fuel；kg CO2 | 计量间隔不超过一个月 | 完整覆盖已声明报告期间 | 每个纳入直接燃烧湿法后整理场址 | 将燃料因果分配到湿法后整理批次，并按 `calc_direct_fossil_co2` 计算直接化石 CO2 | 计量与发票；因子出处；计算工作表；燃烧设备记录 |
| `cp_wet_finish_wastewater` | `p03_wet_finishing` | 废水和处理污泥 | 排水表、实验室、污泥称量和转移记录 | wastewater_m3; pH; temperature; COD_or_TOC; colour; relevant_recipe_parameters; sludge_wet_kg; sludge_dry_matter; destination | 计量排水、代表性采样、适用时的认可分析和经校准秤具 | m3、kg 和已声明浓度单位 | 每批次记录流量；分析频率由许可和配方风险论证 | 完整覆盖已声明报告期间 | 每个纳入湿法后整理和现场处理场址 | 按配方汇总体积和质量；保留浓度和干物质基准；不得合并废水和污泥 | 电表标识；采样链；实验室报告；秤具校准；废物转移单 |
| `cp_pressing_energy` | `p04_pressing_inspection` | 熨烫电力和外购蒸汽 | 电表或分表日志 | electricity_kwh; steam_kg_or_mj; pressure; enthalpy_basis; operating_hours; style_code; allocation_driver | 直接计量；否则按设备负荷和运行时间因果分配 | kWh、kg steam 或 MJ | 计量间隔不超过一个月 | 完整覆盖已声明报告期间 | 每个纳入熨烫场址 | 电力和蒸汽保持分开；按合格产出质量归一化 | 电表标识；公用事业或蒸汽发票；设备清单；分配工作表 |
| `cp_pressing_output` | `p04_pressing_inspection` | 服装投入、合格产出、不合格和返工 | 转移、检验和称量记录 | style_code; input_kg; accepted_count; accepted_kg; rejected_count; rejected_kg; rework_count; defect_code | 受控转移和检验记录，并进行代表性质量检查 | count 和 kg | 每生产批次 | 完整覆盖已声明报告期间 | 每个纳入最终检验场址 | 从参考质量排除不合格产出；核对返工且不重复计算 | 批准检验准则；签署放行；秤具校准；缺陷日志 |
| `cp_packaging_material_balance` | `p05_packaging` | 纸箱、成衣袋、吊牌、成衣投入和包装废物 | 物料清单、领退料、单件质量和废物记录 | packaging_item_id; material; recycled_content; count_issued; count_returned; sample_count; sample_mass_kg; waste_kg; destination; garment_input_kg | 受控计数和代表性单件质量测量，并与库存和废物核对 | count 和 kg | 每包装批次和款式 | 完整覆盖已声明报告期间 | 每个纳入包装场址 | 每种包装材料单独计算，并核对领用、退回、包装和废弃数量 | 批准包装规格；秤具校准；样本记录；废物转移单 |
| `cp_packaging_energy` | `p05_packaging` | 包装电力 | 电表或分表日志 | meter_id; start_kwh; end_kwh; equipment_hours; packed_units; allocation_driver | 直接计量；否则按设备负荷和运行时间因果分配 | kWh | 计量间隔不超过一个月 | 完整覆盖已声明报告期间 | 每个纳入包装场址 | 汇总或分配，再按合格成衣净质量归一化 | 电表标识；公用事业发票；设备清单；分配工作表 |
| `cp_final_output` | `p05_packaging` | 参考产品输出 | 最终放行、计数和质量记录 | style_code; size; accepted_count; net_garment_mass_kg; sale_packaging_mass_kg; release_date | 使用经校准秤具称量代表性或全部合格输出，并单独扣除包装皮重 | kg | 每生产批次 | 完整覆盖已声明报告期间 | 每个纳入包装场址 | 汇总合格成衣净质量；所有归一化交换除以该质量；包装保持分开 | 秤具校准；皮重程序；最终放行记录；批次核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个清单行 | 归一化数量 = 同一范围内的期间或批次交换量 / 合格成衣净质量 | 原子交换记录；`cp_final_output.net_garment_mass_kg` | 每 1 kg 验收合格成衣净质量的交换量 | `eu-ef-recommendation-2021` |
| `calc_component_mass` | `garment_button`, `garment_zipper`, `garment_care_label`, `corrugated_carton`, `ldpe_bag`, `paper_hangtag` | 部件质量 = 净领用部件数量 × 同一规格实测单件质量 | 领用数量；退回数量；报废数量；样本质量；样本数量 | 已命名部件的 kg 质量 | `eu-textiles-bat-2022-2508` |
| `calc_material_balance` | 裁剪、组装、湿法后整理、熨烫和包装 | 核对实测投入 = 合格产出 + 废物产出 + 净库存变化 + 已量化过程损失；调查并披露物料残差 | 过程投入、产出、废物、返工和库存记录 | 过程质量平衡残差和完整性标志 | `eu-textiles-bat-2022-2508` |
| `calc_direct_fossil_co2` | `direct_fossil_co2` | 直接化石 CO2 = 采集燃料量 × 经核实碳含量或适用 CO2 因子 × 有记录的氧化/换算项；不得替代为无引用的默认因子 | 天然气记录；热值基准；因子出处；氧化因子 | 排入空气的 kg 化石 CO2 | `eu-textiles-bat-2022-2508` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和所有产品投入 | 保留款式、尺码组合、纤维组成、织物结构、辅料规格、化学品身份、包装规格、供应商、地域和生产期间，使每项交换可选择一个真实上游流。 | 批准物料清单；供应商规格；批次记录；`unsd-cpc-v3-2025` |
| `dq_primary_manufacturing` | 所有前景过程 | 制造交换使用公司特定测量和记录。代理或模型值须单独识别和论证，且不得声称其具有完整初级数据覆盖。 | 计量日志；发票；领退料记录；批次票；`eu-ef-recommendation-2021` |
| `dq_temporal` | 所有记录 | 覆盖代表正常生产的连续期间；可获得时通常至少十二个月；披露起止日期、停产、异常运行和款式组合变化。 | 报告期间登记；生产日历；例外日志 |
| `dq_completeness` | 投入、产出、废水、废物和直接排放 | 证明过程级投入产出核对，并分别核算每种材料、化学品、能源载体、废物类型和相关直接排放。 | 质量和能量平衡；废物票据；排放计算；`eu-textiles-bat-2022-2508` |
| `dq_measurement` | 计量、称量、计数和实验室数据 | 保留仪器身份、校准或核查证据、采样方法、单位换算及任何件数转质量的样本依据。 | 校准证书；实验室报告；采样和换算工作表 |
| `dq_route_disclosure` | 条件适用的湿法后整理及蒸汽/燃料路线 | 声明每项条件路线是否发生。正确状态为不适用时，不得把零报告为实测用量。 | 路线声明；配方登记；设备和公用工程记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 要求精确产品流 UUID `06ca6094-ac7b-482e-a629-0def31609f23`、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、kg 单位、CPC 28223 范围和全部必需限定信息。 | `unsd-cpc-v3-2025` |
| `validate_reference_mass` | 参考输出和包装 | 要求参考输出归一化为恰好 1 kg 验收合格成衣净质量，并核验销售包装质量单独报告。 | `eu-ef-recommendation-2021` |
| `validate_atomic_inventory` | 所有清单卡片 | 拒绝把一种以上材料、化学品、能源载体、废物流或基本流排放合并到一个卡片；电力、蒸汽和天然气必须保持分开。 | `eu-textiles-bat-2022-2508` |
| `validate_process_coverage` | 前景过程图 | 要求裁剪、组装、熨烫/检验和包装记录；已声明路线含洗涤、染色、柔软或其他湿法过程时要求湿法后整理记录。 | `ec-apparel-footwear-pefcr-2025`; `ijlc-lyocell-dress-2026` |
| `validate_material_balance` | 各过程和报告期间 | 要求有记录的投入产出平衡，并在数据包被视为完整前调查无法解释的残差。 | `eu-textiles-bat-2022-2508` |
| `validate_uuid_evidence` | 每个带 UUID 的清单行 | 仅在所选记录具有精确语义身份并完成公开 state100 直读确认时接受 Tiangong UUID；否则要求 UUID 缺省，且身份缺口保留在 manifest 审查元数据。 |  |
| `validate_allocation` | 共享设施数据 | 要求过程细分或有记录的因果分配驱动因素，并拒绝无记录的质量分配或未分配共享公用工程。 | `eu-ef-recommendation-2021` |
| `validate_data_quality` | 前景数据包 | 要求来源期间、场址范围、计量和秤具证据、部件换算记录、适用时的废水证据、废物去向、路线披露及明确数据缺口。 | `eu-textiles-bat-2022-2508`; `eu-ef-recommendation-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明 CPC 28223 服装产品或可论证生产组合的工厂门口前景制造数据集 |
| downstream_use | `secondary_dataset`; 经独立审查和发布控制后可作 `background_dataset` |
| allowed_use | 产品 LCA、服装生命周期建模、产品足迹研究、供应链清单、热点分析；仅在功能等效、产品规格、地域、期间和数据质量兼容时用于比较 |
| excluded_use | 未进行下游使用阶段建模的消费者使用或寿命声明；代表非针织或非钩编服装；在无披露情景分析时替代纤维、辅料、湿法后整理、包装、地域或技术画像实质不同的产品 |
| required_metadata | 规范 PCR id；参考 UUID；CPC 坐标；款式和尺码组合；纤维和辅料组成；生产路线；设施地域；报告期间；成衣净质量；销售包装；再生含量；湿法后整理适用性；公用工程供应；废物去向；分配方法；source ids |
| required_quality_disclosure | 初级数据占比；计量和秤具覆盖；采样和换算方法；物料平衡残差；缺失 UUID；上游代理；条件路线覆盖；时间和地域代表性；分配驱动因素；核查状态 |
| update_trigger | 产品规格、纤维或辅料组成、湿法后整理配方、设施或设备、能源或蒸汽供应、废物路线、包装、分配方法、来源证据、参考 UUID 发生实质变化，或报告期间不再代表当前生产 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | 联合国统计司，*CPC Version 3.0 Explanatory Notes*，2025 年 6 月 30 日更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-13） | CPC 28223 官方范围及相邻服装子类排除项 |
| `eu-ef-recommendation-2021` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，ELI http://data.europa.eu/eli/reco/2021/2279/2021-12-30（检索于 2026-08-13） | 功能单位与参考流、系统边界、公司特定制造数据、透明报告、包装和分配层级 |
| `eu-textiles-bat-2022-2508` | `standard` | 欧盟委员会，Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13） | 过程投入产出清单；纺织材料和化学品；水、能源、废水、废物和直接排放监测；过程级采集与质量证据 |
| `ec-apparel-footwear-pefcr-2025` | `official_guidance` | 欧盟委员会环境总司，*New EU rules for measuring environmental impact of clothes and shoes*，2025 年 6 月 25 日，https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en（检索于 2026-08-13） | 服装类别规则语境，以及制造前景数据与原材料、物流、使用和生命末期阶段的连接 |
| `ijlc-lyocell-dress-2026` | `literature` | *Time-explicit life cycle assessment of a lyocell dress using bw_timex with biogenic carbon accounting*，The International Journal of Life Cycle Assessment（2026），DOI 10.1007/s11367-026-02616-1 | 服装生产分解、裁剪和缝纫作为最终服装生产步骤、材料损失核算，以及电力和热能投入分开记录 |
