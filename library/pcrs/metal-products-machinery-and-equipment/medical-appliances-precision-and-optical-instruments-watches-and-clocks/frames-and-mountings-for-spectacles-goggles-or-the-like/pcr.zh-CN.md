---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.frames-and-mountings-for-spectacles-goggles-or-the-like
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 眼镜、护目镜或类似品用镜架及装配件

## 1. 范围与适用性

本 PCR 适用于生产用于承载眼镜镜片、护目镜镜片、处方插片或类似光学元件的未装镜片镜架及装配件。范围包括以未装最终矫正或防护镜片状态供应的全框、半框、无框、折叠式及类似结构。数据包应分别声明塑料板材路线和金属丝材路线，并覆盖成形、连接、抛光、清洗、按路线采用的表面处理、总装、检验和包装。

默认范围不包括成品眼镜、护目镜、太阳镜、镜片、光学滤光片、完整眼部防护用品、单独销售的眼镜盒、零售装配、使用、维修和寿命终止阶段。前景数据包必须识别实际镜架材料、结构、表面处理和市场状态；不得把下列未采用路线的条件性行平均计入产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.frames-and-mountings-for-spectacles-goggles-or-the-like |
| classification_refs | CPC 3.0: 48313，精确分类语境 |
| covered_products | 未装镜片眼镜架及装配件；未装镜片护目镜框及装配件；无框和半框装配件；作为可销售镜架完成装配的框架或装配组件 |
| excluded_products | 装有最终镜片的眼镜和护目镜；眼镜镜片和光学滤光片；完整眼部防护用品；单独销售的眼镜盒；未装配为可销售镜架的散装零件；零售和维修服务 |
| representative_product | 以净质量表示的一副合格、未装镜片且已包装的眼镜架或装配件 |
| production_route | 采购材料和组件，经切割或成形、连接、抛光、清洗、按路线采用的表面处理、装配、检验和包装 |
| market_state | 制造工厂门口、未装镜片并已包装，供镜片装配商、零售商或下游装配商使用的镜架或装配件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够承载所声明镜片或光学元件配置的未装镜片镜架或装配件 |
| How much | 制造工厂门口 1 kg 合格镜架及装配件净质量 |
| How well | 符合声明的采购方规格及适用镜架要求；处方眼镜架应声明是否按 ISO 12870:2024 或其他具名规范评定符合性 |
| How long or cycle | 工厂门口交付；使用寿命不属于本参考流，下游建模使用阶段时应另行声明 |
| reference_flow_link | 参考产品输出 `finished_spectacle_frame` 按实测净质量归一化后实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 眼镜、护目镜或类似品框架 `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 镜架用途；镜架结构；主要材料及牌号；塑料板材或金属路线；表面处理和涂层体系；镜片固定设计；标称尺寸；未装镜片市场状态；已包装或未包装质量口径；生产场址和地域；生产期；适用符合性规范 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_01` | 参考产品和质量计量清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明一致使用干质量或收货状态质量。参考产品净质量应排除最终镜片和任何单独销售的眼镜盒。 |
| `measurement_02` | 采购材料、组件、化学品和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 消耗质量按收货量加期初库存减期末库存、退货量和有记录的转出量计算；保留按生产期编制的库存核对。 |
| `measurement_03` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始单位读数及换算为 MJ 的记录。共享电力只能用分表电量、机器运行时间或经验证的额定负荷小时数等已披露因果驱动因素分配。 |
| `measurement_04` | 按件计数并换算为质量的镜架、螺钉、铰链和纸箱 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用批次称量或有记录的代表性质量样本。记录样本数、秤分辨率、型号组合和件数至质量的计算。 |
| `measurement_05` | 以体积记录的水性废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用针对实际槽液或废物混合物同期测得或由供应商支持的密度把实测体积换算为质量；同时保留体积和密度记录。 |

## 5. 系统边界

默认边界为镜架制造的门到门边界。起点是采购的镜架材料、微型五金件、工艺化学品、水、电力和包装进入制造场址，终点是合格未装镜片镜架完成包装并离开工厂。过程包括按路线采用的材料准备、切割或成形、金属丝矫直或模锻、机械加工、连接、抛光、清洗、可选电镀或清漆处理、装配、检验、不合格品处理、废物分类以及与生产直接相关的现场排放控制。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的镜架材料、五金件、工艺化学品、水、电力和包装以供应商声明状态进入制造场址 |
| starting_condition_role | gate_to_gate_manufacturing_input |
| product_classification_scope | 语义上对应 CPC 48313 的未装镜片镜架及装配件；不包括镜片、完整眼镜和单独散装零件 |
| recursive_input_rule | 若采购投入本身属于本 PCR 类别的镜架或装配件，则按供应质量作为一个上游产品投入记录，并把其先前制造排除在前景过程之外；不得递归重建同一类别 |
| upstream_dataset_requirement | 为每项采购材料、组件、化学品、公用工程和包装投入链接地域和技术具有代表性的上游数据集；披露任何代理或缺失上游数据集 |
| disclosure | 声明镜架材料及牌号、成形路线、连接方式、表面处理体系、生产场址、生产期、分配驱动因素、处理去向，以及每个标记为不适用的条件性行 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground_process | 纳入从收货和储存到成形、连接、抛光、清洗、按路线采用的表面处理、总装、检验、包装、废物处理及直接相关排放控制的所有现场操作。 | `unido-spectacle-frames-profile` |
| `boundary_02` | conditional_routes | 仅在声明产品路线使用相应交换时纳入醋酸纤维素、镍银合金、镀铬和清漆行；使用 `not_applicable` 前须记录经核实的不存在证据。 | `unido-spectacle-frames-profile`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `boundary_03` | excluded_activities | 除非研究目标明确扩展边界，否则排除最终镜片、单独销售的眼镜盒、零售装配、使用、维修、寿命终止、资本设备、建筑、员工出行和一般行政活动。 | `un-cpc-3-0-structure-2025`; `iso-12870-2024` |
| `boundary_04` | upstream_inputs | 采购投入的上游生产通过链接数据集表示，不在前景镜架生产过程中重复构建。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame_production` | 镜架材料准备、成形、连接、表面处理、装配、测试和包装 | required | 每个前景数据包均应纳入；本过程中仅在相应材料、表面处理或废物实际存在时纳入按路线设置的原子交换行 | 前景生产 | 工厂门口 1 kg 合格未装镜片镜架及装配件实测净质量 |

### 过程：镜架材料准备、成形、连接、表面处理、装配、测试和包装（`frame_production`）

#### 输入

##### 产品流

###### 醋酸纤维素板材（`cellulose_acetate_sheet`）

采用塑料板材路线时，记录切割、刨削、铣削、弯曲和镜腿生产消耗的板材。

- 选定流：醋酸纤维素板材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据采购和库存核对记录实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-spectacle-frames-profile`

###### 镍银合金丝（`nickel_silver_wire`）

采用该金属路线时，记录矫直、模锻、压制、镜圈成形和连接所消耗的镍银合金丝。

- 选定流：镍银合金丝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据采购和库存核对记录实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unido-spectacle-frames-profile`

###### 眼镜架用钢铰链（`steel_spectacle_hinge`）

记录安装于产品的微型钢铰链质量；不得以家具或门用铰链代替。

- 选定流：眼镜架用钢铰链
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购质量按安装件数和批次称量的单件质量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_inputs`
- 来源：`unido-spectacle-frames-profile`

###### 钢螺钉（`steel_screw`）

记录用于连接镜架前框和镜腿或闭合镜圈的钢螺钉。

- 选定流：钢螺钉 `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购质量按安装件数和批次称量的单件质量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_inputs`
- 来源：`unido-spectacle-frames-profile`

###### 浮石抛光粉（`pumice_polishing_powder`）

浮石粉以采购磨料形式跨越前景边界并用于滚筒或振动抛光时记录。

- 选定流：浮石抛光粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测领用质量减去退回库存的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_inputs`
- 来源：`unido-spectacle-frames-profile`

###### 工艺用水（`process_water`）

记录供应给清洗、抛光和按路线采用的水性表面处理操作的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入生产边界的水，不含生活用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`unido-spectacle-frames-profile`; `eu-jrc-stm-bref-2006`

###### 电力（`electricity`）

记录切割、成形、抛光、清洗、表面处理、装配、检验、包装及直接相关排放控制消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：生产线实测电力加按因果关系分配的共享生产电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`unido-spectacle-frames-profile`

###### 氢氧化钠（`sodium_hydroxide`）

采用该化学品配制碱性清洗槽时记录氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加入清洗槽的实测纯品当量质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finish_inputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 三氧化铬（`chromium_trioxide`）

仅在采用镀铬化学体系时记录加入镀铬槽的三氧化铬。

- 选定流：三氧化铬
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测纯品当量的槽液配制和补加质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finish_inputs`
- 来源：`unido-spectacle-frames-profile`; `eu-jrc-stm-bref-2006`

###### 丙烯酸清漆（`acrylic_varnish`）

声明的金属镜架表面处理采用该配方涂层时记录丙烯酸清漆消耗量。

- 选定流：丙烯酸清漆 `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测涂料领用量减未用退料量，并保留配方和固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_inputs`
- 来源：`unido-spectacle-frames-profile`; `eu-jrc-sts-bref-2020`

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录分配给生产边界内所包装镜架的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测纸箱质量按所装镜架件数或实测包装批次质量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`unido-spectacle-frames-profile`

##### 废物流

默认镜架生产过程没有废物投入流。

##### 基本流

默认镜架生产过程没有基本投入流。

#### 输出

##### 产品流

###### 完工未装镜片眼镜架（`finished_spectacle_frame`）

记录检验和包装后的合格未装镜片镜架及装配件，不含最终镜片和单独销售的眼镜盒。

- 选定流：眼镜、护目镜或类似品框架 `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：把实测合格产品净质量归一化为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_rejects`
- 来源：`un-cpc-3-0-structure-2025`; `iso-12870-2024`

##### 废物流

###### 醋酸纤维素边角料（`cellulose_acetate_offcuts`）

记录刨削、切割、铣削、钻孔和修整时产生并分类收集的醋酸纤维素板材碎片。

- 选定流：醋酸纤维素边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至再利用、回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-spectacle-frames-profile`

###### 镍银合金废料（`nickel_silver_scrap`）

记录切割、成形和修整时分类收集的洁净镍银合金丝、镜圈、鼻梁和镜腿废料。

- 选定流：镍银合金废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至内部再利用、回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-spectacle-frames-profile`

###### 废抛光介质（`waste_polishing_media`）

把滚筒或振动光饰过程排出的废抛光介质作为一项单独管理的废物交换记录。

- 选定流：废抛光介质 `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从抛光操作转移至处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`unido-spectacle-frames-profile`

###### 含铬水性废物（`chromium_aqueous_waste`）

仅在采用镀铬时，记录因换槽、拖带捕集或现场处理产生并单独管理的含铬水性废物。

- 选定流：含铬水性废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或用同期废物密度把实测体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 废碱液（`waste_alkaline_liquor`）

记录作为单独管理碱性液体废物排出的废氢氧化钠清洗槽液。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或用同期废物密度把实测体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 报废眼镜架（`rejected_spectacle_frame`）

记录检验后未返回生产的完整报废镜架；其材料组成和去向应与边角料分开记录。

- 选定流：报废眼镜架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至再利用、回收、处理或处置的最终不合格品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_rejects`
- 来源：`iso-12870-2024`

##### 基本流

###### 排放至空气的非甲烷挥发性有机化合物（`nmvoc_to_air`）

记录声明的清漆施涂和固化路线经捕集与处理后直接排放至未指定空气的 NMVOC。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或有记录的溶剂质量平衡减去捕集并转移的溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-sts-bref-2020`

###### 排放至空气的细颗粒物（`fine_particles_to_air`）

在对该粒径段进行测量时，记录研磨、抛光或喷砂经捕集与处理后直接排放至未指定空气的 PM0.2-PM2.5。

- 选定流：颗粒物 (PM0.2 - PM2.5) `4d9a8790-3ddd-11dd-936e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测浓度乘以相应生产期的归一化干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镜架输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`unido-spectacle-frames-profile`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | foreground_subdivision | 分配前应优先按镜架路线、生产线、涂层体系和生产批次进行分表计量与过程细分。 |  |
| `allocation_02` | shared_materials_and_utilities | 共享投入应采用有记录的因果驱动因素分配：直接表计、消耗质量、机器运行时间、槽液装载量或按代表性单件质量换算的件数。不得把未采用条件性路线的投入分配给产品。 |  |
| `allocation_03` | multiple_frame_models | 多种镜架型号共用过程时，除非受影响操作有更具因果性的已记录驱动因素，否则按实测净输出质量分配负荷。保留型号组合和分配合计。 |  |
| `allocation_04` | scrap_and_recycling | 在前景边界按实测质量和去向报告废料及其他废物。除非所选 LCA 方法明确要求并记录，否则不得在本 PCR 内应用避免负荷抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `frame_production` | 主要镜架材料 | 采购、库存和退货记录 | material_id; grade; supplier; receipts_mass; opening_stock; closing_stock; returns_mass; route | 用可追溯库存记录与经校准秤读数核对 | kg | 每批并每月核对 | 与产品输出相同期间 | 声明场址全部范围内生产线 | 收货量加期初库存减期末库存、退货和转出 | 采购文件；库存台账；秤校准；材料规格 |
| `cp_component_inputs` | `frame_production` | 铰链和螺钉 | 物料清单、领用和批次称量记录 | component_id; material; installed_count; issued_count; returned_count; sample_count; sample_mass | 统计安装件数并用代表性批次质量换算 | count and kg | 每型号或批次 | 与产品输出相同期间 | 全部范围内型号 | 安装件数乘有记录的平均单件质量，并与领用量核对 | 物料清单；计数记录；秤校准；抽样记录 |
| `cp_finish_inputs` | `frame_production` | 抛光、清洗、电镀和涂层投入 | 领用、退料、槽液配制和配方记录 | product_id; formulation; concentration; issued_mass; returned_mass; make_up_mass; bath_id; route | 称量领用和退回产品并核对槽液添加 | kg | 每次领用和加槽 | 与产品输出相同期间 | 每条范围内表面处理线 | 按化学品汇总净领用量或纯品当量添加量 | 库存台账；批次单；供应商规格；秤校准 |
| `cp_utilities` | `frame_production` | 工艺用水和电力 | 仪表和运行记录 | meter_id; opening_reading; closing_reading; native_unit; allocation_driver; domestic_exclusion | 读取经校准生产线仪表，或用有记录的因果驱动因素分配共享仪表 | kg water and native energy unit | 至少每月及批次边界 | 覆盖输出的代表性连续期间 | 全部范围内生产和控制设施 | 仪表差值减有记录的排除量，再按合格输出归一化 | 仪表校准；读数；分配工作表；生产日志 |
| `cp_packaging` | `frame_production` | 瓦楞纸箱 | 包装领用和装箱批次记录 | box_id; issued_count; returned_count; sample_count; sample_mass; packed_frame_count | 核对领用纸箱并对代表性纸箱作批次称量 | count and kg | 每个包装批次 | 与产品输出相同期间 | 包装操作 | 净使用件数乘有记录的平均纸箱质量并分配给所装镜架 | 领用记录；称量记录；秤校准；包装日志 |
| `cp_output_and_rejects` | `frame_production` | 合格输出和最终不合格品 | 生产、检验和处置记录 | model_id; gross_mass; excluded_lens_mass; excluded_case_mass; conforming_count; conforming_net_mass; reject_count; reject_mass; disposition | 检验后分别称量合格输出和分类的不合格品 | kg and count | 每个生产批次 | 与投入相同期间 | 全部范围内型号和生产线 | 分别汇总合格净质量和不合格品；投入按合格质量归一化 | 检验记录；秤校准；处置记录；适用测试报告 |
| `cp_waste_outputs` | `frame_production` | 分类边角料、废料、抛光介质和液体废物 | 容器、槽罐、联单和转移记录 | waste_id; composition; source_operation; gross_mass; tare_mass; volume; density; destination; transfer_date | 称量容器，或测量槽罐体积并采用同期密度 | kg; volume and density when converted | 每次转移且至少每月核对 | 与产品输出相同期间 | 全部范围内废物收集点 | 按废物身份和去向汇总净转移质量 | 秤或槽罐校准；密度记录；废物联单；接收记录 |
| `cp_air_emissions` | `frame_production` | NMVOC 和 PM0.2-PM2.5 | 烟道或室内排风测量和溶剂平衡 | pollutant; concentration; dry_gas_volume; sampling_period; capture_mass; transferred_solvent_mass; production_mass | 对匹配的环境区室和粒径段采用场址测量；NMVOC 也可采用完整溶剂质量平衡 | kg and supporting concentration/volume units | 每次规定测试和生产期 | 声明期间内代表性运行条件 | 每个范围内排放点 | 污染物浓度乘干气体积，或经核实溶剂平衡，再按合格输出归一化 | 实验室报告；仪器校准；流量测量；溶剂核对；控制装置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | purchased material consumption | 消耗质量 = 收货量 + 期初库存 - 期末库存 - 退货 - 有记录的对外转出 | 采购和库存记录 | 各行消耗 kg |  |
| `calculation_02` | counted component or box mass | 分配质量 = 安装或使用件数乘代表性平均单件质量 | 件数、样本数、样本质量 | 组件或包装投入 kg |  |
| `calculation_03` | aqueous waste mass | 废物质量 = 实测体积乘同期混合物密度 | 体积、密度、转移身份 | 水性废物 kg |  |
| `calculation_04` | normalized inventory | 归一化行数量 = 期间行数量除以合格镜架净质量 | 行数量、合格净质量 | 每 1 kg 参考产品的数量 |  |
| `calculation_05` | measured air emission | 排放质量 = 匹配污染物浓度乘归一化干气体积；仅扣除未在测量边界中排除且另行测得的捕集物 | 浓度、干气体积、捕集边界 | 期间污染物 kg | `eu-jrc-sts-bref-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | product identity | 区分未装镜片镜架、完整眼镜、镜片、散装零件和单独销售的眼镜盒；保留型号、材料、结构、表面处理和市场状态记录。 | 产品规格；物料清单；产品照片或图纸；CPC 范围审查 |
| `quality_02` | completeness | 在同一期间核对主要材料投入、合格输出、边角料、废料和最终不合格品；说明每项未计量损失和排除路线。 | 签署的质量平衡工作表和生产期核对 |
| `quality_03` | temporal and site coverage | 使用一个有代表性的连续生产期，并纳入声明场址全部范围内生产线、班次、表面处理操作、控制设施和废物收集点。 | 生产日历；仪表覆盖图；生产线清单；维护和停机日志 |
| `quality_04` | measurement | 使用经校准且分辨率适合小型组件和低质量排放的秤、仪表、槽罐计量和分析方法。 | 有效校准证书；采样计划；实验室报告 |
| `quality_05` | conditional routes | 每个条件性材料、化学品、涂层、废物或排放行必须记录数值或不适用证据；零值不能代替缺失数据。 | 路线声明；配方；槽液清单；工艺流程图；签署的不适用审查 |
| `quality_06` | source and destination traceability | 采购投入应链接供应商和牌号，每项废物应链接组成、处理去向和转移记录。 | 供应商声明；采购记录；废物联单；接收证明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference_flow | 确认参考输出为精确 CPC 48313 镜架/装配件流，采用 Mass 和 kg，不含最终镜片和单独销售的眼镜盒，并具有全部必需限定信息。 | `un-cpc-3-0-structure-2025`; `iso-12870-2024` |
| `validation_02` | inventory_identity | 确认每个清单卡片只含一个原子交换；拒绝伞形流、混合公用工程标签、通用包装材料标签，以及用于代替含铬水性废物行的未指定废水。 |  |
| `validation_03` | uuid_and_units | 对每个带 UUID 的行确认 state-100 流类型、中英文 baseName、分类、属性、单位组和参考单位；对 UUID 为空的行确认清单中有对应 manifest 未解决条目。 |  |
| `validation_04` | mass_and_period_reconciliation | 确认材料、组件、输出、边角料、废料、废物和不合格品覆盖同一生产期，并披露未解释的质量不平衡。 |  |
| `validation_05` | route_applicability | 确认声明材料和表面处理路线与每个已填值或不适用的条件性行一致；不得平均醋酸纤维素、镍银合金、镀铬和清漆路线。 | `unido-spectacle-frames-profile` |
| `validation_06` | direct_emissions | 确认 NMVOC 和 PM0.2-PM2.5 是排放至所述未指定空气区室的直接前景排放，而非上游电力或材料生产排放。 | `eu-jrc-sts-bref-2020` |
| `validation_07` | range_evidence | 确认仅在至少两个独立原始来源的边界、参考流、产品状态、地域和技术兼容时采用经验外部范围；否则保留前景采集要求和未解决范围证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集；经审查后可发布为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于声明镜架材料、路线、表面处理、地域和工厂门口状态下的产品碳足迹、对比 LCA、供应链建模和 lifecyclemodel 构建 |
| allowed_use | 用于符合声明语义范围和必需限定信息的产品，并披露上游数据集和分配方法 |
| excluded_use | 完整眼镜或护目镜；镜片；眼部防护用品；散装镜架零件；零售装配；使用阶段耐久性；维修；寿命终止；无路线特定数据的实质不同镜架材料或表面处理体系 |
| required_metadata | PCR id；产品和型号；镜架用途和结构；主要材料及牌号；成形和表面处理路线；镜片固定设计；净质量口径；场址和地域；期间；技术；上游数据集链接；分配驱动因素；处理去向；符合性规范 |
| required_quality_disclosure | 一手数据占比；仪表和秤覆盖率；组件质量抽样；质量平衡结果；缺失数据和代理；路线不适用证据；排放测量方法；不确定性；未解决 UUID 和范围证据状态 |
| update_trigger | 主要材料、镜架结构、成形或连接技术、表面处理化学体系、涂层配方、排放控制、供应商组合、包装、生产场址、分配驱动因素或适用产品规范发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | 正式英文分类身份，以及与成品眼镜、护目镜、镜片和零件的区分 |
| `un-cpc-v1-1-chinese` | official_guidance | 联合国统计司，《产品总分类》第 1.1 版中文本，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期 2026-09-07） | 经核实的 CPC 48313 中文术语 |
| `unido-spectacle-frames-profile` | official_guidance | 联合国工业发展组织，Techno-Economic Profile on Spectacle Frames: Final Report，文件 19404.en，https://downloads.unido.org/ot/48/19/4819673/15001-20000_19404.pdf（检索日期 2026-09-07） | 产品特定塑料和金属路线；成形、抛光、连接、清洗、表面处理、装配、公用工程、检验和包装的过程分解 |
| `iso-12870-2024` | standard | ISO 12870:2024，Ophthalmic optics - Spectacle frames - Requirements and test methods，https://committee.iso.org/standard/75916.html（检索日期 2026-09-07） | 未装镜片眼镜架范围、主要组件、市场状态和性能测试类别；未复制任何数值测试限值 |
| `eu-jrc-stm-bref-2006` | official_guidance | 欧盟委员会联合研究中心，Surface Treatment of Metals and Plastics BREF，2006 年 8 月通过，https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索日期 2026-09-07） | 水性电化学和化学表面处理边界、水和槽液投入及单独管理的处理输出 |
| `eu-jrc-sts-bref-2020` | official_guidance | 欧盟委员会联合研究中心，Surface Treatment Using Organic Solvents BREF，2020 年 12 月通过，https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation（检索日期 2026-09-07） | 清漆/涂层路线、溶剂管理以及直接 NMVOC 的采集和计算要求 |
