---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-other-vegetable-textile-fibres-woven-fabrics-of-paper-yarn
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他植物纺织纤维机织织物；纸纱机织织物

## 1. 范围与适用性

本 PCR 适用于 CPC 26590 剩余范围内以植物纺织纤维纱线制成的机织织物，以及以纸纱制成的机织织物。前景边界覆盖从接收纱线，经整经、可选上浆、织造、任何已声明的厂内湿处理、检验和包装，直至工厂大门处的机织织物产品。前景数据包必须声明产品采用其他植物纺织纤维路线还是纸纱路线，以及实际执行了哪些条件性工序。

本 PCR 不覆盖已另设 CPC 子类的棉、丝、毛、亚麻、真麻、苎麻或黄麻机织织物；特殊织物、针织物、钩编织物、簇绒织物、非织造织物、涂层织物、层压织物或服装；已声明的接收纱线边界之前的纤维或纱线生产；也不覆盖使用与生命末期阶段。若数据集包括染色、印花、涂层、层压或服装制造，必须采用适用规则集对这些工序建模，不得默认扩大本 PCR 范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-other-vegetable-textile-fibres-woven-fabrics-of-paper-yarn |
| classification_refs | CPC 3.0: 26590, exact |
| covered_products | 从已单独分类的棉、亚麻、真麻、苎麻和黄麻类别中排除后仍归入 CPC 26590 的植物纺织纤维机织织物；纸纱机织织物 |
| excluded_products | 其他已单独分类的天然纤维机织织物；人造纤维机织织物；特殊、针织、簇绒及非织造织物；作为最终产品的纱线；涂层、层压及服装制造 |
| representative_product | 由一种已声明的其他植物纺织纤维纱线或纸纱制成的工厂大门处机织织物 |
| production_route | 接收纱线；整经；可选上浆；织造；条件性厂内预处理或漂白；检验；包装 |
| market_state | 工厂大门处的坯布或厂内已处理机织织物，处理状态和包装状态已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按已声明的其他植物纺织纤维纱线路线或纸纱路线生产机织织物 |
| How much | 1 kg 符合要求且处于已声明工厂大门状态的机织织物 |
| How well | 满足已声明的组成、组织结构、单位面积质量、幅宽、含水基准、处理状态及质量规范 |
| How long or cycle | 一个具有代表性的生产期间或批次，所有纳入工序采用相同时间基准 |
| reference_flow_link | 最后一个纳入前景过程的最终合格输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他植物纺织纤维机织织物，纸纱机织织物 `60d1ccca-cd64-48de-83c4-4ceec6af40a6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass (kg) `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纱线路线; 纤维种类或纸纱身份; 纤维及混纺质量分数; 组织结构; 单位面积质量; 成品幅宽; 含水基准; 坯布或已处理状态; 上浆状态; 纳入的湿处理工序; 织机技术; 生产地理范围; 生产期间; 是否包含包装 |

构建前景数据包时，每项必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息将使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有按质量归一化的清单结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明含水和包装状态的净质量报告参考产品；归一化前将实测质量转换为 kg。 |
| `internal_product_link` | 机织织物内部转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在相同含水和处理基准上匹配每项机织织物内部输出与后续过程输入，并记录储存或抽样差异。 |
| `energy_metering` | 织造、湿处理和包装消耗的电力 | Energy | kWh | 记录适用过程和分配期间的计量电力；不得将电力转换为质量。 |
| `compressed_air_metering` | 喷气织机使用的压缩空气 | Volume | m3 | 按仪表基准记录交付的压缩空气体积，并披露压力或标准状态基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在织造厂接收外购或转入的其他植物纺织纤维纱线或纸纱 |
| starting_condition_role | 上游产品投入；纤维制备和纱线生产由供应商特定或次级上游数据集表示 |
| product_classification_scope | 仅 CPC 3.0 代码 26590，并以路线限定信息区分其他植物纺织纤维织物与纸纱织物 |
| recursive_input_rule | 同类别机织织物投入记录为上游产品流并链接独立数据集；不得在此前景系统中递归重建其生产 |
| upstream_dataset_requirement | 每项外购纱线、公用工程、化学品和包装投入均使用时间与地域具有代表性的上游数据集，并保留已声明的材料身份 |
| disclosure | 声明纱线来源、一体化与外购工序、上浆、织机技术、湿处理、废物处理、包装、地理范围、期间及任何排除工序 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_start_received_yarn` | 前景起始边界 | 从接收已声明的其他植物纺织纤维纱线或纸纱开始；通过链接数据集纳入上游纤维与纱线负荷，不得作为未报告截断。 | `un-cpc-3-0-26590`; `jrc-textiles-bref-2023` |
| `boundary_weaving_core` | 整经与织造 | 纳入整经、实际使用时的上浆、织机运行、适用时的现场压缩空气和调湿、材料损失、内部转移及织物生产产生的废物。 | `eu-2022-2508-textiles-bat` |
| `boundary_conditional_wet` | 厂内湿处理 | 仅在产品离开已声明工厂大门之前执行退浆、洗涤、精练、漂白或类似湿处理时纳入；水、能源、每种化学品及每股废水均作为独立交换记录。 | `eu-2022-2508-textiles-bat`; `jrc-textiles-bref-2023` |
| `boundary_end_mill_gate` | 前景结束边界 | 在检验和已声明包装工序之后结束，合格机织织物可离开工厂；排除分销、使用和生命末期。 | `un-cpc-3-0-26590` |
| `boundary_actual_emissions` | 直接排放与废物 | 对场址输入输出清单、许可、监测计划或处理记录识别出的每项相关直接排放和废物增加一个原子清单行；不得以归组污染物或废物标签代替。 | `eu-2022-2508-textiles-bat` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `warp_prep_weaving` | 整经、可选上浆及织造 | required | 始终纳入 | 将接收纱线转化为机织织物 | 离开织机及检验点的机织织物 kg |
| `wet_treatment` | 厂内湿处理 | conditional | 当退浆、洗涤、精练、漂白或其他湿处理在已声明工厂大门之前进行时纳入 | 将坯布转化为已声明的处理状态 | 已处理机织织物输出 kg |
| `inspection_packaging` | 最终检验与包装 | required | 始终纳入；仅当包装包含在已声明参考产品中时记录包装交换 | 放行合格的工厂大门产品 | 1 kg 参考机织织物 |

### 过程：整经、可选上浆及织造（`warp_prep_weaving`）

#### 输入

##### 产品流

###### 其他植物纺织纤维纱线（`other_vegetable_yarn_input`）

仅对其他植物纺织纤维路线记录该投入，并识别单一纤维种类和纱线规格。

- 选定流：Other vegetable textile fibre yarn
- 流属性/单位：Mass / kg
- 数量规则：生产订单实际领用的净纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_material_records`
- 来源：`un-cpc-3-0-26590`

###### 纸纱（`paper_yarn_input`）

仅对纸纱路线记录该投入，并保留供应商纱线牌号和纸张组成。

- 选定流：Paper yarn
- 流属性/单位：Mass / kg
- 数量规则：生产订单实际领用的净纸纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_material_records`
- 来源：`un-cpc-3-0-26590`

###### 改性淀粉上浆化学品（`modified_starch_input`）

将改性淀粉作为单一上浆化学品交换记录；其他上浆化学品必须使用各自独立原子行。

- 选定流：变性淀粉 `09797370-6632-42aa-9d77-e9d41ff82c75`
- 流属性/单位：Mass / kg
- 数量规则：加入浆槽的实测改性淀粉质量，扣除有记录并回用于同一批次的回收材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 上浆工艺水（`process_water_sizing_input`）

当前景设施执行上浆时记录供应的工艺水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应至上浆的实测工艺水，不含未跨越前景边界的单独计量回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 整经与织造用电力（`electricity_weaving_input`）

记录整经、上浆、织机、局部调湿及可直接归属辅助设备消耗的计量中压电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：纳入设备和生产期间的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_energy_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 喷气织造用压缩空气（`compressed_air_input`）

仅当喷气织机或其他纳入工序消耗压缩空气时记录交付的压缩空气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：按已披露压力基准计量并分配至适用织机的压缩空气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_energy_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开织造过程的机织织物（`woven_fabric_weaving_output`）

记录任何纳入湿处理或最终包装之前、经检验的机织织物。

- 选定流：其他植物纺织纤维机织织物，纸纱机织织物 `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- 流属性/单位：Mass / kg
- 数量规则：合格并转移的机织织物实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产订单或报告期输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_material_records`
- 来源：`un-cpc-3-0-26590`

##### 废物流

###### 经纱上浆废水（`warp_sizing_wastewater_output`）

记录从经纱上浆转移至厂内或厂外废水处理的未处理废水。

- 选定流：经纱上浆废水 `33617934-f2c0-4016-bb14-264de8396a2c`
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或以记录的密度将实测体积转换为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 织造纱线废料（`yarn_waste_output`）

将织机废纱、断头和从本过程移出的不可用纱线记录为一个纱线废料交换。

- 选定流：Yarn waste from weaving
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的实测纱线废料质量，与织物边角料分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 整经与织造机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_material_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 基本流

### 过程：厂内湿处理（`wet_treatment`）

#### 输入

##### 产品流

###### 进入湿处理的机织织物（`woven_fabric_wet_input`）

在与上游过程输出相同的含水基准上记录机织织物内部转移。

- 选定流：其他植物纺织纤维机织织物，纸纱机织织物 `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- 流属性/单位：Mass / kg
- 数量规则：转入已声明湿处理工序的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_material_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿处理工艺水（`process_water_wet_input`）

记录为纳入湿处理工序跨越前景边界的供应工艺水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测供应水量，内部回用水在水平衡中单独报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_material_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 湿处理用氢氧化钠（`sodium_hydroxide_wet_input`）

仅在工业级氢氧化钠加入纳入的精练、pH 控制或类似工序时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测加入的到货状态氢氧化钠，并披露浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_material_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 漂白用过氧化氢溶液（`hydrogen_peroxide_wet_input`）

仅在纳入过氧化物漂白时记录单一过氧化氢溶液交换，并披露到货浓度。

- 选定流：Hydrogen peroxide solution
- 流属性/单位：Mass / kg
- 数量规则：实测加入漂白工序的到货状态溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_material_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 湿处理用蒸汽（`steam_wet_input`）

当工业蒸汽跨越前景边界用于加热、洗涤、干燥或固化时记录外购蒸汽。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：纳入湿处理工序的计量交付蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_energy_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 湿处理用电力（`electricity_wet_input`）

记录纳入湿处理设备及可直接归属辅助设备消耗的计量中压电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：纳入湿处理设备和生产期间的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_energy_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已处理机织织物（`woven_fabric_wet_output`）

记录完成纳入湿处理工序后、最终检验与包装之前的已声明处理状态机织织物。

- 选定流：其他植物纺织纤维机织织物，纸纱机织织物 `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- 流属性/单位：Mass / kg
- 数量规则：合格已处理机织织物的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产订单或报告期输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_material_records`
- 来源：`un-cpc-3-0-26590`

##### 废物流

###### 纺织工艺废水（`textile_wastewater_output`）

当纳入湿处理产生的废水转移至水体或废水处理时记录该废水。

- 选定流：废水，纺织工艺（排放至水体） `48438fa9-4988-405c-ba44-646f134e2ecc`
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或以记录的密度将实测体积转换为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理机织织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_effluent_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 基本流

### 过程：最终检验与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入最终检验的机织织物（`woven_fabric_pack_input`）

记录来自织造或纳入湿处理过程的最终机织织物内部转移。

- 选定流：其他植物纺织纤维机织织物，纸纱机织织物 `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验的实测织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考机织织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_records`
- 来源：`un-cpc-3-0-26590`

###### 纸板卷芯（`paperboard_core_input`）

仅当纸板卷芯随织物卷离厂并包含在已声明包装状态中时记录。

- 选定流：Paperboard roll core
- 流属性/单位：Mass / kg
- 数量规则：分配至合格产品的纸板卷芯实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考机织织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚乙烯包装薄膜（`polyethylene_film_input`）

仅当聚乙烯薄膜随织物离厂并包含在已声明包装状态中时记录。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：分配至合格产品的聚乙烯薄膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考机织织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 检验与包装用电力（`electricity_pack_input`）

记录检验、卷绕及包装设备消耗的计量中压电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：生产期间检验与包装的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考机织织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考机织织物产品（`reference_woven_fabric_output`）

按已声明含水、处理和包装基准记录合格的工厂大门产品。

- 选定流：其他植物纺织纤维机织织物，纸纱机织织物 `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- 流属性/单位：Mass / kg
- 数量规则：用作参考分母的合格产品实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考机织织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_records`
- 来源：`un-cpc-3-0-26590`

##### 废物流

###### 机织织物边角料（`fabric_offcuts_output`）

将最终检验或裁边中剔除的机织织物边角料与纱线废料分开记录。

- 选定流：Woven-fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：离开最终检验与包装过程的实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考机织织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享前景工序 | 在可行时通过单独计量、过程细分、生产订单记录或其他经证明的因果分离避免分配。 | `iso-14044-2006` |
| `allocation_physical` | 机织织物产品间不可避免的共享 | 无法细分时，使用能够反映材料与能源需求变化的有记录物理关系，例如机器时间、织机纬密计数或处理质量，并一致应用。 | `iso-14044-2006` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的共享负荷 | 仅将经济分配作为有记录的后备方法；保留价格期间、币种、产品数量和敏感性结果。 | `iso-14044-2006` |
| `allocation_recycling_and_waste` | 回收上浆材料、纱线废料、边角料及废水处理 | 将回收内部材料报告为内部循环，扣减量不得超过实测投入；将外运废物或回收材料作为输出建模，并披露任何信用或负荷约定。 | `iso-14044-2006`; `eu-2022-2508-textiles-bat` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_material_records` | `warp_prep_weaving` | `other_vegetable_yarn_input`; `paper_yarn_input`; `woven_fabric_weaving_output`; `yarn_waste_output` | 称量与生产订单记录 | 流身份; 批次; 期初质量; 期末质量; 领用质量; 退库质量; 输出质量; 废物质量; 含水基准 | 经校准秤具，与生产订单和库存移动对账 | kg | 每批次或生产订单 | 完整代表性生产期间 | 所有纳入整经及织造线 | 按 row_id 汇总同基准记录，再除以合格机织织物质量 | 校准记录; 批次追溯; 库存对账; 签署生产报告 |
| `cp_sizing_records` | `warp_prep_weaving` | `modified_starch_input`; `process_water_sizing_input`; `warp_sizing_wastewater_output` | 批次单与仪表记录 | 批次 id; 化学品身份; 浓度; 化学品质量; 供应水; 回收水; 废水体积或质量; 密度 | 对账批次配方、加料记录及水或废水仪表 | kg | 每个上浆批次 | 完整代表性生产期间 | 所有纳入上浆线 | 按 row_id 汇总跨边界投入和输出；避免内部回收重复计算 | 加料校准; 仪表记录; 批次对账; 回收日志 |
| `cp_weaving_energy_records` | `warp_prep_weaving` | `electricity_weaving_input`; `compressed_air_input` | 分表与设备小时记录 | 仪表 id; 起始读数; 结束读数; 织机组; 运行小时; 空气压力基准; 生产输出 | 优先直接分表；共享仪表仅使用有记录的工程分配 | kWh; m3 | 每班次或仪表间隔 | 完整代表性生产期间 | 所有纳入整经、上浆及织造设备 | 汇总仪表差值，仅按有记录因果驱动分配共享服务 | 仪表校准; 公用工程对账; 织机日志; 分配工作表 |
| `cp_wet_material_records` | `wet_treatment` | `woven_fabric_wet_input`; `process_water_wet_input`; `sodium_hydroxide_wet_input`; `hydrogen_peroxide_wet_input`; `woven_fabric_wet_output` | 批次、加料、仪表与称量记录 | 批次 id; 织物质量; 含水基准; 化学品身份; 浓度; 加入质量; 水表读数; 输出质量 | 对每批次对账工艺配方、自动加料、仪表及织物称量 | kg | 每个湿处理批次 | 完整代表性生产期间 | 所有纳入湿处理线 | 按 row_id 汇总每项原子交换并按合格已处理织物质量归一化 | 批次单; 加料校准; 水平衡; 织物称量记录 |
| `cp_wet_energy_records` | `wet_treatment` | `steam_wet_input`; `electricity_wet_input` | 公用工程仪表记录 | 仪表 id; 起始读数; 结束读数; 批次 id; 工艺时间; 已处理输出 | 优先直接公用工程仪表；共享使用按有记录因果驱动分配 | kg; kWh | 每批次或仪表间隔 | 完整代表性生产期间 | 所有纳入湿处理设备 | 汇总仪表差值并按已处理织物质量归一化 | 仪表校准; 锅炉或供应商声明; 批次日志 |
| `cp_wet_effluent_records` | `wet_treatment` | `textile_wastewater_output` | 废水仪表与处理转移记录 | 排放点; 体积或质量; 密度; pH; 温度; 处理去向; 采样时间 | 在过程或处理边界计量相关水流，并保留处理转移证据 | kg | 每个排放间隔或批次 | 完整代表性生产期间 | 每个纳入湿处理排放点 | 排除与内部回用重叠后汇总单一废水流 | 仪表校准; 水平衡; 实验室和转移记录 |
| `cp_packaging_records` | `inspection_packaging` | `paperboard_core_input`; `polyethylene_film_input`; `electricity_pack_input`; `fabric_offcuts_output` | 包装领用、仪表与废物记录 | 包装身份; 领用质量; 退库质量; 产品订单; 电力读数; 边角料质量 | 将包装库存、设备仪表和废物称量与放行产品对账 | kg; kWh | 每个生产订单或班次 | 完整代表性生产期间 | 所有纳入检验及包装工位 | 汇总净包装领用、计量能源和实测边角料；按参考产品质量归一化 | 库存对账; 秤具与仪表校准; 废物单据 |
| `cp_final_product_records` | `inspection_packaging` | `woven_fabric_pack_input`; `reference_woven_fabric_output` | 质量放行与称量记录 | 卷 id; 路线; 组成; 幅宽; 单位面积质量; 含水基准; 处理状态; 毛重; 包装质量; 净重; 合格状态 | 称量放行织物卷，并保留质量检验和包装扣除记录 | kg | 每个放行卷或批次 | 完整代表性生产期间 | 离开已声明工厂大门的所有合格产品 | 仅汇总合格净质量；排除不合格输出及不包含的包装 | 校准记录; 放行证书; 卷追溯; 不合格日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景清单行 | 归一化数量 = 经分配的跨边界行数量 / 合格参考产品净质量 | 行数量; 分配份额; `reference_woven_fabric_output` | 每 1 kg 参考机织织物的数量 | `iso-14044-2006` |
| `calc_internal_transfer_check` | 机织织物过程链接 | 在相同含水基准上比较上游机织织物输出与下游投入；归一化前解释实测储存变化、抽样或损失 | 上游输出质量; 下游输入质量; 含水基准; 有记录变化 | 经对账内部转移 | `iso-14044-2006` |
| `calc_water_balance` | 上浆与湿处理 | 供应水 + 转入水 = 产品携带水 + 废水 + 回收/回用水 + 实测蒸发或有记录平衡差 | 供应水; 废水; 回用; 产品含水; 蒸发 | 过程水平衡及完整性标记 | `eu-2022-2508-textiles-bat` |
| `calc_mass_reconciliation` | 每个生产期间 | 纱线及其他材料投入必须在一致含水基准上与合格产品、废物、内部库存变化和有记录工艺损失对账 | 材料投入; 输出; 废物; 库存变化; 含水修正 | 质量对账及未解释差异 | `eu-2022-2508-textiles-bat` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及纱线投入 | 保留供应商和生产记录，以证明路线、纤维或纸纱身份、混纺比例以及不属于已单独分类机织织物类别。 | 供应商规格; 物料清单; CPC 范围检查; 批次追溯 |
| `dq_measurement` | 质量、能源、水、压缩空气及废水 | 可用时采用经校准直接测量；记录仪表覆盖、转换因子、共享仪表分配和不确定性。 | 校准证书; 仪表图; 账单; 分配工作表 |
| `dq_temporal` | 前景报告期间 | 使用覆盖正常生产的代表性期间，并披露停机、试验、异常工况及产品组合变化。 | 生产日历; 批次与停机日志; 异常工况记录 |
| `dq_completeness` | 投入、输出、废物及直接排放 | 将场址输入输出清单与 PCR 行对账，并为每项相关但未列出的化学品、废物或直接排放增加一个原子行。 | 输入输出清单; 化学品清单; 废物登记; 许可与监测记录 |
| `dq_wet_treatment` | 条件性湿处理过程 | 对每项纳入工序记录配方、化学品浓度、水平衡、能源、废水数量、处理去向及相关监测参数。 | 批次单; 自动加料日志; 仪表; 实验室结果; 处理记录 |
| `dq_uuid_traceability` | Tiangong 身份 | 仅使用已确认精确流语义的 UUID；非精确身份保持空缺，并在发布前解决对应 manifest 审查项。 | 混合检索结果; state-code-100 直接流读取; 审查决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 若缺少 CPC 26590、纱线路线、纤维或纸纱身份、组织结构、质量分数、处理状态或排除类别检查，则校验失败。 | `un-cpc-3-0-26590` |
| `validate_reference_mass` | 参考流 | 必须恰好以 1 kg 经核验 CPC 26590 Product flow 为参考，以 Mass 为参考属性、kg 为参考单位；包装与含水基准必须明确。 | `jrc-ilcd-flow-format-1-1` |
| `validate_process_route` | 过程图 | 必须包含 `warp_prep_weaving` 和 `inspection_packaging`；仅当已声明产品状态包含厂内湿处理时要求 `wet_treatment`，并拒绝未声明的路线扩展。 | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `validate_atomic_inventory` | 过程清单 | 每个 row_id 必须仅含一个物理或化学交换，英中 row 顺序和 UUID 必须完全对齐；拒绝归组公用工程、化学品、包装、废物或排放。 | `eu-2022-2508-textiles-bat` |
| `validate_records_and_period` | 前景数量 | 每项非不适用行必须链接采集协议，并为同一生产期间保留测量、时间覆盖、场址范围和质量证据。 | `eu-2022-2508-textiles-bat` |
| `validate_mass_and_water_balance` | 材料与水对账 | 每项纳入过程必须有质量对账；纳入上浆或湿处理时必须有水平衡；调查未解释差异，不得强制凑平。 | `eu-2022-2508-textiles-bat` |
| `validate_allocation` | 共享工序 | 必须证明已尝试过程细分或直接测量，所选驱动具有因果或其他有记录依据，任何经济后备方法均包含敏感性信息。 | `iso-14044-2006` |
| `validate_direct_releases` | 废物与排放 | 必须检查场址输入输出清单、许可和监测记录中的相关废物及直接排放；每项纳入内容必须使用独立交换并声明处理或接收环境隔室。 | `eu-2022-2508-textiles-bat` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 26590 机织织物处于已声明工厂大门状态的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projection |
| allowed_use | 纱线路线、产品状态、地理、技术、期间、包装和分配与研究匹配时的 LCI 与 LCA 建模 |
| excluded_use | 其他已单独分类织物、纱线生产、特殊织物或非织造织物、未声明染整、服装、使用阶段及生命末期 |
| required_metadata | 规范 PCR id; CPC 代码; 纱线路线; 纤维或纸纱身份; 组成; 组织结构; 单位面积质量; 幅宽; 含水基准; 处理状态; 上浆及织机技术; 地理; 期间; 包装; 分配; UUID 审查状态 |
| required_quality_disclosure | 仪表覆盖与校准; 时间代表性; 质量与水平衡; 化学品和废物完整性; 处理去向; 直接排放审查; 共享服务分配; 未解决身份 |
| update_trigger | 纱线路线、组成、织机技术、上浆化学品、湿处理配方、公用工程供应、废水处理、包装、分配方法、生产地理或代表期间发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26590` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第 3.0 版，子类 26590，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/26590 | 产品身份、纳入路线及排除项 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《纺织工业最佳可行技术参考文件》，2023 年 1 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 过程分解、织物生产及条件性湿处理边界 |
| `eu-2022-2508-textiles-bat` | 官方指南（`official_guidance`） | 欧盟委员会执行决定 (EU) 2022/2508，确立纺织工业 BAT 结论，http://data.europa.eu/eli/dec_impl/2022/2508/oj | 输入输出清单、水/能源/材料/废物监测、上浆化学品、织造能源、湿处理及废水控制 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，《环境管理 生命周期评价 要求与指南》，含适用修订，https://www.iso.org/standard/38498.html | 清单一致性、归一化、分配及报告 |
| `jrc-ilcd-flow-format-1-1` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，ILCD 格式 1.1 文档——流和单位组数据集，https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_FlowDataSet.html 及 https://eplca.jrc.ec.europa.eu/EF-node/showUnitgroup.xhtml?stock=EF3_1_background_processes&uuid=93a60a57-a4c8-11da-a746-0800200c9a66&version=03.00.003 | 参考流属性解释及 Mass/kg 参考单位关系 |
