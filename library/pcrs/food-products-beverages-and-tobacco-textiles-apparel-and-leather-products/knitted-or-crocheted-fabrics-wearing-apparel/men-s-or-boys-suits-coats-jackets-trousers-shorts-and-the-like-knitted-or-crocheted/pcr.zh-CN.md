---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-knitted-or-crocheted
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 针织或钩编的男式或男童西服套装、大衣、夹克、长裤、短裤及类似服装

## 1. 范围与适用性

本 PCR 规范 CPC 28221 所涵盖的针织或钩编男式或男童西服套装、套装式服装、大衣、夹克、西装上衣、长裤、马裤、短裤的前景数据包生产。它适用于在制造工厂门口处于可销售状态，并已声明款式、纤维成分、尺码范围、结构、颜色、整理和组件配置的服装。

代表性前景路线从交付给成衣制造商的成品 65% 聚酯纤维/35% 棉纬编外层面料及其他外购组件开始。其包括物料接收、铺布与裁剪、缝制与组装、条件性成衣湿处理、终检、包装以及这些操作产生的废物。纤维、纱线、针织、面料染整、外购电力和蒸汽、包装制造、入厂运输与场外处理，除非由所声明的经营者直接控制，否则均保留为相连接的上游服务。

固定的代表性材料路线使每张清单卡保持物理具体性，但不为全部涵盖产品规定统一成分。采用其他已声明物料清单的数据包，应替换或新增材料特定的原子卡片，不得合并面料、辅料、公用工程、化学品、包装、废物或排放。分销、零售、消费者使用与护理、再使用和生命末期不属于本制造前景数据包，可在下游生命周期模型中连接。

排除产品包括机织或其他非针织/非钩编服装；衬衫、内衣、睡衣、T 恤、毛衣和开衫；女式或女童服装；婴儿服装；运动套装、滑雪服和泳装；皮革、毛皮、纯塑料、毡、非织造或涂层面料服装；服装配件；以及作为中间产品销售的针织或钩编面料。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-knitted-or-crocheted |
| classification_refs | CPC 3.0：28221，精确映射语境 |
| covered_products | 成品针织或钩编男式或男童西服套装、套装式服装、大衣、夹克、西装上衣、长裤、马裤、短裤及直接可比服装 |
| excluded_products | 机织/非针织服装；衬衫和内衣；T 恤和背心；毛衣和开衫；女式、女童或婴儿服装；另行分类的运动和游泳服装；皮革、毛皮、纯塑料、毡、非织造或涂层面料服装；配件；作为中间产品销售的面料 |
| representative_product | 一件以成品 65% 聚酯纤维/35% 棉纬编外层面料制成的男式针织夹克或长裤，声明里料、衬料、拉链和纽扣适用性、尺码组合、颜色、整理与单件净质量 |
| production_route | 外购成品针织外层面料和具体组件 -> 铺布与裁剪 -> 缝制与组装 -> 条件性成衣湿整理 -> 终检与包装 |
| market_state | 制造工厂门口可销售成品服装；净产品质量不含消费包装和运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造工厂门口的成品、可销售针织或钩编 CPC 28221 男式或男童西服类服装、大衣、夹克、长裤、马裤、短裤或可比服装 |
| How much | 1 kg 净合格服装质量，不含包装 |
| How well | 符合声明的产品规格和最终验收标准，并声明服装子型、纤维成分、结构、尺码或产量加权尺码组合、组件、颜色、整理与含湿状态 |
| How long or cycle | 一个声明的生产批次或代表性报告期；使用寿命和穿着次数属于独立的下游使用限定信息 |
| reference_flow_link | 质量归一化的制造参考流；转换为单件或基于使用的功能单位时，必须采用实测服装质量以及明确的寿命/使用情景 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格成品服装 |
| 参考产品流 | Men's or boys' suits, coats, jackets, trousers, shorts and the like, knitted or crocheted `e5e9f30a-061b-4cbc-bdb3-3d86985acff6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装子型；预期穿着者群体；纤维成分和质量百分比；针织或钩编结构；外层面料、里料与衬料规格；辅料与闭合件配置；尺码或产量加权尺码组合；单件服装质量或分布；颜色与着色路线；整理处理；成品含湿状态；制造场址和地理位置；所含操作；报告期；包装排除；投影为基于使用的功能单位时的预期使用次数和护理情景 |

构建前景数据包时，`必需限定信息` 中每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿后、包装前确定净合格服装质量；将每项前景交换归一化至恰好 1 kg 净合格服装。 |
| `packaging_mass_separate` | PE-LD 服装袋和瓦楞纸板运输箱 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别计量每个包装组件，并从参考产品质量中排除其质量。 |
| `component_count_to_mass` | 拉链、纽扣、标签及其他按件计数组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一组件规格和报告期内经核验的平均单件质量换算件数；保留样本数、秤分辨率、均值与变异性。 |
| `textile_mass_condition` | 外层面料、里料、衬料、缝纫线、裁片、成衣、次品和纺织废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料跨越过程边界时的状态记录质量，并披露任何调湿或水分校正。 |
| `electricity_metering` | 用户侧电力输入 | Energy | kWh | 使用过程分表或有文件依据的物理分配记录用户侧电力；保留电网地理位置、电压等级、计量区间与分配驱动。 |
| `water_measurement` | 成衣整理工艺水和废水 | Volume | m3 | 分别计量进水和废水；披露循环用水、密度换算与任何未计量平衡项。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付给第一个前景成衣制造操作的成品 65% 聚酯纤维/35% 棉纬编外层面料，以及每种具体外购缝纫线、里料、衬料、闭合件、包装、化学品和公用工程 |
| starting_condition_role | 可追溯的成衣制造上游产品输入，不是无负担原材料 |
| product_classification_scope | 成品参考产品为 CPC 3.0 28221；面料、纱线、组件、化学品、公用工程、包装、运输和处理服务保留其自身身份 |
| recursive_input_rule | 如果一项输入已经是 CPC 28221 成品服装，则将其记录为单独识别的再使用、返工或中间服装输入，不在本前景数据包中递归重建其历史 |
| upstream_dataset_requirement | 为每种外购面料和组件、面料数据集尚未包含的纤维和纱线生产、针织和面料湿处理、外购能源、包装制造、入厂运输以及场外废物或废水处理要求具有代表性的上游数据集 |
| disclosure | 声明经营者控制、地理位置、技术、报告期、物料清单、供应商路线、全部纳入和排除操作，以及每项代理或数据缺口 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | 成衣制造 | 纳入物料接收与准备、铺布与裁剪、缝制与组装、终检、包装、直接控制的公用工程、产品次品和产生的废物。 | `af-pefcr-2025-v3-1` |
| `boundary_conditional_wet_finishing` | 成衣阶段湿处理或热处理 | 当由前景控制时，纳入洗涤、化学处理、染色、印花、涂层、焙烘、干燥、直接相关公用工程、废水、废物和相关直接排放；否则防止与上游数据集重复计入。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`; `af-pefcr-2025-v3-1` |
| `boundary_upstream_traceability` | 外购材料和服务 | 不得将交付面料、缝纫线、里料、衬料、闭合件、包装、电力、蒸汽、运输或处理视为无负担；将每项连接至有代表性的上游数据集，或披露缺口。 | `ec-pef-2021-2279`; `af-pefcr-2025-v3-1` |
| `boundary_manufacturing_waste` | 每个前景过程 | 在废物产生的过程中纳入制造废物，保留材料身份和去向，不得将次品或边角料隐藏在产品产率中。 | `af-pefcr-2025-v3-1` |
| `boundary_atomic_exchange` | 每条清单行 | 每行只表示一种化学或物理上具体的交换；每种面料、辅料、公用工程、化学品、包装组件、废物流和基本流排放应使用独立行。 | `eu-textiles-bat-2022-2508` |
| `boundary_downstream_separation` | 数据集使用 | 将分销、零售、消费者护理、再使用和生命末期保留在制造前景数据包之外，同时保留在下游连接这些阶段所需的元数据。 | `ec-pef-2021-2279`; `af-pefcr-2025-v3-1` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 物料接收、铺布与裁剪 | required | 代表性外购面料路线始终纳入 | 前景物料准备 | kg 合格外层裁片 |
| `garment_assembly` | 缝制与成衣组装 | required | 始终纳入 | 裁片与适用组件的前景组装 | kg 合格组装成衣 |
| `garment_wet_finishing` | 场内成衣湿整理或热整理 | conditional | 仅在报告场址进行洗涤、化学处理、成衣染色、印花、涂层、焙烘、干燥或相关处理时纳入 | 前景整理 | kg 合格湿整理成衣 |
| `inspection_packaging` | 终检与包装 | required | 制造工厂门口放行前始终纳入 | 前景质量放行和包装 | 1 kg 净合格成品服装 |

### 过程：物料接收、铺布与裁剪（`material_cutting`）

#### 输入

##### 产品流

###### 成品针织涤棉外层面料（`knitted_polycotton_shell_fabric`）

成品 65% 聚酯纤维/35% 棉纬编外层面料作为代表性路线的主要材料跨越前景边界。分别记录每个供应商批次和湿处理状态。

- 选定流：成品 65% 聚酯纤维/35% 棉纬编外层面料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据经核验的领料、退料与库存变动记录计算净面料消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`af-pefcr-2025-v3-1`

###### 裁剪用户侧电力（`cutting_electricity`）

铺布、裁剪、抽风及直接相关控制所用电力与缝制、整理和包装用电分别记录。

- 选定流：用户侧低压交流电力
- 流属性/单位：Energy / kWh
- 数量规则：裁剪设备及其直接辅助设备的分表用电量，或有文件依据的物理分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格外层裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：`af-pefcr-2025-v3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格针织外层裁片（`cut_shell_panels`）

为所声明服装子型验收合格的裁片是铺布和裁剪过程的实测内部输出。

- 选定流：65% 聚酯纤维/35% 棉针织服装外层裁片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至成衣组装的合格裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格外层裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`af-pefcr-2025-v3-1`

##### 废物流

###### 针织外层面料裁剪废料（`polycotton_cutting_scrap`）

代表性外层面料的边角料和不可用布片作为一种成分特定的废物交换离开裁剪过程；保留实际去向。

- 选定流：65% 聚酯纤维/35% 棉针织裁剪废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按裁剪批次和去向实测净废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格外层裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`af-pefcr-2025-v3-1`

##### 基本流

### 过程：缝制与成衣组装（`garment_assembly`）

#### 输入

##### 产品流

###### 用于组装的针织外层裁片（`cut_shell_panels_for_assembly`）

从裁剪过程转移的合格外层裁片作为缝制与组装的内部材料输入记录。

- 选定流：65% 聚酯纤维/35% 棉针织服装外层裁片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自 material_cutting 的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`af-pefcr-2025-v3-1`

###### 聚酯纤维缝纫线（`polyester_sewing_thread`）

跨越场址边界的成品聚酯纤维缝纫线与外层面料及其他组件独立记录。

- 选定流：成品聚酯纤维缝纫线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领料质量减去有文件记录的退料所得净缝纫线消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`af-pefcr-2025-v3-1`

###### 机织聚酯纤维服装里料（`woven_polyester_lining`）

机织聚酯纤维里料是有里夹克、大衣、西服套装或长裤的一项独立条件组件；仅当经批准的物料清单确认没有里料时才不适用。

- 选定流：成品 100% 聚酯纤维机织服装里料，90 g/m2
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据领料、退料与库存变动记录计算净里料消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`af-pefcr-2025-v3-1`

###### 聚酯纤维粘合服装衬料（`polyester_fusible_interlining`）

使用聚酯纤维粘合衬料稳定前片、领部、腰头或可比服装部件时，将其作为独立条件交换记录。

- 选定流：100% 聚酯纤维非织造粘合服装衬料，45 g/m2
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据领料、退料与库存变动记录计算净衬料消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`af-pefcr-2025-v3-1`

###### 尼龙线圈服装拉链（`nylon_coil_zipper`）

服装规格规定使用尼龙线圈拉链时，将其独立记录；质量来自经核验的组件质量和批次级计数。

- 选定流：5 号尼龙线圈聚酯带拉链
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：安装拉链件数乘以经核验的平均单件质量，并与领料和退料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_count_mass_records`
- 来源：`af-pefcr-2025-v3-1`

###### 聚酯四孔服装纽扣（`polyester_four_hole_button`）

经批准的服装规格含有聚酯四孔纽扣时，将其作为一种组件特定交换记录。

- 选定流：15 mm 聚酯四孔服装纽扣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：安装纽扣件数乘以经核验的平均单件质量，并与领料和退料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_count_mass_records`
- 来源：`af-pefcr-2025-v3-1`

###### 成衣组装用户侧电力（`assembly_electricity`）

缝纫机、电力熨烫设备、抽风及直接相关组装控制所用电力仅在本过程中记录。

- 选定流：用户侧低压交流电力
- 流属性/单位：Energy / kWh
- 数量规则：缝制与组装的分表用电量，或有文件依据的物理分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：`af-pefcr-2025-v3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格组装针织成衣（`assembled_knitted_garment`）

缝制和组装后验收合格的成衣在条件性湿整理或终检前计量。

- 选定流：组装完成的 65% 聚酯纤维/35% 棉针织男式服装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格组装输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`af-pefcr-2025-v3-1`

##### 废物流

###### 聚酯缝纫线线头（`polyester_thread_offcuts`）

线头和不可用聚酯缝纫线段作为一种具体废物交换离开组装过程，不与外层面料裁剪废料合并。

- 选定流：聚酯缝纫线线头
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按生产批次和去向实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`af-pefcr-2025-v3-1`

##### 基本流

### 过程：场内成衣湿整理或热整理（`garment_wet_finishing`）

#### 输入

##### 产品流

###### 进入湿整理的组装成衣（`assembled_garment_for_wet_finishing`）

转入声明的洗涤或湿整理配方的组装成衣在处理前计量。

- 选定流：组装完成的 65% 聚酯纤维/35% 棉针织男式服装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入纳入范围内湿整理批次的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 成衣整理工艺水（`finishing_process_water`）

供应成衣洗涤或湿整理的新鲜工艺水与循环用水和废水分别记录。

- 选定流：成衣湿整理用新鲜工艺水
- 流属性/单位：Volume / m3
- 数量规则：分配至所声明整理批次的计量新鲜水输入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 非离子成衣洗涤剂（`nonionic_detergent`）

所声明的非离子洗涤剂制剂与氢氧化钠及每种其他工艺化学品独立记录。

- 选定流：C12-15 脂肪醇聚氧乙烯醚（7 EO）70% 水溶液洗涤剂制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所声明配方的净制剂领用质量，并与退料和库存记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 碱处理用氢氧化钠（`sodium_hydroxide`）

经批准的成衣整理配方使用碱处理时，氢氧化钠是一项独立条件化学品交换。

- 选定流：氢氧化钠 50% 水溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所声明配方的 50% 溶液净领用质量，并与退料和库存记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 成衣整理用饱和蒸汽（`saturated_steam`）

浴液加热、熨烫、干燥或焙烘使用的外购饱和蒸汽与电力和场内燃料独立记录。

- 选定流：0.5 MPa(g) 外购饱和蒸汽
- 流属性/单位：Mass / kg
- 数量规则：供给所声明整理批次的计量蒸汽；仅当供应商核算采用该基础时扣除单独计量的冷凝水回流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 成衣整理用户侧电力（`finishing_electricity`）

洗涤设备、泵、脱水、干燥、焙烘及直接相关控制所用电力仅在整理过程中记录。

- 选定流：用户侧低压交流电力
- 流属性/单位：Energy / kWh
- 数量规则：纳入整理批次的分表用电量，或有文件依据的物理分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格湿整理针织成衣（`wet_finished_knitted_garment`）

声明的湿处理或热处理和调湿后验收合格的成衣是该过程的实测输出。

- 选定流：湿整理后的 65% 聚酯纤维/35% 棉针织男式服装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入终检的实测调湿合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### 废物流

###### 成衣湿整理废水（`garment_finishing_wastewater`）

所声明成衣整理配方排出的废水与新鲜水、化学品和固体残渣独立记录，并保留实际处理路线。

- 选定流：65% 聚酯纤维/35% 棉针织服装湿整理废水
- 流属性/单位：Volume / m3
- 数量规则：分配至所声明整理批次的计量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格湿整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### 基本流

### 过程：终检与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入终检的组装成衣（`assembled_garment_for_inspection`）

当 garment_wet_finishing 不适用时，组装完成的针织成衣直接进入终检，并在合格/不合格处置前计量。

- 选定流：组装完成的 65% 聚酯纤维/35% 棉针织男式服装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从 garment_assembly 转入终检的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`af-pefcr-2025-v3-1`

###### 进入终检的湿整理成衣（`wet_finished_garment_for_inspection`）

当 garment_wet_finishing 适用时，湿整理后的针织成衣进入终检，并在合格/不合格处置前计量。

- 选定流：湿整理后的 65% 聚酯纤维/35% 棉针织男式服装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从 garment_wet_finishing 转入终检的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`af-pefcr-2025-v3-1`

###### 检验与包装用户侧电力（`inspection_packaging_electricity`）

检验照明、测试设备、折叠、封袋、装箱及直接相关控制所用电力仅在本过程中记录。

- 选定流：用户侧低压交流电力
- 流属性/单位：Energy / kWh
- 数量规则：终检与包装的分表用电量，或有文件依据的物理分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：`af-pefcr-2025-v3-1`

###### 低密度聚乙烯服装袋（`pe_ld_garment_bag`）

单件 PE-LD 服装袋与瓦楞纸板运输包装分开记录，并从净服装质量中排除。

- 选定流：30 微米低密度聚乙烯单件服装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放服装袋件数乘以经核验的平均单件质量，再扣除有记录的未用退料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-2025-v3-1`

###### 瓦楞纸板运输箱（`corrugated_board_shipping_box`）

用于运输成品服装的瓦楞纸板箱作为独立包装交换记录，并从净服装质量中排除。

- 选定流：双层瓦楞纸板服装运输箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所包装服装分配纸箱件数，并乘以经核验的平均纸箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-2025-v3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净合格 CPC 28221 成品服装（`finished_cpc28221_garment`）

这是定量参考输出。包装不计入其质量，并在单独的输入卡中记录。

- 选定流：Men's or boys' suits, coats, jackets, trousers, shorts and the like, knitted or crocheted `e5e9f30a-061b-4cbc-bdb3-3d86985acff6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测净合格输出归一化后恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-2025`

##### 废物流

###### 不合格成品针织服装（`rejected_finished_garment`）

终检后不合格的成品服装与合格输出分开记录，并保留返工、再使用、回收或处置去向。

- 选定流：不合格 65% 聚酯纤维/35% 棉针织男式服装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向实测不合格服装净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`af-pefcr-2025-v3-1`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 不同服装子型、材料、整理路线和包装配置 | 在应用分配前，细分生产订单和过程并使用产品特定记录。 | `ec-pef-2021-2279`; `af-pefcr-2025-v3-1` |
| `allocation_assembly_units` | 共用缝制与组装操作 | 无法细分时，仅在产品接受等效操作的情况下按实测生产件数分配组装活动；否则采用实测运行时间或其他有文件依据的因果驱动。 | `af-pefcr-2025-v3-1` |
| `allocation_shared_utilities` | 共用电力、蒸汽、水和共用设备 | 优先使用专用计量；否则按运行时间、吞吐量、蒸汽需求或计量批次体积等有文件依据的物理驱动分配，并披露敏感性。 | `ec-pef-2021-2279`; `eu-textiles-bat-2022-2508` |
| `allocation_rework_internal` | 制造场址内保留的返工 | 将返工循环保留在内部，记录额外实测输入，不为返工服装产生共产品抵扣。 | `ec-pef-2021-2279` |
| `allocation_scrap_destination` | 裁剪废料、缝纫线线头和不合格服装 | 记录废物质量和去向，不在前景数据包内赋予避免负担抵扣；下游回收或替代属于明确声明的下游模型。 | `ec-pef-2021-2279`; `af-pefcr-2025-v3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `material_cutting`; `garment_assembly` | 外层面料、缝纫线、里料和衬料 | 收货、领料、退料、库存和称量记录 | 材料身份；成分；规格；供应商批次；期初库存；收货；领料；退料；期末库存；净质量 | 经校准秤和受控库存记录 | kg | 每个材料批次和生产订单 | 完整报告期 | 全部纳入仓库、裁剪线和组装线 | 按材料和订单计算净消耗量；与库存变动核对 | 秤校准；供应商规格；批次追溯；库存核对 |
| `cp_component_count_mass_records` | `garment_assembly` | 尼龙线圈拉链和聚酯四孔纽扣 | 组件领退料和单件质量测试记录 | 组件身份；规格；批次；领用件数；退回件数；安装件数；样本数；样本质量；平均单件质量 | 受控计数加经校准秤单件质量测试 | 件和 kg | 每个组件批次和生产订单 | 完整报告期 | 全部纳入组装线 | 净安装件数 × 经核验平均单件质量；与领料减退料核对 | 计数核对；秤校准；单件质量测试；物料清单 |
| `cp_electricity_records` | `material_cutting`; `garment_assembly`; `garment_wet_finishing`; `inspection_packaging` | 用户侧低压电力 | 过程分表或有文件依据的分配记录 | 电表 id；起始读数；终止读数；kWh；过程 id；批次；时间区间；共表分配驱动 | 经校准分表；仅在无专用计量时采用有文件依据的物理分配 | kWh | 每批或计量区间 | 完整报告期 | 每个纳入用电点 | 有效读数差仅分配一次至过程和批次 | 校准；读数日志；分配工作表；发票核对 |
| `cp_production_output_records` | `material_cutting`; `garment_assembly`; `inspection_packaging` | 裁片、组装成衣、检验输入和合格输出 | 生产转移、称量和检验记录 | 产品 id；服装子型；订单；批次；限定信息；毛质量；包装质量；净质量；合格数量；不合格数量 | 与生产和放行记录关联的经校准秤 | kg | 每个生产批次 | 完整报告期 | 全部纳入生产线 | 合计合格净输出；与次品和包装分别记录 | 秤校准；转移记录；检验放行；批次谱系 |
| `cp_waste_mass_records` | `material_cutting`; `garment_assembly`; `inspection_packaging` | 针织裁剪废料、聚酯缝纫线线头和不合格服装 | 废物称量和转移记录 | 废物身份；成分；来源 row_id；批次；毛质量；皮重；净质量；返工状态；去向 | 在产生或发运处用经校准秤称量，并与去向证据核对 | kg | 每次废物转移 | 完整报告期 | 每个纳入废物产生点 | 按原子废物行、批次和去向合计净质量 | 秤校准；转移单；去向收据；返工日志 |
| `cp_wet_finishing_records` | `garment_wet_finishing` | 成衣输入/输出、新鲜工艺水和废水 | 批次单、转移称量和进出水计量记录 | 配方 id；服装批次；输入质量；输出质量；进水表；出水表；循环水；排放路线；处理 | 与整理批次关联的经校准秤和流量计 | kg 和 m3 | 每个整理批次或计量区间 | 完整报告期 | 全部纳入整理线和排放点 | 分别汇总每项交换；核对成衣和水量平衡 | 校准；批次单；水平衡；排放记录 |
| `cp_chemical_recipe_records` | `garment_wet_finishing` | 非离子洗涤剂和氢氧化钠 | 配方、领料、退料、浓度和库存记录 | 化学品身份；制剂；供应商；批次；领用质量；退回质量；活性分数；配方 id | 受控配方和库存记录，并与供应商规格或安全数据表核对 | kg 制剂和 kg 活性物 | 每个整理批次 | 完整报告期 | 每个纳入配方和生产线 | 按化学品计算净制剂质量；仅在规定时计算活性物当量质量 | 批次单；供应商规格；安全数据表；库存核对 |
| `cp_steam_records` | `garment_wet_finishing` | 外购饱和蒸汽 | 蒸汽计量和供应商记录 | 仪表 id；起始读数；终止读数；蒸汽质量；压力；冷凝水回流；批次 | 经校准蒸汽表，并与供应商发票核对 | kg | 每个批次或计量区间 | 完整报告期 | 全部纳入蒸汽用户 | 将有效仪表读数差分配至适用批次 | 校准；供应商发票；压力日志；冷凝水记录 |
| `cp_packaging_records` | `inspection_packaging` | PE-LD 服装袋和瓦楞纸板箱 | 包装领退料、计数、规格和单件质量记录 | 包装身份；材料；规格；领用件数；退回件数；包装服装件数；样本质量；平均单件质量 | 受控计数记录加经校准秤单件质量测试 | 件和 kg | 每个包装批次和生产订单 | 完整报告期 | 每个纳入包装线 | 净包装件数 × 经核验平均单件质量；按包装服装质量分配共用纸箱 | 规格；计数核对；秤校准；包装记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | 每项领用面料、缝纫线、里料、衬料和包装输入 | 净消耗量 = 期初库存 + 收货 - 期末库存 - 有文件记录的未用退料，并与生产领料核对 | 库存和交易记录 | kg 净材料消耗量 | `af-pefcr-2025-v3-1` |
| `calc_component_mass` | 尼龙线圈拉链和聚酯四孔纽扣 | 组件质量 = 经核验的净安装件数 × 同一规格和批次的经核验平均单件质量 | 件数；抽样组件质量；样本数 | kg 组件输入 | `af-pefcr-2025-v3-1` |
| `calc_active_sodium_hydroxide` | 氢氧化钠制剂 | 活性物当量质量 = 净制剂质量 × 经核验氢氧化钠质量分数 | 领用制剂；退回制剂；活性物质量分数 | kg 100% 活性物当量氢氧化钠 | `eu-textiles-bat-2022-2508` |
| `calc_reference_normalization` | 每项清单交换 | 归一化交换 = 报告期交换量 ÷ 报告期净合格成品服装质量 | 交换量；合格产品质量 | 每 1 kg 参考产品的交换量 | `ec-pef-2021-2279` |
| `calc_garment_mass_balance` | 从裁剪到终检 | 核对外层面料、缝纫线、里料、衬料、闭合件、合格服装、实测库存变化、裁剪废料、线头、不合格服装和保留返工；调查每项残差。 | 材料输入；中间和最终输出；废物；库存变化；保留返工 | 报告期质量平衡核对 | `af-pefcr-2025-v3-1` |
| `calc_water_balance` | 条件性湿整理 | 水平衡残差 = 新鲜进水 + 其他声明水输入 - 废水排放 - 实测产品水分变化 - 单独计量的蒸发或滞留水 | 进出水表；成衣含湿；蒸发估算 | 披露的水平衡残差 | `eu-textiles-bat-2022-2508` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每条流记录 | 每行仅保留一种化学或物理上具体的交换；披露每个没有双核 UUID 的行并保留身份决定。 | manifest 清单身份审查和核验记录 |
| `dq_product_specification` | 参考产品 | 记录每项必需限定信息，并将其关联至经批准的产品规格和物料清单。 | 产品规格；物料清单；检验放行 |
| `dq_temporal_coverage` | 前景活动数据 | 覆盖有代表性的连续报告期，并识别停机、试产、异常运行和缺失区间。 | 带日期的计量、生产、库存、批次和废物记录 |
| `dq_meter_quality` | 质量、电力、水和蒸汽记录 | 使用经校准设备，并保留有效期、分辨率、换算方法和共用仪表处理。 | 校准证书；仪表日志；分配工作表 |
| `dq_completeness` | 过程清单 | 核对材料、组件、水、能源、产品、废物、废水、库存变化和相关直接排放；解释每项残差和排除。 | 质量平衡；水平衡；能源核对；排除日志 |
| `dq_representativeness` | 上游数据集 | 将地理位置、技术、材料成分、再生含量、供应状态、电压、蒸汽压力和时间段与所声明前景交换匹配。 | 数据集选择记录；供应商规格；数据质量评价 |
| `dq_primary_data` | 场址控制操作 | 所有前景数量均使用场址和生产订单记录；不得以 AI 生成范围或默认数量替代缺失记录。 | 采集协议证据和源系统提取记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 state100 Product 流 UUID `e5e9f30a-061b-4cbc-bdb3-3d86985acff6`、精确 CPC 28221 身份、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、参考单位 kg、1 kg 数量及全部必需限定信息。 | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | 每张过程清单卡 | 每张卡只允许一种具体交换；拒绝集合标签、组合公用工程、材料选择器和占位身份。 | `eu-textiles-bat-2022-2508` |
| `validate_uuid_evidence` | 每个含 UUID 的行 | 同时要求混合检索选择证据和 state100 直读证据；否则省略 UUID，并在 manifest 审查元数据中保留逐行拒绝。 | `unsd-cpc-3-2025` |
| `validate_bilingual_alignment` | 英文和中文 PCR 文件 | 要求两种呈现中的 process_id、row_id、受控词、来源 id 和 UUID 顺序完全相同。 | `ec-pef-2021-2279` |
| `validate_required_processes` | 前景路线 | 要求 material_cutting、garment_assembly 和 inspection_packaging；仅在报告场址进行声明的湿处理或热处理时要求 garment_wet_finishing。 | `af-pefcr-2025-v3-1`; `jrc-textiles-bref-2023` |
| `validate_foreground_amounts` | 每项非固定清单交换 | 要求关联的采集协议和报告期前景记录；拒绝 AI 生成的数量范围和无记录默认值。 | `af-pefcr-2025-v3-1`; `ec-pef-2021-2279` |
| `validate_mass_balance` | 成衣生产 | 要求将每项材料输入与合格产品、库存变化、其特定废物输出、次品和保留返工进行核对。 | `af-pefcr-2025-v3-1` |
| `validate_wet_finishing` | 条件性 garment_wet_finishing | 适用时，除本处定义的代表性行外，还要求每种实际化学品、公用工程、废水流、废物流和相关直接排放的独立记录。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_packaging_separation` | 终检与包装 | 要求将 PE-LD 服装袋和瓦楞纸板箱作为独立输入，并从 1 kg 净参考产品中排除二者。 | `af-pefcr-2025-v3-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明 CPC 28221 针织或钩编男式/男童服装子型和生产路线的前景制造数据包 |
| downstream_use | 经审查后可发布为 `secondary_dataset` 或 `background_dataset`，并投影至 `process` 或 `lifecyclemodel` 记录 |
| allowed_use | 在地理位置、技术、成分、服装子型、尺码组合、整理路线和时间段具有代表性时，用于产品特定制造清单、供应商数据交换、经核验热点分析和下游生命周期模型 |
| excluded_use | 未对齐功能表现时直接比较显著不同服装；没有寿命和护理情景的使用阶段声明；替代纤维、纱线、面料、分销、使用或生命末期数据集；独立审查前作环境声明 |
| required_metadata | PCR id；参考 UUID；服装子型；穿着者群体；纤维成分；针织/钩编结构；物料清单；尺码组合；净质量；颜色和整理；组件适用性；场址和地理位置；供应商路线；纳入过程；报告期；分配；上游数据集；废物去向；采集协议；身份缺口 |
| required_quality_disclosure | 原始数据覆盖；仪表和秤校准；质量、水和能源平衡残差；缺失区间；共用仪表分配；代理数据集；UUID 省略；排除；异常运行；湿整理适用性；审查状态 |
| update_trigger | 服装子型、成分、结构、物料清单、供应商湿处理状态、场址、技术、整理配方、分配、包装、废物路线、报告期、参考流身份、来源规则或任何重要数据质量条件发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0 Explanatory Notes，子类 28221，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-13） | 精确产品类别范围和正式名称 |
| `af-pefcr-2025-v3-1` | 官方指南（`official_guidance`） | Technical Secretariat of the Product Environmental Footprint Category Rules for Apparel and Footwear，Product Environmental Footprint Category Rules: Apparel and Footwear，Version 3.1，2025-04-29，https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（检索于 2026-08-13；由欧盟委员会 PEF 方法门户链接） | 物料清单要求、服装制造过程分解、制造废物、原始数据规则和物理分配 |
| `ec-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，ELI：http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-13） | 生命周期清单边界、分配层级、数据质量、归一化和披露 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-13） | 纺织湿处理操作、工艺化学品、水、蒸汽、能源、废水和监测语境 |
| `eu-textiles-bat-2022-2508` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，ELI：http://data.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13） | 输入/输出清单、单位水耗和能耗计算、化学品记录、废水监测和整理过程完整性 |
